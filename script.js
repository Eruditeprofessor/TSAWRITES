const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  const note = document.createElement("div");
  note.className = "note";

  const inputBox = document.createElement("p");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");

  const img = document.createElement("img");
  img.src = "images/images/delete.png";  // ✅ Corrected nested path
  img.className = "delete-btn";

  note.appendChild(inputBox);
  note.appendChild(img);
  notesContainer.appendChild(note);

  updateStorage();
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.classList.contains("input-box")) {
    e.target.onkeyup = function () {
      updateStorage();
    };
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
