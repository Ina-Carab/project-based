const titleInput = document.getElementById("title");
const detailsInput = document.getElementById("details");
const addBtn = document.getElementById("addBtn");
const notesList = document.getElementById("notesList");
const count = document.getElementById("count");

let notes = JSON.parse(localStorage.getItem("notesApp")) || [];
let editIndex = -1;

function saveNotes() {
  localStorage.setItem("notesApp", JSON.stringify(notes));
}

function renderNotes() {
  notesList.innerHTML = "";

  count.textContent = notes.length;

  if (notes.length === 0) {
    notesList.innerHTML = `<div class="empty">No notes yet</div>`;
    return;
  }

  notes.forEach((note, index) => {
    const noteElement = document.createElement("div");

    noteElement.className = "note";

    noteElement.innerHTML = `
      <h3>${escapeHTML(note.title)}</h3>

      <p>${escapeHTML(note.details)}</p>

      <div class="actions">
        <button class="edit-btn" onclick="editNote(${index})">
          Edit
        </button>

        <button class="delete-btn" onclick="deleteNote(${index})">
          Delete
        </button>
      </div>
    `;

    notesList.appendChild(noteElement);
  });
}

addBtn.addEventListener("click", function () {

  const title = titleInput.value.trim();
  const details = detailsInput.value.trim();

  if (!title || !details) {
    alert("Please enter title and details.");
    return;
  }

  if (editIndex === -1) {

    notes.push({
      title: title,
      details: details
    });

  } else {

    notes[editIndex] = {
      title: title,
      details: details
    };

    editIndex = -1;
    addBtn.textContent = "ADD NOTE";
  }

  saveNotes();
  renderNotes();

  titleInput.value = "";
  detailsInput.value = "";
});


function editNote(index) {

  titleInput.value = notes[index].title;
  detailsInput.value = notes[index].details;

  editIndex = index;

  addBtn.textContent = "UPDATE NOTE";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function deleteNote(index) {

  if (!confirm("Delete this note?")) {
    return;
  }

  notes.splice(index, 1);

  saveNotes();
  renderNotes();
}


function escapeHTML(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

renderNotes();