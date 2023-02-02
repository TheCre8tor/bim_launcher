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

  // I get the total number of the page by dividing
  // the length of the data by perPage
  let totalPages = Math.ceil(data.length / perPage);

  // If page is less than 1, I assigned a default value of 1 to it.
  if (page < 1) page = 1;
  // Should in case if page is greater than totalPages,
  // return the last page data to the caller
  if (page > totalPages) page = totalPages;

  let INDEX = (page - 1) * perPage;
  let PAGE_INDEX = page * perPage;
  let documents = [];

  for (INDEX; INDEX < PAGE_INDEX && INDEX < data.length; INDEX++) {
    documents.push(data[INDEX]);
  }

  return documents;
}

// data - total data length
// offset - page
// limit - per_page

/* 
The total number of the database data really matters
- If the total data in the database is 100
- and I specify limit to 10 and offset to 0
- the data that should be returned should start from 1 - 10

- if I specify limit to 10 and offset to 1
- the data that should be returned should start from 11 - 20
*/
