const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");

button.addEventListener("click", addTodoItem);

function addTodoItem() {
    const text = input.value.trim();
    if (text === "") {
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
    <span class="todo-text">${text}</span>
    <button class="delete-btn">Delete</button>
  `;

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    const todoTextSpan = li.querySelector(".todo-text");
    const deleteBtn = li.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    list.appendChild(li);
    input.value = "";
}