import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const contact = createFakeContact();

  try {
    const result = await fs.readFile(PATH_DB, 'utf8');
    const newContacts = [...JSON.parse(result), contact];
    fs.writeFile(PATH_DB, JSON.stringify(newContacts));
  } catch (error) {
    console.log(error);
  }
};

await addOneContact();
