import Phaser from 'phaser'

export default class Popup extends Phaser.GameObjects.Container
{
    constructor(scene, text, continuation)
    {
        super(scene);
        this.scene = scene;

        this.popup = this.createPopup(text, continuation);
    }

    createPopup(text, continuation) {
        var popup = this.scene.add.container(100, 100);

        var backgroundImage = this.scene.add.image(200, 150, 'victory');
        popup.add(backgroundImage);

        var textConfig={fontSize:'70px',fill:'#0f0',fontFamily: 'Arial'};
        var mainText = this.scene.add.text(35,100, text, textConfig)
            .setInteractive();
        
        var continueTextConfig={fontSize:'20px',fill:'#0f0',fontFamily: 'Arial'};
        var continueText = this.scene.add.text(70,200, 'Click to continue', continueTextConfig);
        continueText.setInteractive().on('pointerdown', () => {
            popup.setScale(0);
            continuation();
        });

        popup.add(mainText);
        popup.add(continueText);

        popup.setScale(0);

        return popup;
    }

    show()
    {
        this.popup.setScale(1);
    }
}