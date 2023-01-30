import { Documents, getDocuments, Version } from "./external_service";

const saveDocument = async (document: Documents) => {
  for (let version of document.documents) {
    saveVersion(version);
  }
  console.log("Saved document");
};

const saveVersion = async (version: Version) => {
  console.debug(version);
};

const transformDocument = (document: Documents): Documents => {
  console.log(`Transformed ${document}`);
  return document;
};

const main = async (): Promise<void> => {
  // 1. Continously runs, make http request to an API endpoint so that it will detect chages of documents
  let response = await getDocuments();

  // 2a. call another api to write to ->
  // 2b. scalling ->
  for (let document of response) {
    // 3. Transform the data from one platform to another
    let transformedDocument = transformDocument(document);
    saveDocument(transformedDocument);
  }
};

main();
