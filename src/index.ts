import { Documents, getDocuments, Version } from "./external_service";

main();

async function main(): Promise<void> {
  // 2b. scalling ->
  const response = generateDocuments();
  const documents = transformDocument((await response.next()).value);
  await saveDocument(documents);
}

async function* generateDocuments(): AsyncGenerator<Documents> {
  let response = await getDocuments();

  let documents: Documents = [];
  let INDEX = 0;

  for (INDEX; INDEX <= response.length - 1; INDEX++) {
    documents.push(...response[INDEX]);
  }

  yield await Promise.resolve(documents);
}

async function saveDocument(document: Documents) {
  for (let version of document) {
    saveVersion(version);
  }
  console.log("Saved document");
}

async function saveVersion(version: Version) {
  console.debug(version);
}

function transformDocument(document: Documents): Documents {
  console.log(`Transformed ${document}`);
  return document;
}
