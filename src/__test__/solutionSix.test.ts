import { sumSquareDifference } from "../solutions/solutionSix"

describe("solutionSix", () => {
    it("Finds the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum", () => {
        expect(sumSquareDifference(10)).toEqual(2640);
        expect(sumSquareDifference(100)).toEqual(25164150);
    })
})