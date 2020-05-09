import Phaser from 'phaser'

export default class End extends Phaser.Scene
{
    constructor()
    {
        super('End');
    }

    preload()
    {
        this.load.image('end', 'assets/end.png');
    }

    create()
    {
        this.add.image(400, 300, 'end');
    }
}