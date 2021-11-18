// SELECTORS
const themeBtn = document.getElementById("theme-btn");
const todoInput = document.getElementById("todo-input-text");

// EVENTLISTENERS
themeBtn.addEventListener("click", themeToggle)
todoInput.addEventListener("click", placeholderToggle)
// FUNCTIONS

// toggle-dark-mode-light-mode
function themeToggle() {
    const body = document.querySelector("body");

    if(body.className === "light") {
        body.className = "dark";
    } else {
        body.className = "light"
    }
}

// add-remove-placeholder-onclick
function placeholderToggle(event) {

    if(todoInput.placeholder === "Create a new todo...") {
        todoInput.placeholder = "";
    } else {
        todoInput.placeholder = "Create a new todo...";
    }
    // if click outside the input then revert back placeholder
    document.addEventListener("click", function(event) {
        const innerClick = todoInput.contains(event.target);
        if(!innerClick) {
            todoInput.placeholder = "Create a new todo...";
        }
    })
}
