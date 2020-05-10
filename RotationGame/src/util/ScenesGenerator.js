import Step from '../scenes/Step'
import End from '../scenes/End'

const HOURS = ['twelve', 'three', 'six', 'nine'];

export default class ScenesGenerator
{
    constructor()
    {

    }

    createScenes(numberOfScenes)
    {
        var steps = [];
        for (var i = 1; i < numberOfScenes + 1; i++)
        {
            var stepName = `Step${i}`;
            var nextStepName = (i != numberOfScenes) ? `Step${i+1}` : 'End';
            var option1 = this.getRandomHour();
            var option2 = this.getRandomHour(option1);

            steps.push(new Step(stepName, nextStepName, option1, option2))
            if ( i == numberOfScenes) {
                steps.push(new End(numberOfScenes))
            }
        }

        return steps;
    }

    getRandomHour(otherOption) {
        var option = undefined;

        while(option == otherOption || option == undefined){
            var index = Math.floor(Math.random() * Math.floor(5));
            option = HOURS[index];
        }
            
        return option;
    }
}