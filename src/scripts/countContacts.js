import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const result = await fs.readFile(PATH_DB, 'utf8');
    const contactsCount = JSON.parse(result).length;
    return contactsCount;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
