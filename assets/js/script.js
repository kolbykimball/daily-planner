var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY, h:mm:ss a"));

// compare current time to time block - change background color of textarea to a certain color pertaining to past present or future - use classlist.add (check with jquery as well).

var workDay = localStorage.getItem("workDay") || {
    9:"",
    10:"",
    11:"",
    12:"",
    13:"",
    14:"",
    15:"",
    16:"",
    17:"",
}

var currentHour = moment().format("H")
var textarea = document.getElementsByTagName("textarea")
console.log(textarea);
console.log(textarea[0].dataset.hour)

for (let index = 0; index < textarea.length; index++) {
    var textareaHour = textarea[index].dataset.hour;
    if (textareaHour == currentHour) {
        // add present class to this textarea 
        textarea[index].classList.add("present");
    } else if(textareaHour > currentHour) {
        // add future class 
        textarea[index].classList.add("future");
    } else {
        // add past class
        textarea[index].classList.add("past");
    }
    
}
var allButtons = document.getElementsByTagName("button")
for (let index = 0; index < allButtons.length; index++) {
    const element = allButtons[index];
    element.addEventListener("click", saveReminder);
    
}
// when save button is clicked, data in textarea is saved to local storage

    // select all buttons from html (saveBtn) 
    // when save button is clicked save specific textarea of same dive that button lives in - event.target from that click event 
    // grab the value from textarea(this is the sibling of the button)
    // save this value in the local storage (key name that makes sense) specific data-hour 
    // localStorage.setItem("key here", "value")

function saveReminder(event) {
    var buttonClicked = event.target;
    console.log(buttonClicked);
    // declaring variable to track index of button clicked
    var buttonIndex = 0;
    for (let i = 0; i < allButtons.length; i++) {
        const element = allButtons[i];
        if (buttonClicked == element) {
            buttonIndex = i;
            break
        }
    }
}


// when page loads, any data saved in local storage shows on appropriate textarea

    // define this function then immediately call it 
    // go into localStorage.getItem("key name")
    // interact with specific textareas and if there is something returned from that key name then i want that data to appear in the textarea

function showReminder() {
    localStorage.getItem("data-hour");
}

// function saveReminder() {
//     localStorage.setItem('today', JSON.stringify(today));
// }
