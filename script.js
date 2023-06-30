const cardOne = document.getElementById('card-1-price');
const cardTwo = document.getElementById('card-2-price');
const cardThree = document.getElementById('card-3-price')
const hamburgerBtn = document.getElementById('hamburger')
const menuTab = document.getElementById('menu-tab')
const closeBtn = document.getElementById('close-tab')

function getPrices() {
    getFuboPrice();
    getGMEPrice();
    getBTUPrice();
}

function getFuboPrice() {
    
}

function initiatePopup() {
    menuTab.classList.toggle('is-active')
}

window.addEventListener('DOMContentLoaded', getPrices);
hamburgerBtn.addEventListener('click', initiatePopup);
closeBtn.addEventListener('click', initiatePopup)
