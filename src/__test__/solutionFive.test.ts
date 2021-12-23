import { getSmallestMultiple } from "../solutions/solutionFive"

describe("solutionFive", () => {
    it("should get the smallest positive integer that is evenly divisible by all integers in the range", () => {
        expect(getSmallestMultiple(1, 10)).toEqual(2520)
        expect(getSmallestMultiple(1, 20)).toEqual(232792560)
    })
})