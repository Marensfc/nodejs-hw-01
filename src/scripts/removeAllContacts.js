import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  const data = [];
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

await removeAllContacts();
