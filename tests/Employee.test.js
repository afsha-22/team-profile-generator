const Employee = require('../lib/Employee')

describe("Verify Employee class", () => {
    describe("Initialisation", () => {
        it("Verify name", () => {
            const testName = "Rowan"
            const empInstance = new Employee(testName)
            expect(empInstance.name).toBe(testName)
        })

        it("Verify id", () => {
            const testId = '5'
            const empInstance = new Employee("Tom", testId)
            expect(empInstance.id).toBe(testId)
        })

        it("Verify email", () => {
            const testEmail = 'email@email.com'
            const empInstance = new Employee("Tom", 6, testEmail)
            expect(empInstance.email).toBe(testEmail)
        })
    })
})