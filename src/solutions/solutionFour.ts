export default () => {
    let largestPalindrome: number = 0;
    for(let i = 101; i < 1000; i ++) {
        if (i % 10 !== 0) {
            for(let j = i; j < 1000; j ++) {
                if (j % 10 !== 0) {
                    const number = i * j
                    if (isPalindrome(number + "") && number > largestPalindrome) {
                        largestPalindrome = number
                    }
                }
            }
        }
    }
    return largestPalindrome
}

const isPalindrome = (numberString: string) => {
    if (numberString.length <= 1) { return true }
    const lastIndex = numberString.length - 1
    if (numberString[0] === numberString[lastIndex]) {
        return isPalindrome(numberString.slice(1, lastIndex))
    }
    return false
}