
/* hamburger menu open/close */

const menuToggle = document.querySelector('#mobile_icon');
const mobileNavContainer = document.querySelector('#mobile_nav');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('menu_icon_active');
    mobileNavContainer.classList.toggle('mobile_nav_inactive');
}


/* modal window LOG IN */

let logInModal = document.getElementById('log_in_modal');

let accBtn = document.getElementById("log_in_btn");

let logCls = document.getElementById("log_in_cls");

accBtn.onclick = function() {
    logInModal.style.display = "block";
}

logCls.onclick = function() {
    logInModal.style.display = "none";
}


/* modal window SIGN IN */

let signInModal = document.getElementById('sign_in_modal');

let signBtn = document.getElementById("sign_in_btn");

let signCls = document.getElementById("sign_in_cls");

signBtn.onclick = function() {
    signInModal.style.display = "block";
}

signCls.onclick = function() {
    signInModal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == signInModal) {
        signInModal.style.display = "none";
    } else if (event.target == logInModal) {
        logInModal.style.display = "none";
    }
}

/* guests */

let count = 1;
let btnPlus = document.getElementById("plusPeople");
let btnMinus = document.getElementById("minusPeople");
let display = document.getElementById("people");

btnPlus.onclick = function(plus) {
    count++;
    display.innerHTML = count;
};

btnMinus.onclick = function(minus) {
    if (count > 1) {
        count--;
        display.innerHTML = count;
    }
};