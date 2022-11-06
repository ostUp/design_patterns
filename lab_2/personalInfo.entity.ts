export class PersonalInfo {
    id: number;
    firstName: string;
    secondName: string;
    address: string;
    phoneNumber: string;
    email: string;
    position: number;
    rank: string;
    salary: number;
    constructor(id: number, name: string ,address: string, phoneNumber: string, email: string, position: number, rank: string, salary: number){
        this.id = id;
        this.firstName = name.split(' ')[0];
        this.secondName = name.split(' ')[1];
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.position = position;
        this.rank = rank;
        this.salary = salary;
    }
}