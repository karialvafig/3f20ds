  
class Dancer {

    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

}

module.exports = Dancer;
class Queue {

    constructor() {
        this.data = [];
    }

    enqueue(element) {
        this.data.push(element);
    }

    dequeue() {
        return this.data.shift();
    }

    front() {
        return this.data[0];
    }

    back() {
        return this.data[this.data.length - 1];
    }

    toString() {
        let retStr = "";
        for (let i = 0; i < this.data.length; ++i) {
            retStr += this.data[i] + "\n";
        }
        return retStr;
    }

    empty() {
        return this.data.length == 0;
    }



}

module.exports = Queue;

function dance(hombres, mujeres) {
    console.log("Los bailarines son: \n");
    while (!hombres.empty() && !mujeres.empty()) {
        let mujer = mujeres.dequeue();
        console.log("Bailarina: " + mujer.name + "\n");
        let hombre = hombres.dequeue();
        console.log("Bailarín: " + hombre.name + "\n");
    }
}

let hombres = new Queue();
hombres.enqueue(new Dancer("Carlos", "M"));
hombres.enqueue(new Dancer("Enrique", "M"));

let mujeres = new Queue();
mujeres.enqueue(new Dancer("Roberta", "F"));

dance(hombres, mujeres);

if (!mujeres.empty()) {
    console.log(mujeres.front().name + " está en espera para bailar.");
}
if (!hombres.empty()) {
    console.log(hombres.front().name + " está en espera para bailar.");
}