function countDown(fromNumber) {
    let number = fromNumber;
    countDown(number - 1);
    if(number == 0) {
        console.log(0);
    }
}

countDown(10);