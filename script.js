// SELECTORS
const themeBtn = document.getElementById("theme-btn");
const todoInput = document.getElementById("todo-input-text");



// EVENTLISTENERS
themeBtn.addEventListener("click", themeToggle);
todoInput.addEventListener("click", placeholderToggle);

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

// TODO ADDING LIST AND REMOVING LISTS
todoInput.addEventListener("keypress", function(e) {
    const tickButton = document.getElementsByClassName("tick");
    const crossButton = document.getElementsByClassName("cross");

    if(e.key === "Enter") {
        const listContainer = document.getElementById("list-container");
        let addList = todoInput.value;
        
        // create li
        const li = document.createElement("li");
        li.innerText = addList;

        // create li buttons
        const createCheckButton = document.createElement("button");
        const createCrossButton = document.createElement("button");
        createCheckButton.classList.add("tick");
        createCrossButton.classList.add("cross");
        createCheckButton.classList.add("circle");
        createCrossButton.classList.add("circle");

        // append child buttons to list
        li.appendChild(createCheckButton);
        li.appendChild(createCrossButton);


        // append child to container
        listContainer.appendChild(li);
    }

    for(let i = 0; i < tickButton.length; i++) {
        tickButton[i].addEventListener("click", ()=> {
            tickButton[i].classList.toggle("completed");
            if(tickButton[i].classList.contains("completed")) {
                tickButton[i].innerHTML = "<img src='images/icon-check.svg'>";
                tickButton[i].parentElement.style.textDecoration = "line-through";

            } else {
                tickButton[i].innerHTML = "";
                tickButton[i].parentElement.style.textDecoration = "";
            }
        })
    }

    // delete todo task
    for(let i = 0; i < crossButton.length; i++) {
        crossButton[i].addEventListener("click", ()=> {
            crossButton[i].parentElement.style.display = "none";
        })
    }
})



    // complete todo task


    