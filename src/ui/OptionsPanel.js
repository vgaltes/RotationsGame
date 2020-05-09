import Phaser from 'phaser'

export default class OptionsPanel extends Phaser.GameObjects.Container
{
    constructor(scene, configuration)
    {
        super(scene);
        this.scene = scene;
        this.container = this.scene.add.container(configuration.position.x, configuration.position.y);
        for (var i = 0; i < configuration.options.length; i++)
        {
            this.createOption(configuration.options[i], configuration.options.length, 
                i, configuration.size.width);
        }
    }

    createOption(configuration, numberOfPanels, index, panelWidth)
    {
        const desiredPanelSize = panelWidth / numberOfPanels;
        const positionX = desiredPanelSize / 2 + desiredPanelSize * index;
        const positionY = desiredPanelSize / 2;

        var panel = this.scene.add.sprite(positionX, positionY, 
            configuration.sprite);

        panel.setScale(desiredPanelSize / panel.width);

        this.container.add(panel);
    }
}
