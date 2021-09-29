export default (target: number): number => {
    let current: number = 3
    let sum: number = 0;
    while (current < target) {
        sum = current % 5 === 0 || current % 3 === 0 ? sum + current : sum
        current ++
    }

    return sum
};