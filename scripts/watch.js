import fs from 'fs';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ptPath = path.join(__dirname, '../constants/pt.json');
const translateScript = path.join(__dirname, 'translate.js');

let isTranslating = false;

function runTranslation() {
  if (isTranslating) return;
  isTranslating = true;
  
  const process = spawn('node', [translateScript], { stdio: 'inherit' });
  
  process.on('close', () => {
    isTranslating = false;
  });
}

// Initial run
runTranslation();

console.log('👀 Watching pt.json for translation changes...');
fs.watch(ptPath, (eventType, filename) => {
  if (eventType === 'change') {
    runTranslation();
  }
});
