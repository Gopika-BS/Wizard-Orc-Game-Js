// for getting random numbers

function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(function () {
    return Math.floor(Math.random() * 6) + 1;
  });
}

function getDiceHtml(diceCount) {
  return getDiceRollArray(diceCount)
    .map(function (num) {
      return `<div class="dice">${num}</div>`;
    })
    .join(" ");
}

// creating an object
const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "images/wizard.png",
  health: 60,
  diceCount: 3,
};

const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "images/orc.png",
  health: 10,
  diceCount: 1,
};

// setting a function for rendering the objects

function renderCharacter(data) {
  const { elementId, name, avatar, health, diceCount } = data;
  const diceHtml = getDiceHtml(diceCount);

  document.getElementById(elementId).innerHTML = `<div class="character-card">
          <h4 class="name"> ${name} </h4>
          <img class="avatar" src="${avatar}" />
          <div class="health">health: <b> ${health} </b></div>
          <div class="dice-container">    
              ${diceHtml}
          </div>
      </div>`;
}

renderCharacter(hero);
renderCharacter(monster);
// const heroDiv = document.getElementById("hero");
// const monsterDiv = document.getElementById("monster");
// console.log(monster);

// heroDiv.innerHTML = `
// <div class="character-card">
// <h4 class="name">Wizard</h4>
// <img class="avatar" src="images/wizard.png" />
// <p class="health">health: <b> 60 </b></p>
// <div class="dice-container"><div class="dice">6</div></div>
// </div>
// `;
// monsterDiv.innerHTML = `
// <div class="character-card">
// <h4 class="name">Orc</h4>
// <img class="avatar" src="images/orc.png" />
// <p class="health">health: <b> 10 </b></p>
// <div class="dice-container"><div class="dice">4</div></div>
// </div>
// `;
