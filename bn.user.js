// ==UserScript==
// @name         Better Navbar for Scratch
// @namespace    http://scratch.mit.edu/users/7Snails/
// @version      0.0.1
// @description  Makes the Scratch Navigation bar mroe user friendly
// @author       @7Snails
// @match        http://scratch.mit.edu/*
// @match        https://scratch.mit.edu/*
// @icon         http://tampermonkey.net/favicon.ico
// @grant        none
// @run-at       document-end
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.js
// ==/UserScript==

// Create the .remove() function
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
};

// Remove the Tips button
document.getElementsByClassName("tips")[0].remove();

// Get Navigation Bar
var list = document.getElementsByTagName("ul")[0];

// Create the Discuss button
var discussShell = document.createElement("li");
discussShell.className = 'link';
var discussA = document.createElement("a");
discussA.setAttribute('href', "/discuss");
var discussSpan = document.createElement("span");
var discussSpanText = document.createTextNode("Discuss");
discussSpan.appendChild(discussSpanText);
discussA.appendChild(discussSpan);
discussShell.appendChild(discussA);

// Insert the Discuss button and Wiki button
list.insertBefore(discussShell, list.childNodes[3]);
