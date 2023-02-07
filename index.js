let i = 0; 
let buttons = []
const inputPatient = document.getElementById("input-patient")
const savepatientBtn = document.getElementById("save-patient-btn")
const btngroup = document.querySelector(".btn-group")
const patient_list_selector = document.getElementById("patient_list_selector")
const deleteBtn = document.getElementById("delete_all")
const buttonsfromstorage = JSON.parse(localStorage.getItem("buttonslist"))
const errormessage = document.getElementById("error_message")

function addLinks(){
    for (let i = 0; i < buttons.length; i++){
        let curr_btn = document.getElementById("button" + i)
        curr_btn.addEventListener("click", function(){
            let opened = window.open("", "_self")
            opened.document.write(`
            <!DOCTYPE html>
            <html>
                <head>
                    <link rel="stylesheet" href="index1.css">
                </head>
                <body>
                    <div id="title">
                        <img id="front_page_icon" src="icon.jpg">
                        <h3 id="title_text">Patient <span id="second_word">Tracker</span></h3>
                        <button id="return-btn">Return</button>
                    </div> 
                    <button id="save-tab">Save Tab</button>
                    <button id="delete-btn">Delete All</button> 
                    <ul id ="list">
            
                    </ul>
                    <script src="patientsites${i}.js"></script>
                </body>
            </html>         
            `)
            
        })
    }
}

if (buttonsfromstorage){
    buttons = buttonsfromstorage
    render(buttons)
    addLinks()
}

deleteBtn.addEventListener("click", function(){
    buttons = []
    localStorage.clear()
    render(buttons)
})

savepatientBtn.addEventListener("click",function(){
    if (inputPatient.value != ""){
        buttons.push(inputPatient.value)
        localStorage.setItem("buttonslist", JSON.stringify(buttons))
        render(buttons)
        addLinks()
    }else{
        errormessage.innerHTML = `
            <p class="error">Error: Enter patient name!</p>
        `
    }
})


function render(buttonslist){
    let listItems = ""
    for (let i = 0; i < buttonslist.length; i++){
        listItems +=`
        <button id="button${i}">
            ${buttonslist[i]}
        </button>`
    }
    btngroup.innerHTML = listItems
}



