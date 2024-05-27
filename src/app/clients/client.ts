export class Client {
    id!: number;
    name!: string;
    lastName!: string;
    createAt!: Date;
    email!: string;
    url: string;

    constructor(id: number, name: string, lastName: string, createAt: Date, email: string, url: string) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.createAt = createAt;
        this.email = email;
        this.url = url
    }
}
