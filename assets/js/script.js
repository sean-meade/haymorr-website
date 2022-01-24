var helpItems = document.querySelectorAll(".help");

console.log(helpItems)

helpItems.forEach(helpItem => helpItem.addEventListener('click', (event) => {
    console.log("hello");
}))

function expand(){
    document.getElementById('logo-text').style.color = "#B7FDFE";
    document.getElementById('logo-image').style.width = "63px";
    
}

function returnNormal() {
    document.getElementById('logo-text').style.color = "#533745";
    document.getElementById('logo-image').style.width = "53px";
}

