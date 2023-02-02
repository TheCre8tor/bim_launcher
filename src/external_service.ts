export async function* getDocuments(): AsyncGenerator<Document> {
  const PER_PAGE = 10;
  const PAGE = 1;

  let response = await getDocmuentPaged(PER_PAGE, PAGE);

  for (let document of response) {
    yield document;
  }
}

export class Document {
  name: string;
  version = [
    { version: "V1", role: "A" },
    { version: "V1", role: "A" },
    { version: "V2", role: "A" },
    { version: "V", role: "A" },
  ];

  constructor(name: string) {
    this.name = name;
  }
}

function generateMultipleDocuments(count: number): Document[] {
  let documents: Document[] = [];

  for (let i = 1; i <= count; i++) {
    let documentName = `BREEZ-MJT-GH-B1-DR-A-0${i}.pdf`;
    documents.push(new Document(documentName));
  }

  return documents;
}

export type Version = Map<string, string>;
export type Documents = Array<Version>;

/**
 * @param {number} perPage - number of documents in one page
 * @param {number} page - the page order to get, first page is 1
 */
async function getDocmuentPaged(
  perPage: number,
  page: number
): Promise<Array<Document>> {
  let data = generateMultipleDocuments(100);

  let START = (page - 1) * perPage;
  let END = page * perPage;

  let documents = data.slice(START, END);

  return documents;
}
