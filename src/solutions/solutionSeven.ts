import { isPrime } from "./solutionThree"

export const getPrimeNumber = (targetIndex: number): number => {
    let currentIndex = 2
    let currentNumber = 3
    while (currentIndex < targetIndex) {
        if (isPrime(currentNumber)) { currentIndex ++}
        currentNumber += 2
    }
    return currentNumber
}