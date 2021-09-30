export default (target: number) => {
    let lowFactor: number = 2
    const maxLowFactor = Math.sqrt(target)
    let largestPrimeFactor: number

    while (lowFactor <= maxLowFactor) {
        if (target % lowFactor === 0) {
            const highFactor = target / lowFactor;
            if (isPrime(highFactor)) { return highFactor }
            if (isPrime(lowFactor)) { largestPrimeFactor = lowFactor }
        }
        lowFactor ++
    }

    return largestPrimeFactor
}

const isPrime = (number: number) => {
    const max: number = Math.sqrt(number);
    let factor: number = 2

    while (factor <= max) {
        if (number % factor === 0) {
            return false
        }
        factor ++
    }
    return true
}