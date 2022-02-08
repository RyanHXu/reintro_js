var person = {
    firstName: "John",
    lastName: "Doe",
    language: "NO",
    set lang(value) {
        this.language = value.toUpperCase();
    },

    set first_name_(str) {
        this.firstName = str
    }
};


Object.defineProperty(person, "firstName", {
    writable: false,
    enumerable: false,
    configurable: true
})


person.first_name_ = "william"


console.log(person.firstName)
