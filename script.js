document.getElementById("addNewBtn").addEventListener("click", function () {
    document.getElementById("popupForm").style.display = "block";
});

document.querySelector(".close-btn").addEventListener("click", function () {
    document.getElementById("popupForm").style.display = "none";
});

document.getElementById("todoForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const deadline = document.getElementById("deadline").value;

    const todoItem = document.createElement("li");
    todoItem.innerHTML = `<strong>${title}</strong><br>${description}<br><em>Deadline: ${deadline}</em>`;
    
    document.getElementById("todoList").appendChild(todoItem);

    document.getElementById("popupForm").style.display = "none";
    document.getElementById("todoForm").reset();
});

