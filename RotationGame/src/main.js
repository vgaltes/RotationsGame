import Phaser from 'phaser'
import Step from './scenes/Step'
import End from './scenes/End'

var hours = ['twelve', 'three', 'six', 'nine'];

function getRandomHour(otherOption) {
	var option = undefined;

	while(option == otherOption || option == undefined){
		var index = Math.floor(Math.random() * Math.floor(5));
		option = hours[index];
	}
		
	return option;
}

var steps = [];
for (var i = 1; i < 9; i++)
{
	var stepName = `Step${i}`;
	var nextStepName = (i != 8) ? `Step${i+1}` : 'End';
	var option1 = getRandomHour();
	var option2 = getRandomHour(option1);

	steps.push(new Step(stepName, nextStepName, option1, option2))
	if ( i == 8) {
		steps.push(new End())
	}
}


const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 }
		}
	},
	scene: steps,
	parent: 'rotation-game'
}

export default new Phaser.Game(config)
