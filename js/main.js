// imports always go at the top of the file
// this is called "an IIFE" (immediately invoked function expression)
import { getData } from "./modules/dataMiner.js"

(() => {
    console.log('fired!');

    let theThings = document.querySelector('#favourite-things-list'),
        theTemplate = document.querySelector('#fav-template').content;

    const   clickMe = document.querySelector('#button'),
            modalParent = document.querySelector('.modal-parent'),
            backgroundSec = document.querySelector('.favThings'),
            closing = document.querySelector('.closing');

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
        backgroundSec.style.filter = 'blur(5px)'
        clickMe.blur();
    }

    function closeBox() {
        modalParent.style.display = 'none'
        backgroundSec.style.filter = 'blur(0px)'
    }

    clickMe.addEventListener('click', showBox);
    closing.addEventListener('click', closeBox);

    getData(`./data.json`, buildThings);
    
})();