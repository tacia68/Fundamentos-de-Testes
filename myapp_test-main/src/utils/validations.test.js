const {firstName} = require("../utils/validations")

describe("firtName()", () =>{
    it("should return the first name when the full name is given", () =>{
        const fullName = "Shermam Tacia da Costa Lima";
        const result = firstName(fullName);
        expect(result).toBe("Shermam");
    });

    it("should return the first name when the full name is given", () => {
        const fullName = "John Doe Etc";
        const result = firstName(fullName);
        expect(result).toBe("John");
    });

    it("should return the first name when the full name is given", () => {
        const fullName = "John Doe";
        const result = firstName(fullName);
        expect(result).toBe("John");
    });

    it("should return the first name when the full name is given", () => {
        const fullName = "Bruno";
        const result = firstName(fullName);
        expect(result).toBe("Bruno");
    });

    it("should return the first name when the full name is given", () => {
        const fullName = " Bruno";
        const result = firstName(fullName);
        expect(result).toBe("Bruno");
    });

    it("should return the first name when the full name is given", () => {
        const fullName = " Bruno  ";
        const result = firstName(fullName);
        expect(result).toBe("Bruno");
    });

    it("should return the first name when the full name is given", () => {
        const fullName = "";
        const result = firstName(fullName);
        expect(result).toBe("");
    });

 
   
})

