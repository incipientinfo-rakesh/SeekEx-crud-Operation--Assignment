import axios from "axios";

export class ContactService{
    static serverURL = 'http://localhost:7000';

    static signUpUser(){
        let dataURL = `${this.serverURL}/users`;
        return axios.post(dataURL);
    }

    static getAllContacts(){
        let dataURL = `${this.serverURL}/contacts`;
        return axios.get(dataURL);
    }

    static getContact(contactId){
        let dataURL = `${this.serverURL}/contacts/${contactId}`;
        return axios.get(dataURL);
    }

    static createContact(contact){
        let dataURL = `${this.serverURL}/contacts/`;
        return axios.post(dataURL,contact);
    }
    static updateContact(contact,contactId){
        let dataURL = `${this.serverURL}/contacts/${contactId}`;
        return axios.put(dataURL,contact);
    }

    static deleteContact(contactId){
        let dataURL = `${this.serverURL}/contacts/${contactId}`;
        return axios.delete(dataURL);
    }

    // static getAllGroups(){
    //     let dataURL = `${this.serverURL}/groups`;
    //     return axios.get(default);
    // }
}