const addNote = document.getElementById("addNote");
const notesContainer = document.getElementById("notesContainer");

const colors = ["blue", "pink", "green", "yellow", "cyan"];

addNote.addEventListener("click", () => {
  const title = prompt("Enter note title:");

  if (!title || title.trim() === "") {
    return;
  }

  const note = document.createElement("div");
  const color = colors[Math.floor(Math.random() * colors.length)];

  const now = new Date();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  const time = `${String(hours).padStart(2, "0")}:${minutes} ${ampm}`;

  const date = `${String(now.getDate()).padStart(2, "0")}/${
    String(now.getMonth() + 1).padStart(2, "0")
  }/${now.getFullYear()}`;

  note.className = `note ${color}`;

  note.innerHTML = `
    <div>
      <h3>${title}</h3>
      <p>${date}</p>
    </div>

    <div class="note-right">
      <span>${time}</span>
      <b>⋮</b>
    </div>
  `;

  notesContainer.appendChild(note);
});

document.querySelectorAll(".tabs button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tabs button").forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
  });
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".note-right b")) {
    const note = e.target.closest(".note");

    const action = confirm("Delete this note?");

    if (action) {
      note.remove();
    }
  }
});