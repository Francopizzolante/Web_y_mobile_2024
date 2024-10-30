document.addEventListener("DOMContentLoaded", function () {

    const colors = ["red", "blue", "green", "black"];
    const sequence = [];
    let userSequence = [];
    let level = 1;
    let canClick = false;
  
    function getRandomColor() {
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    }
  
    function playSequence() {
      let i = 0;
      canClick = false;
  
      const interval = setInterval(() => {
        if (i < sequence.length) {
          const colorBox = document.getElementById(sequence[i]);
          colorBox.style.opacity = 0.5;
          setTimeout(() => {
            colorBox.style.opacity = 1;
            i++;
          }, 500);
        } else {
          clearInterval(interval);
          canClick = true;
        }
      }, 1000);
    } 
  
    function handleColorClick(color) {
      if (!canClick) return;
  
      userSequence.push(color);
      const colorBox = document.getElementById(color);
      colorBox.style.opacity = 0.5;
  
      setTimeout(() => {
        colorBox.style.opacity = 1;
        if (userSequence.length === sequence.length) {
          if (JSON.stringify(userSequence) === JSON.stringify(sequence)) {
            userSequence = [];
            level++;
            setTimeout(() => {
              playGame();
            }, 1000);
          } else {
              const audioError = document.createElement("audio");
              audioError.src = "game-over.mp3"; // Asegúrate de que los nombres de los archivos coincidan
              colorBox.appendChild(audioError);
              audioError.currentTime = 0; // Reiniciar el audio si se hace clic mientras se reproduce
              audioError.play();
              alert("¡Has perdido! Intenta de nuevo.");
            
            restartGame();
          }
        }
      }, 300);
    }
  
    function playGame() {
      sequence.push(getRandomColor());
      playSequence();
    }
  
    function restartGame() {
      sequence.length = 0;
      userSequence.length = 0;
      level = 1;
      playGame();
    }
  
    for (const color of colors) {
      const colorBox = document.getElementById(color);
      colorBox.addEventListener("click", () => handleColorClick(color));
    }

    playGame();
  });
  