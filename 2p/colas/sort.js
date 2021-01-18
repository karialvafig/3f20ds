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

function distribute(nums, queues, n, digit) {
    for (let i = 0; i < n; ++i) {
        if (digit == 1) {
            queues[nums[i] % 10].enqueue(nums[i]);
        }
        else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}

function collect(queues, nums) {
    let i = 0;
    for (let digit = 0; digit < 10; ++digit) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}

function dispArray(arr) {
    for (let i = 0; i < arr.length; ++i) {
        console.log(arr[i] + " ");
    }
}

let queues = [];
for (let i = 0; i < 10; ++i) {
    queues[i] = new Queue();
}
let nums = [];
for (let i = 0; i < 10; ++i) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
console.log("Antes de ordenar: ");
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log("\nDespués de ordenar: ");
dispArray(nums);