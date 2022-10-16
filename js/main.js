// imports always go at the top of the file
// this is called "an IIFE" (immediately invoked function expression)
import { getData } from "./modules/dataMiner.js"

(() => {
    console.log('fired!');

    let theThings = document.querySelector('#favourite-things-list'),
        theTemplate = document.querySelector('#fav-template').content;
        // modalPopup = document.querySelector('.modal'),
        // modalTemplate = document.querySelector('#m-details').content;

    const   clickMe = document.querySelector('#button'),
            modalParent = document.querySelector('.modal-parent'),
            closing = document.querySelector('.closing');

            // const openButton = document.getElementById("open");
            // const modal = document.querySelector(".modal-modal");
            // // const overlay = modal.querySelector(".md_overlay");
            // const closeButton = modal.querySelector("button");

            // const openModal = () => {
            //     modal.classList.remove("hidden");
            // }
            // const closeModal = () => {
            //     modal.classList.add("hidden");
            // }

            // openButton.addEventListener("click", openModal);
            // closeButton.addEventListener("click", closeModal);

    // let newWin = window.open("/", "hello", "width=200,height=200");
    //     newWin.document.write("Hello, world!");

    // Gathering data from data.json

    function buildThings(data) {
        const favLists = Object.keys(data);

        favLists.forEach(thing => {
            let panel = theTemplate.cloneNode(true);

            let containers = panel.firstElementChild.children;

            containers[0].querySelector('img').src = `images/${data[thing].mainPic}`;
            containers[0].querySelector('img').id = thing;
            containers[0].querySelector('img').addEventListener('click', showBox);
            containers[1].textContent = data[thing].title;

            theThings.appendChild(panel);
        })
    }

    // Pop-up Box shows

    function showBox(data) {
        modalParent.style.display = 'block'
        // backgroundSec.style.filter = 'blur(10px)'
        // clickMe.blur();
    }

    function closeBox() {
        modalParent.style.display = 'none'
    }

    clickMe.addEventListener('click', showBox);
    closing.addEventListener('click', closeBox);

    getData(`./data.json`, buildThings);
})();