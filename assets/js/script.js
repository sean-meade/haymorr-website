var helpItems = document.querySelectorAll(".help-item");

console.log(helpItems);

helpItems.forEach(helpItem => helpItem.addEventListener('click', (event) => {
    if (helpItem.children[1].style.visibility === "hidden") {
        console.log(helpItem.children)
        helpItem.children[1].style.visibility = "visible";
        helpItem.style.height = "fit-content";
    } else {
        helpItem.children[1].style.visibility = "hidden";
        helpItem.style.height = "3rem";
    }
}))

function expand(){
    document.getElementById('logo-text').style.color = "#B7FDFE";
    document.getElementById('logo-image').style.width = "63px";
    
}

function returnNormal() {
    document.getElementById('logo-text').style.color = "#533745";
    document.getElementById('logo-image').style.width = "53px";
}

if (history.scrollRestoration) {
    // history.scrollRestoration = 'manual';
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}