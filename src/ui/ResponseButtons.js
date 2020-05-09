import Phaser from 'phaser'

export default class ResponseButtons extends Phaser.GameObjects.Container
{

    constructor(scene, configuration)
    {
        super(scene);
        this.scene = scene;
        this.container = this.scene.add.container(configuration.position.x, configuration.position.y);
        for (var i = 0; i < configuration.buttons.length; i++)
        {
            this.createResponseButton(configuration.buttons[i], configuration.buttons.length, 
                i, configuration.size.width);
        }
    }

    createResponseButton(configuration, numberOfButtons, index, panelWidth)
    {
        const desiredButtonSize = panelWidth / numberOfButtons;
        const positionX = desiredButtonSize / 2 + desiredButtonSize * index;
        const positionY = desiredButtonSize / 2;

        var button = this.scene.add.sprite(positionX, positionY, 
            configuration.sprite)
            .setInteractive()
            .on('pointerdown', () => {
                console.log(configuration);
                configuration.continuation()
            });

        button.setScale(desiredButtonSize / button.width);

        this.container.add(button);
    }
}
