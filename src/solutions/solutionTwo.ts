export default (max: number): number => {
    let sum: number = 0;
    let current: number = 1;
    let next: number = 1;

    while(current <= max) {
        sum = current % 2 === 0 ? sum + current : sum;
        const tempnext = next + current;
        current = next
        next = tempnext
    }
    return sum
}