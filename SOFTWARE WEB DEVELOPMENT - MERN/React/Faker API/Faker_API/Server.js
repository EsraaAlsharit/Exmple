import { faker } from '@faker-js/faker';


class User {
    constructor() {
        this.firstName = faker.commerce.productName();
        this.lastName =
        this.phoneNumber = 
        this.email= 
        this.password= 
    }
}

class Company {
    constructor() {
        this.name = faker.commerce.productName();
        this.address =
        this.street =
        this.city =
        this.state =
        this.zipCode =
        this.country =
        
    }
}
// export const USERS: User[] = [];

// export function createRandomUser(): User {
//     return {
//         userId: faker.datatype.uuid(),
//         username: faker.internet.userName(),
//         email: faker.internet.email(),
//         avatar: faker.image.avatar(),
//         password: faker.internet.password(),
//         birthdate: faker.date.birthdate(),
//         registeredAt: faker.date.past(),
//     };
// }

// Array.from({ length: 10 }).forEach(() => {
//     USERS.push(createRandomUser());
// });