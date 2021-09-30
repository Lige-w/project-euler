import solutionFour from "../solutions/solutionFour"

describe("solutionFour", () => {
    it("shoould find the largest palindrome made from the product of two 3-digit numbers.", () => {
        expect(solutionFour()).toEqual(906609)
    })
})