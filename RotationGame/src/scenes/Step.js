import Phaser from 'phaser'
import ResponseButtons from '../ui/ResponseButtons'
import Popup from '../ui/Popup'
import OptionsPanel from '../ui/OptionsPanel';

export default class Step extends Phaser.Scene
{
    constructor(name, nameNextStep, firstOptionName, secondOptionName)
    {
        super(name);
        this.nameNextStep = nameNextStep;
        this.firstOptionName = firstOptionName;
        this.secondOptionName = secondOptionName;

        this.victoryPopup = undefined;
        this.lossPopup = undefined;

        this.winnerCombination = [
            {firstOption: 'twelve', secondOption: 'three', winners: ['quarterClockwise']},
            {firstOption: 'twelve', secondOption: 'six', winners: ['halfClockwise', 'halfAntiClockwise']},
            {firstOption: 'twelve', secondOption: 'nine', winners: ['quarterAntiClockwise']},
            {firstOption: 'three', secondOption: 'six', winners: ['quarterClockwise']},
            {firstOption: 'three', secondOption: 'nine', winners: ['halfClockwise', 'halfAntiClockwise']},
            {firstOption: 'three', secondOption: 'twelve', winners: ['quarterAntiClockwise']},
            {firstOption: 'six', secondOption: 'nine', winners: ['quarterClockwise']},
            {firstOption: 'six', secondOption: 'twelve', winners: ['halfClockwise', 'halfAntiClockwise']},
            {firstOption: 'six', secondOption: 'three', winners: ['quarterAntiClockwise']},
            {firstOption: 'nine', secondOption: 'twelve', winners: ['quarterClockwise']},
            {firstOption: 'nine', secondOption: 'three', winners: ['halfClockwise', 'halfAntiClockwise']},
            {firstOption: 'nine', secondOption: 'six', winners: ['quarterAntiClockwise']},
        ]

        this.winners = this.winnerCombination.find(e => e.firstOption === this.firstOptionName && e.secondOption == this.secondOptionName).winners;
    }

    preload()
    {
        this.load.image('quarterClockwise', 'assets/quarterClockwise.png');
        this.load.image('quarterAntiClockwise', 'assets/quarterAntiClockwise.png');
        this.load.image('halfClockwise', 'assets/halfClockwise.png');
        this.load.image('halfAntiClockwise', 'assets/halfAntiClockwise.png');

        this.load.image(this.firstOptionName, `assets/${this.firstOptionName}.png`);
        this.load.image(this.secondOptionName, `assets/${this.secondOptionName}.png`);
 
        this.load.image('victory', 'assets/victory.png');
    }

    create()
    {
        this.createResponseButtons(
            ['quarterClockwise', 'quarterAntiClockwise', 'halfClockwise', 'halfAntiClockwise'].map(e => {
                return {sprite: e, continuation: this.getContinuation(e)}
            }));

        this.createOptionsPanel([{sprite: this.firstOptionName}, {sprite: this.secondOptionName}]);

        this.victoryPopup = new Popup(this, 'Well done!', () => this.transitionToNextScene());
        this.lossPopup = new Popup (this, 'Try again!', () => {});
    }

    getContinuation(response)
    {
        return (this.winners.some(w => w === response)) ? () => this.victoryPopup.show() : () => this.lossPopup.show();
    }

    createOptionsPanel(options) {
        var optionsPanel = 
            new OptionsPanel(this, {
                position: {x: 0, y: 200},
                size: {width: this.sys.game.canvas.width, height: 400},
                options: options
            });
        
        this.add.existing(optionsPanel);
    }

    createResponseButtons(buttons) {
        var responseButtons = 
            new ResponseButtons(this, {
                position: {x: 0, y: 0},
                size: {width: this.sys.game.canvas.width, height: 200},
                buttons: buttons
            });
        
        this.add.existing(responseButtons);
    }

    transitionToNextScene()
    {
        this.scene.transition({
            target: this.nameNextStep,
            duration: 0,
            moveBelow: true
        })
    }
}