import Phaser from 'phaser'
import ScenesGenerator from './util/ScenesGenerator'

var scenesGenerator = new ScenesGenerator();

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
	scene: scenesGenerator.createScenes(8),
	parent: 'rotation-game'
}

export default new Phaser.Game(config)
