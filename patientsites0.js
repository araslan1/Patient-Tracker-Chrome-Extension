let sites = []
const savetabBtn = document.getElementById("save-tab")
const listEl = document.getElementById("list")
const deleteall = document.getElementById("delete-btn")
const sitesfromstorage = JSON.parse(localStorage.getItem("A_mySites"))
const returnBtn = document.getElementById("return-btn"); 

if (sitesfromstorage) {
    sites = sitesfromstorage
    render(sites)
}

savetabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        sites.push(tabs[0].url)
        render(sites)
        localStorage.setItem("A_mySites", JSON.stringify(sites) )
    })
})

deleteall.addEventListener("click", function(){
    sites = []
    render(sites)
    localStorage.removeItem("A_mySites")
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

