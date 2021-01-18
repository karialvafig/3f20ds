class Patient {
    constructor(name, code) {
        this.name = name;class PriorityQueue {

            constructor() {
                this.data = [];
            }
        
            enqueue(element) {
                this.data.push(element);
            }
        
            dequeue() {
                let priority = this.data[0].code;
                for (let i = 1; i < this.data.length; ++i) {
                    if (this.data[i].code < priority) {
                        priority = i;
                    }
                }
                return this.data.splice(priority, 1);
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
                    retStr += this.data[i].name + " code: "
                        + this.data[i].code + "\n";
                }
                return retStr;
            }
        
            empty() {
                return this.data.length == 0;
            }
        
        
        
        }
        
        module.exports = PriorityQueue;
        this.code = code;
    }
}

module.exports = Patient;
const PriorityQueue = require('../classes/PriorityQueue');

let p = new Patient("Smith", 5);
let ed = new PriorityQueue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
let seen = ed.dequeue();
console.log("Paciente actual: " + seen[0].name);
console.log("Pacientes en espera: ")
console.log(ed.toString());