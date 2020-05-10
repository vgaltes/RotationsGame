import Phaser from 'phaser'

export default class End extends Phaser.Scene
{
    constructor(numberOfScenes)
    {
        super('End');
        this.numberOfScenes = numberOfScenes;
    }

    preload()
    {
        this.load.image('end', 'assets/end.png');
    }

    create()
    {
        this.add.image(400, 300, 'end')
            .setInteractive()
            .on('pointerdown', () => {

                window.location.reload();
            });
    }
}