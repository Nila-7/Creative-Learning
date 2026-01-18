function addNote() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value.trim();

    if (noteText) {
      const noteList = document.getElementById('noteList');
      const li = document.createElement('li');
      li.textContent = noteText;
      noteList.appendChild(li);
      noteInput.value = '';
    } else {
      alert("Please enter a note before saving.");
    }
  }
