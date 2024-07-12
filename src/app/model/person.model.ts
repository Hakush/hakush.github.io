export class person {
    id?: number;
    name: String;
    age: number;
    position: String;
    position2: String;
    pfrom: String;
    cellphone: String;
    email: String;
    img_src: String;
    about: String;
    about2: String;

    constructor(name: String, age: number, position: String, position2: String, pfrom: String, cellphone: String, email: String, img_src: String, about: String, about2: String) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.position2 = position2;
        this.pfrom = pfrom;
        this.cellphone = cellphone;
        this.email = email;
        this.img_src = img_src;
        this.about = about;
        this.about2 = about2;
    }
}