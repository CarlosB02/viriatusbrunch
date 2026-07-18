import fs from 'fs';
import { translations } from './constants/translations.js';

fs.writeFileSync('./constants/pt.json', JSON.stringify(translations.pt, null, 2));
fs.writeFileSync('./constants/en.json', JSON.stringify(translations.en, null, 2));
console.log('Successfully extracted translations to pt.json and en.json');
