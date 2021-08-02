const { it, expect } = require('@jest/globals')
const Intern = require('../lib/Intern')

describe("Verify Intern Class", () => {
    describe("Verify school", () => {
        it("School", () => {
            const testSchool = "Monash"
            const empInstance = new Intern("ali", 2, "ali@email.com", testSchool)
            expect(empInstance.school).toBe("Monash")
        })
    })
})