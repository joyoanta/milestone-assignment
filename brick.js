function brickCalculator(brick) {

    let building = brick;
    if (building <= 10) {
        return (building * 15 * 1000);
    } else if (building <= 20) {
        return ((10 * 15) + (building - 10) * 12) * 1000;
    } else return ((10 * 15) + (10 * 12) + (building - 20) * 10) * 1000;
}

let brickAmount = brickCalculator(15);

console.log('Total Bricks Need : ', brickAmount , " PCs");

