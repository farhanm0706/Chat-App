const socket = io();
console.log("Hii")

const form =document.getElementById('send-message');
const input =document.getElementById('messageInp');
const msgContainer = document.querySelector('.container');

const name = prompt('Enter your name to join');

form.addEventListener('submit',(e)=>{
    e.preventDefault();


})