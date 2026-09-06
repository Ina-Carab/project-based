const editor = document.getElementById("editor");
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const addBtn = document.getElementById("addBtn");

const bold = document.getElementById("bold");
const italic = document.getElementById("italic");
const underline = document.getElementById("underline");

const size = document.getElementById("size");
const save = document.getElementById("save");

/* MENU */

menuBtn.addEventListener("click", function () {
    menu.classList.toggle("show");
});

document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && e.target !== menuBtn) {
        menu.classList.remove("show");
    }
});

/* ADD NEW NOTE */

addBtn.addEventListener("click", function () {
    if (editor.innerText.trim() !== "") {
        if (!confirm("Create a new note?")) {
            return;
        }
    }

    editor.innerHTML = "";
    document.querySelector(".title").value = "";
    editor.focus();
});

/* BOLD */

bold.addEventListener("click", function () {
    editor.focus();
    document.execCommand("bold");
});

/* ITALIC */

italic.addEventListener("click", function () {
    editor.focus();
    document.execCommand("italic");
});

/* UNDERLINE */

underline.addEventListener("click", function () {
    editor.focus();
    document.execCommand("underline");
});

/* FONT SIZE */

size.addEventListener("change", function () {
    editor.style.fontSize = size.value + "px";
    editor.focus();
});

/* SAVE */

save.addEventListener("click", function () {

    const note = {
        title: document.querySelector(".title").value,
        content: editor.innerHTML
    };

    localStorage.setItem(
        "A17_Notepad",
        JSON.stringify(note)
    );

    alert("Note Saved ✓");
});

/* LOAD */

window.addEventListener("load", function () {

    const saved = localStorage.getItem("A17_Notepad");

    if (saved) {

        const note = JSON.parse(saved);

        document.querySelector(".title").value =
            note.title || "";

        editor.innerHTML =
            note.content || "";
    }

    editor.focus();
});