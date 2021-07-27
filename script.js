'use strict'

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosedModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);

const openModal = function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
};
const closedModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i = 0; i< btnShowModal.length; i++)
    btnShowModal[i].addEventListener('click', openModal);

btnClosedModal.addEventListener('click', closedModal);
overlay.addEventListener('click', closedModal);

