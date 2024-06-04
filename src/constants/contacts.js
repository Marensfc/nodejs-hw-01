import path from 'node:path';

const workDirectory = process.cwd();

export const PATH_DB = path.join(workDirectory, 'src', 'db', 'db.json');
