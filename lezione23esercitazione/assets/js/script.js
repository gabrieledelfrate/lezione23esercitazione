function saveName() {
    const name = document.getElementById('nameInput').value;
    localStorage.setItem('savedName', name);
    displaySavedName();
  }

  function removeName() {
    localStorage.removeItem('savedName');
    displaySavedName();
  }

function displaySavedName() {
    const savedName = localStorage.getItem('savedName');
    const savedNameDiv = document.getElementById('savedName');
    if (savedName) {
      savedNameDiv.textContent = `Nome salvato: ${savedName}`;
    } else {
      savedNameDiv.textContent = '';
    }
  }

function updateCounter() {
    let counter = sessionStorage.getItem('counter');
    counter = counter ? parseInt(counter) + 1 : 1;
    sessionStorage.setItem('counter', counter);
    document.getElementById('counter').textContent = `Tempo trascorso: ${counter} secondi`;
  }

function startCounter() {
    setInterval(updateCounter, 1000);
  }


window.onload = function() {
    startCounter();
    displaySavedName();
  };