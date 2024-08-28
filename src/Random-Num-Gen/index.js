// RANDOM NUMBER GENERATOR

const singleButton = document.getElementById('single');
const aoeButton = document.getElementById('AOE');
// Results
const attackLabel = document.getElementById('attack-label');
const label1 = document.getElementById('result1');
const label2 = document.getElementById('result2');
const label3 = document.getElementById('result3');

const min = 1;
const max = 6;
let random1;
let random2;
let random3;

singleButton.onclick = function() {
    random1 = Math.floor(Math.random() * max) + min;
    attackLabel.innerHTML = 'You performed a <b>Hunt</b> attack.'

    label1.textContent = `Dice 1 rolled a ${random1}.`;
    label2.textContent = '';
    label3.textContent = '';
}


aoeButton.onclick = function() {
    random1 = Math.floor(Math.random() * max) + min;
    random2 = Math.floor(Math.random() * max) + min;
    random3 = Math.floor(Math.random() * max) + min;

    attackLabel.innerHTML = 'You performed an <b>Erudition</b> attack.'
    label1.textContent = `Dice 1 rolled a ${random1}.`;
    label2.textContent = `Dice 2 rolled a ${random2}.`;
    label3.textContent = `Dice 3 rolled a ${random3}.`;
}