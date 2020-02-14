// content.js

// Finds the password input field on the page and stores it as a variable
var passwordField = $(":password")
var displayingPassword = false

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            // Change the type attribute of the input field depending on whether it is shown
            if (displayingPassword){
                passwordField.attr("type", "password")
            } else {
                passwordField.attr("type", "text")
            }
            displayingPassword = !displayingPassword
        }
    }
);