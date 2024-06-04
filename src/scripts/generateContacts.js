import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  let contacts = [];

  for (let i = 0; i < number; i += 1) {
    contacts.push(createFakeContact());
  }

  try {
    const result = await fs.readFile(PATH_DB, 'utf8');
    const data = [...JSON.parse(result), ...contacts];
    await fs.writeFile(PATH_DB, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

await generateContacts(2);
