import { Documents, getDocuments, Version } from "./external_service";

makeCall();

async function makeCall(): Promise<void> {
  // 1. Continously runs, make http request to an API endpoint so that it will detect chages of documents
  let response = await getDocuments();

  // 2a. call another api to write to ->
  // 2b. scalling ->
  for (let document of response) {
    // 3. Transform the data from one platform to another
    let transformedDocument = transformDocument(document);
    saveDocument(transformedDocument);
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
