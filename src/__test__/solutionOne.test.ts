import solutionOne from "../solutions/solutionOne"

describe("solutionOne", () => {
    it("should find the sum of all the multiples of 3 or 5 below 1000", () => {
        expect(solutionOne(1000)).toEqual(233168)
    })
})