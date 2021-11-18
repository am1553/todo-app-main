// SELECTORS
const themeBtn = document.getElementById("theme-btn");
const todoInput = document.getElementById("todo-input-text");
const tickButton = document.getElementsByClassName("tick");
const crossButton = document.getElementsByClassName("cross");


// EVENTLISTENERS
themeBtn.addEventListener("click", themeToggle);
todoInput.addEventListener("click", placeholderToggle);
Array.prototype.forEach.call(tickButton, child.addEventListener("click", completeTodo))


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

    // -------------add-remove-placeholder-onclick
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

// complete todo task
function completeTodo() {

}