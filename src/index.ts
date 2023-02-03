import { getDocuments, Version, Document } from "./external_service";

main();

async function main(): Promise<void> {
  // 2b. scalling ->
  for await (const document of getDocuments()) {
    const transformedDocument = transformDocument(document);
    await saveDocument(transformedDocument);
  }
}

async function saveDocument(document: Document) {
  console.debug(`Saved document: ${document.name}`);
}

async function saveVersion(version: Version) {
  console.debug(version);
}

function transformDocument(document: Document): Document {
  console.debug(`Transformed ${document.name}`);
  return document;
}
