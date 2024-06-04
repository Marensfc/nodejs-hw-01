import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf8');

    const newContacts = JSON.parse(contacts).filter((contact) => {
      const randomBoolean = Boolean(Math.round(Math.random() * 2));
      return randomBoolean;
    });

    fs.writeFile(PATH_DB, JSON.stringify(newContacts));
  } catch (error) {
    console.log(error);
  }
};

await thanos();
