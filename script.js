function loadNotes() {
    let notesList = document.getElementById("notesList");
    notesList.innerHTML = "";

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    
    notes.forEach((note, index) => {
        let li = document.createElement("li");
        li.innerText = note; 
        let removeBtn = document.createElement("button");
        removeBtn.innerText = "❌";
        removeBtn.onclick = () => removeNote(index);
        li.appendChild(removeBtn);
        notesList.appendChild(li);
    });
}

function addNote() {
    let noteInput = document.getElementById("noteInput");
    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    if (noteInput.value.trim() === "") return;

    notes.push(noteInput.value);
    localStorage.setItem("notes", JSON.stringify(notes));

    noteInput.value = "";
    loadNotes();
}

function removeNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
}

window.onload = loadNotes;