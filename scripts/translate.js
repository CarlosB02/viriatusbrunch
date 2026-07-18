import fs from 'fs';
import translate from 'google-translate-api-x';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ptPath = path.join(__dirname, '../constants/pt.json');
const enPath = path.join(__dirname, '../constants/en.json');
const lockPath = path.join(__dirname, '../constants/pt.lock.json');

// Load files
const pt = JSON.parse(fs.readFileSync(ptPath, 'utf8'));
let en = {};
try {
  en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
} catch (e) {}

let ptLock = {};
try {
  ptLock = JSON.parse(fs.readFileSync(lockPath, 'utf8'));
} catch (e) {}

async function translateText(text) {
  try {
    const res = await translate(text, { from: 'pt', to: 'en' });
    console.log(`Auto-Translated: "${text}" -> "${res.text}"`);
    return res.text;
  } catch (e) {
    console.error(`Error translating "${text}":`, e.message);
    return text;
  }
}

async function processTranslations(currentPt, lockedPt, currentEn) {
  const result = Array.isArray(currentPt) ? [] : {};

  for (const key in currentPt) {
    const ptValue = currentPt[key];
    const lockValue = lockedPt ? lockedPt[key] : undefined;
    const enValue = currentEn ? currentEn[key] : undefined;

    if (typeof ptValue === 'object' && ptValue !== null) {
      result[key] = await processTranslations(
        ptValue,
        lockValue,
        enValue
      );
    } else if (typeof ptValue === 'string') {
      // If the Portuguese string changed since last time, OR if there's no English translation yet
      if (ptValue !== lockValue || typeof enValue !== 'string') {
        result[key] = await translateText(ptValue);
      } else {
        // Unchanged in PT, keep the existing EN
        result[key] = enValue;
      }
    } else {
      result[key] = ptValue;
    }
  }

  return result;
}

async function main() {
  console.log('Verifying translations...');
  const newEn = await processTranslations(pt, ptLock, en);
  
  // Save updated English translations
  fs.writeFileSync(enPath, JSON.stringify(newEn, null, 2));
  
  // Save the new lock state so we know what we've already processed
  fs.writeFileSync(lockPath, JSON.stringify(pt, null, 2));
  
  console.log('Translations synced successfully!');
}

main();
