mainMenu = document.getElementById("main-menu");
sidesMenu = document.getElementById("sides-menu");

function displayMainMenu() {
    document.getElementById("main-menu-items").id = "menu-items-shown";
}

function displaySidesMenu() {
    document.getElementById("sides-menu-items").id = "menu-items-shown";
}

waitressComments = [
    "Great choice!",
    "That's my favorite!",
    "I don't recommend that",
    "That sounds delicious!",
    "Are you sure?"
]
var waitressDisplay = document.getElementById("waitress-display");
var randomComment = Math.floor(Math.random()*waitressComments.length);

function waitressResponse() {
    var comment = document.createElement("P");
    comment.innerHTML = waitressComments[0];
    document.body.appendChild(comment);
}
  
function removeComments() {
    var element = document.getElementsByTagName("P"), index;

    for (index = element.length - 1; index >= 0; index--) {
        element[index].parentNode.removeChild(element[index]);
    }
}


totalPrice = [];
menuItem = document.getElementsByTagName("LI");


window.onclick = e => {
    if (e.target == menuItem[0] || e.target == menuItem[1] || e.target == menuItem[2]) {
        removeComments();
        totalPrice.push(parseInt(e.target.innerText.replace(/^\D+/g, '')));
        var comment = document.createElement("P");
        comment.innerHTML = ("ok, so that's one " + e.target.innerHTML)
        document.body.appendChild(comment);
        waitressResponse();
    } else if (e.target == menuItem[3] || e.target == menuItem[4] || e.target == menuItem[5]) {
        removeComments();
        totalPrice.push(parseInt(e.target.innerText.replace(/^\D+/g, '')));
        var comment = document.createElement("P");
        comment.innerHTML = ("ok, so that's one " + e.target.innerHTML)
        document.body.appendChild(comment);
        waitressResponse();
    } else {
        null
    }
    
}

function payBill() {
    removeComments();
    var sum = totalPrice.reduce(function(a, b){
        return a + b;
    }, 0);
    console.log(sum);
    var comment = document.createElement("P");
    comment.innerHTML = ("your total is $" + sum);
    document.body.appendChild(comment);
}



