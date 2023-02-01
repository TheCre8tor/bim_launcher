import { Documents, getDocuments, Version } from "./external_service";

main();

async function main(): Promise<void> {
  // 2b. scalling ->
  for await (const document of getDocuments()) {
    const transformedDocument = transformDocument(document);
    await saveDocument(transformedDocument);
  }
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
