export class Excercises {
    private nameExcercise = 'nameX';
    private nameExcercise2 = 'nameY';
    constructor() {

    }

    public testScope(): void {
        const array = [1,2,3];
        array.forEach((_: number) => {
            console.log(this.nameExcercise2);
        });
    }

    public qualifier(scores: number[]): string {
        let sum: number = 0
        let grade: string = '';

        scores.forEach((score: number) => {
            sum += score
        });

        const avg = sum / scores.length

        if (avg >= 0 && avg <= 59) {
            grade = 'E'
        }
        else if (avg > 59 && avg <= 69) {
            grade = 'D'
        }
        else if (avg > 69 && avg <= 79) {
            grade = 'C'
        }
        else if (avg > 79 && avg <= 89) {
            grade = 'B'
        } else if (avg > 89 && avg <= 100) {
            grade = 'A'
        }
        return grade;
    }

}