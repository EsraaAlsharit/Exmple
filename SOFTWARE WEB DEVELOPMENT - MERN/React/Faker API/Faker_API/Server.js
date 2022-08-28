// import { faker } from '@faker-js/faker';
const { faker } = require('@faker-js/faker');//import for api

const express = require("express");// import for express
const app = express();

const port = 8000;//import for port


app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/user/new", (req, res) => {
    res.json({ User: new User() });
})

app.get("/api/companies/new", (req, res) => {
    res.json({ Company: new Company() })
})

app.get("/api/user/company", (req, res) => {
    res.json({
        duoUser: new User(),
        duoCompany: new Company()
    }
    )
});
app.listen( port, () => console.log(`Listening on port: ${port}`) );

class User {
    constructor() {
        this._id=faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email= faker.internet.email();
        this.password= faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id=faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state:faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        };       
    }
}