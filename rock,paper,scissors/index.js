    const choice = ['rock', 'paper', 'scissors'];
    const thePlayer = document.getElementById('dPlayer');
    const theComputer = document.getElementById('dComputer');
    const result = document.getElementById('result');
    const clear = document.getElementById('clear');
    const attemptsInfo = document.getElementById('attempts');
    


    
    let attempts = 0;

    function pickChoice(playerChoice) {
      const computerChoice = choice[Math.floor(Math.random() * choice.length)];
      attempts++;
      if(computerChoice === playerChoice) {
        result.textContent = `It's a tie!!`;
        thePlayer.textContent = `${playerChoice}`;
        theComputer.textContent = `${computerChoice}`;
        // when playerChoice is rock
      } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        result.textContent = `You won!!`;
        thePlayer.textContent = `${playerChoice}`;
        theComputer.textContent = `${computerChoice}`;
      } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        result.textContent = `You lose!!`;
        thePlayer.textContent = `${playerChoice}`;
        theComputer.textContent = `${computerChoice}`;
        // when computerChoice is rock
      } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        result.textContent = `You won!!`;
        thePlayer.textContent = `${playerChoice}`;
        theComputer.textContent = `${computerChoice}`;
      } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        result.textContent = `You lose!!`;
        thePlayer.textContent = `${playerChoice}`;
        theComputer.textContent = `${computerChoice}`;
        // paper
      } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        result.textContent = `You lose!!`;
        thePlayer.textContent = `${playerChoice}`;
        theComputer.textContent = `${computerChoice}`;
      } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        result.textContent = `You won!!`;
        thePlayer.textContent = `${playerChoice}`;
        theComputer.textContent = `${computerChoice}`;
      } 
      // Attempts
      // attemptsInfo.textContent = `${attempts}`;
      // console.log(computerChoice);
    }
    clear.addEventListener('click', () => {
      alert(`you palyed ${attempts} times`);
      theComputer.textContent = '';
      thePlayer.textContent = '';
      result.textContent = '';
      attemptsInfo.textContent = '';
      attempts = 0;
    });

