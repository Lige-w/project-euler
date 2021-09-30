import solutionThree from "../solutions/solutionThree"

describe("solutionThree", () => {
    it("finds the largest prime factor of the target number", () => {
        expect(solutionThree(600851475143)).toEqual(6857)
    })
})