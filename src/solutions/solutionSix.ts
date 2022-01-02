export const sumSquareDifference = (max: number): number => {
    const sumOfSquares =  (max * (max + 1) * ((2 * max) + 1)) / 6
    const squareOfSums = Math.pow((max * (max + 1)) / 2, 2);

    return  squareOfSums - sumOfSquares;
} 