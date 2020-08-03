import {Contact} from './contact';

export class ContactService{
    private contacts : Contact[];

    constructor()
{
    this.contacts=[];
    var contact1,contact2;
    contact1= new Contact();
    contact1.firstname="Aneesha";
    contact1.lastname="Sharma";
    contact1.mobile="9820708735"
    this.contacts.push(contact1);
    contact2= new Contact();
    contact2.firstname="Akash";
    contact2.lastname="Sharma";
    contact2.mobile="9820708734"
    this.contacts.push(contact2);
}

getContacts():Contact[]
{
    return this.contacts;
}
addContact(c:Contact)
{
    this.contacts.push(c);
}
deleteContact(c:Contact)
{
    this.contacts.pop();
}

}
