let score = JSON.parse(localStorage.getItem('score'))||{
  wins : 0,
  losses: 0,
  draws : 0
}
document.querySelector('.scores').innerHTML=`Wins: ${score.wins}, losses: ${score.losses}, draws: ${score.draws}`;
function playgame(YourMove){
  meMove = '';
  if (YourMove === 'rock'){
    meMove = document.querySelector('.rock').src;
  }
  else if (YourMove === 'paper'){
    meMove = document.querySelector('.paper').src;
  }
  else{
    meMove = document.querySelector('.scissors').src;
  }
  const RandomNumber = Math.random();
  let pcMove ='';
  let ComputerMove = '';
  if (RandomNumber<1/3){
    ComputerMove='rock';
    pcMove = document.querySelector('.rock').src;
  }
  else if (RandomNumber<2/3){
    ComputerMove='paper';
    pcMove = document.querySelector('.paper').src;
  }
  else {
    ComputerMove='scissors';
    pcMove = document.querySelector('.scissors').src;
  }
  let result = ``;
  if (ComputerMove === 'rock'){
    if (YourMove ==='rock'){
      result=`Tie`;
      score.draws += 1;
    }
    else if (YourMove ==='paper'){
      result = `You win`;
      score.wins += 1;
    }
    else{
      result=`You lose`;
      score.losses += 1;
    }
  }
  else if (ComputerMove ==='paper'){
    if (YourMove ==='rock'){
      result=`You lose`;
      score.losses += 1;
    }
    else if (YourMove ==='paper'){
      result = `Tie`;
      score.draws += 1;
    }
    else{
      result=`You win`;
      score.wins += 1;
    }
  }
  else{
    if (YourMove ==='rock'){
      result=`You win`;
      score.wins += 1;
    }
    else if (YourMove ==='paper'){
      result = `You lose`;
      score.losses += 1;
    }
    else{
      result=`Tie`;
      score.draws += 1;
    }
  }
  document.querySelector('.result').innerHTML = `${result}`;
  document.querySelector('.moves').innerHTML = `you <img src="${meMove}"><img src="${pcMove}"> computer`;
  localStorage.setItem('score',JSON.stringify(score));
  document.querySelector('.scores').innerHTML=`Wins: ${score.wins}, losses: ${score.losses}, draws: ${score.draws}`;
}