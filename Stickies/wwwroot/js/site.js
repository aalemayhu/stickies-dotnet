// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

(function () {
    console.log('x');

    const addButtonId = 'add-sticky';
    const addButton = document.getElementById(addButtonId);

    const stickiesListId = 'stickies-list';
    const stickiesList = document.getElementById(stickiesListId);

    addButton.onclick = () => {
        const sticky = document.createElement('div');
        sticky.className = 'sticky-item';
        sticky.setAttribute('contenteditable', 'true');
        stickiesList.append(sticky);
    }
})()
