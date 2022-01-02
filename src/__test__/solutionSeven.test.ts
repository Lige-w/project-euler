import { getPrimeNumber } from "../solutions/solutionSeven"

describe("solutionSeven", () => {
    it("finds the 10001st prime number", () => {
        expect(getPrimeNumber(6)).toEqual(13)
        expect(getPrimeNumber(10001)).toEqual(104731)
    })
})