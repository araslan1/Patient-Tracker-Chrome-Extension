let sites = []
const savetabBtn = document.getElementById("save-tab")
const listEl = document.getElementById("list")
const deleteall = document.getElementById("delete-btn")
const Csitesfromstorage = JSON.parse(localStorage.getItem("C_mySites"))
const returnBtn = document.getElementById("return-btn"); 

if (Csitesfromstorage) {
    sites = Csitesfromstorage
    render(sites)
}

savetabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        sites.push(tabs[0].url)
        render(sites)
        localStorage.setItem("C_mySites", JSON.stringify(sites) )
    })
})

deleteall.addEventListener("click", function(){
    sites = []
    render(sites)
    localStorage.removeItem("C_mySites")
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += "<li><a target='_blank' href='" + leads[i] + "'>" + leads[i] + "</a></li>"                            
    }
    listEl.innerHTML = listItems
}

returnBtn.addEventListener("click", function(){
    let back_page = window.open("index.html", "_self")
})