
    let score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    };

    updateScoreElement();

    function playgame(playerMove) {
      const computerMove = pickComputerMove();
      let result = '';

      if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
          result = 'Tie';
        } else if (computerMove === 'Paper') {
          result = 'You lose';
        } else {
          result = 'You win';
        }
      } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
          result = 'You win';
        } else if (computerMove === 'Paper') {
          result = 'Tie';
        } else {
          result = 'You lose';
        }
      } else if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
          result = 'You lose';
        } else if (computerMove === 'Paper') {
          result = 'You win';
        } else {
          result = 'Tie';
        }
      }

      // Update score
      if (result === 'You win') {
        score.wins += 1;
      } else if (result === 'You lose') {
        score.losses += 1;
      } else {
        score.ties += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));
      updateScoreElement();

      // Update result and moves display
      document.querySelector('.js-result').innerHTML = result;
      document.querySelector('.js-moves').innerHTML = `
        You 
        <img src="images/${playerMove.toLowerCase()}-emoji.png" class="move-icon" alt="${playerMove}">
        <img src="images/${computerMove.toLowerCase()}-emoji.png" class="move-icon" alt="${computerMove}"> Computer
      `;
    }

    function updateScoreElement() {
      document.querySelector('.js-score').innerHTML =
        `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }

    function pickComputerMove() {
      const randomNumber = Math.random();
      if (randomNumber < 1 / 3) {
        return 'Rock';
      } else if (randomNumber < 2 / 3) {
        return 'Paper';
      } else {
        return 'Scissors';
      }
    }
 