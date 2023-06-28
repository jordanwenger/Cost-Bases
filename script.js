const cardOne = document.getElementById('card-1-price');
const cardTwo = document.getElementById('card-2-price');
const cardThree = document.getElementById('card-3-price')

function getPrices() {
    getFuboPrice();
    getGMEPrice();
    getBTUPrice();
}

function getFuboPrice() {
    fetch('https://api.polygon.io/v2/aggs/ticker/FUBO/prev?adjusted=true&apiKey=key')
        .then((results) => results.json())
        .then((data) => {
            cardOne.innerHTML = `$${data.results[0].c}`
        })
}
function getGMEPrice() {
    fetch('https://api.polygon.io/v2/aggs/ticker/GME/prev?adjusted=true&apiKey=key')
        .then((results) => results.json())
        .then((data) => {
            cardTwo.innerHTML = `$${data.results[0].c}`
        })
}
function getBTUPrice() {
    fetch('https://api.polygon.io/v2/aggs/ticker/BTU/prev?adjusted=true&apiKey=key')
        .then((results) => results.json())
        .then((data) => {
            cardThree.innerHTML = `$${data.results[0].c}`
        })
}

// window.addEventListener('DOMContentLoaded', getPrices)