import solutionTwo from "../solutions/solutionTwo"

describe("solutionTwo", () => {
    it("should find the sum of the even-valued terms in the Fibonacci sequence whose values do not exceed four million", () => {
        expect(solutionTwo(4000000)).toEqual(4613732)
    })
})