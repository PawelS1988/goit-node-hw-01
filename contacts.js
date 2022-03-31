const { table } = require("console");
const path = require("path");
const fs = require("fs").promises;

const contactsPath = "./db/contacts.json";

const displayContacts = () =>
  fs
    .readFile(contactsPath)
    .then((data) => JSON.parse(data))
    .then((contact) => console.table(contact));

function listContacts() {
  fs.readFile(contactsPath)
    .then((data) => JSON.parse(data))
    .then((contacts) =>
      contacts.map(({ name, email, phone }) => ({ name, email, phone }))
    )
    .finally(displayContacts)
    .catch((err) => console.log(err.message));
}

module.exports = { listContacts };
