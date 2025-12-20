// check-i18n-structure.mjs
import { readdir, readFile } from 'fs/promises';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const APP_DIR = join(__dirname, 'app');
const REQUIRED_FILES = [
  'app/layout.tsx',
  'app/page.tsx',
  'app/[locale]/layout.tsx',
  'app/[locale]/page.tsx',
  'app/locales/client.ts',
  'app/locales/server.ts',
  'app/locales/fr.ts',
  'app/locales/en.ts',
];

const WARNINGS = [];
const ERRORS = [];

async function checkFileExists(filepath) {
  try {
    await readFile(filepath, 'utf8');
    return true;
  } catch {
    return false;
  }
}

async function checkLayoutRoot() {
  const path = join(APP_DIR, 'layout.tsx');
  if (!await checkFileExists(path)) {
    ERRORS.push('❌ app/layout.tsx manquant');
    return;
  }
  const content = await readFile(path, 'utf8');
  if (content.includes('I18nProviderClient')) {
    ERRORS.push('❌ app/layout.tsx : ne doit PAS contenir <I18nProviderClient>');
  }
  if (!content.includes('<html') || !content.includes('<body')) {
    WARNINGS.push('⚠️ app/layout.tsx : devrait contenir <html> et <body>');
  }
}

async function checkPageRoot() {
  const path = join(APP_DIR, 'page.tsx');
  if (!await checkFileExists(path)) {
    ERRORS.push('❌ app/page.tsx manquant');
    return;
  }
  const content = await readFile(path, 'utf8');
  if (!content.includes('redirect("/fr")') && !content.includes("redirect('/fr')")) {
    ERRORS.push('❌ app/page.tsx : doit rediriger vers "/fr"');
  }
  if (content.includes('Navbar') || content.includes('useI18n')) {
    ERRORS.push('❌ app/page.tsx : ne doit PAS importer de composants UI');
  }
}

async function checkLocaleLayout() {
  const dirPath = join(APP_DIR, '[locale]');
  let exists = false;
  try {
    const items = await readdir(APP_DIR);
    exists = items.includes('[locale]');
  } catch {
    exists = false;
  }

  if (!exists) {
    ERRORS.push('❌ Dossier app/[locale] manquant (vérifiez les crochets !)');
    return;
  }

  const layoutPath = join(dirPath, 'layout.tsx');
  if (!await checkFileExists(layoutPath)) {
    ERRORS.push('❌ app/[locale]/layout.tsx manquant');
    return;
  }

  const content = await readFile(layoutPath, 'utf8');
  if (!content.includes('I18nProviderClient')) {
    ERRORS.push('❌ app/[locale]/layout.tsx : doit contenir <I18nProviderClient>');
  }
  if (!content.includes('params: { locale: string }')) {
    ERRORS.push('❌ app/[locale]/layout.tsx : doit accepter params.locale');
  }
}

async function checkLocalePage() {
  const path = join(APP_DIR, '[locale]', 'page.tsx');
  if (!await checkFileExists(path)) {
    ERRORS.push('❌ app/[locale]/page.tsx manquant');
    return;
  }
  const content = await readFile(path, 'utf8');
  if (!content.includes('params: { locale: string }')) {
    WARNINGS.push('⚠️ app/[locale]/page.tsx : devrait accepter params.locale');
  }
}

async function checkLocalesDir() {
  const localesDir = join(APP_DIR, 'locales');
  try {
    const files = await readdir(localesDir);
    if (!files.includes('client.ts')) ERRORS.push('❌ app/locales/client.ts manquant');
    if (!files.includes('server.ts')) ERRORS.push('❌ app/locales/server.ts manquant');
    if (!files.includes('fr.ts')) WARNINGS.push('⚠️ app/locales/fr.ts manquant');
    if (!files.includes('en.ts')) WARNINGS.push('⚠️ app/locales/en.ts manquant');
  } catch {
    ERRORS.push('❌ Dossier app/locales manquant');
  }
}

async function checkBracketsInPath() {
  // Vérifie si le dossier [locale] existe vraiment avec crochets
  try {
    const items = await readdir(APP_DIR);
    const hasLocaleDir = items.some(item => item === '[locale]');
    if (!hasLocaleDir) {
      ERRORS.push('❌ Le dossier app/[locale] n\'existe pas avec les crochets. Vérifiez le nom exact (sensible à la casse et aux caractères spéciaux).');
    }
  } catch {
    ERRORS.push('❌ Impossible de lire le dossier app/');
  }
}

async function main() {
  console.log('🔍 Vérification de la structure i18n pour next-international...\n');

  await checkBracketsInPath();
  await checkLayoutRoot();
  await checkPageRoot();
  await checkLocaleLayout();
  await checkLocalePage();
  await checkLocalesDir();

  if (ERRORS.length > 0) {
    console.log('🔴 Erreurs critiques :');
    ERRORS.forEach(e => console.log('  ' + e));
    console.log('\n✅ Corrigez ces erreurs pour que l\'i18n fonctionne.');
  } else {
    console.log('✅ Aucune erreur critique détectée.');
  }

  if (WARNINGS.length > 0) {
    console.log('\n🟡 Avertissements :');
    WARNINGS.forEach(w => console.log('  ' + w));
  }

  if (ERRORS.length === 0 && WARNINGS.length === 0) {
    console.log('\n🎉 Structure conforme ! Redémarrez le serveur avec `npm run dev`.');
  }
}

main().catch(console.error);