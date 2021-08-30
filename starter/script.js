'use strict';




// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnClosedModal = document.querySelector('.close-modal');
// const btnOpenModal = document.querySelectorAll('.show-modal');

// //console.log(btnOpenModal);

// const openModal = function() {
// modal.classList.remove('hidden');
// overlay.classList.remove('hidden');
// }

// const closedModal = function() {
// modal.classList.add('hidden');
// overlay.classList.add('hidden');
// }

// for (let i = 0; i < btnOpenModal.length; i++)
// btnOpenModal[i].addEventListener('click', openModal);


// btnClosedModal.addEventListener('click', closedModal);
// overlay.addEventListener('click', closedModal);


// document.addEventListener('keydown', function(e){
// console.log(e.key);

// if (e.key === 'Escape' && !modal.classList.contains('hidden')) { // Inverting the Boolean Value !modal so it reads as open
//         closedModal();
//     }
// });




const modal = document.querySelector('.modal'); // selecting the .modal class
const overlay = document.querySelector('.overlay'); // selecting the .overlay class and holding it in Overlay
const btnClosedModal = document.querySelector('.close-modal'); // selecting the .closed-modal and putting it into btnClosedModal
const btnOpenModal = document.querySelectorAll('.show-modal'); //  selecting ALL .show-modal classes and holding it in btnOpenModal 

//console.log(btnOpenModal);

//  Function that removes the .hidden class to both the modal and overlay
const openModal = function() {
modal.classList.remove('hidden');
overlay.classList.remove('hidden');
}

// Function that adds .hidden class to both the modal and overlay
const closedModal = function() {
modal.classList.add('hidden');
overlay.classList.add('hidden');
}


// creating a loop that attaches a addEventListener that activates function openModal once it is clicked
for (let i = 0; i < btnOpenModal.length; i++)
btnOpenModal[i].addEventListener('click', openModal);


// Creating an addEventlistener that activates when the  click activates and activates closedModal
btnClosedModal.addEventListener('click', closedModal);
overlay.addEventListener('click', closedModal);


// Third eventListener that activates one the key Escape is pushed which then hides the modal class (using modal.classList.hidden('hidden))
document.addEventListener('keydown', function(e){
console.log(e.key);

if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
 closedModal();
}
});


