import { Excercises } from './excercises';

const excercises = new Excercises();
const arrayNotes = [80, 40, 80, 60];

function excercise1(arraynotes: number[]) {
    const note = excercises.qualifier(arraynotes);
    console.log('La nota es: ' + note);
}

excercise1(arrayNotes);
