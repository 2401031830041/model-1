const choices = document.querySelectorAll('.choice');
const result = document.getElementById('result');

choices.forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.getAttribute('data-choice');
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);

    result.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${winner}`;
  });
});

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(user, computer) {
  if(user === computer) return "It's a tie!";
  if(
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) return "You win!";
  return "Computer wins!";
}
