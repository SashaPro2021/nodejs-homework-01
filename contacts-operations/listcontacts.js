const fs = require("fs").promises;
const contactsPath = require("../contactsPath");

const listContacts = async () => {
    try {
        const file = await fs.readFile(contactsPath);
        const data = JSON.parse(file);
        console.table(data); 
        return data;
    } catch (error) {
        throw error;
  }
}
module.exports = listContacts;
    
