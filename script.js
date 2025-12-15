// simple script to test execution order
console.log("Web internals script loaded");

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded");
});
