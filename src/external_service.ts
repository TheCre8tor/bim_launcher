export async function* getDocuments(): AsyncGenerator<Documents> {
  const PER_PAGE = 2;
  const PAGE = 1;

  let response = await getDocmuentPaged(PER_PAGE, PAGE);

  for (let document of response) {
    yield document;
  }
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
): Promise<Array<Documents>> {
  let attribute1 = new Map<string, string>();
  let attribute2 = new Map<string, string>();
  let attribute3 = new Map<string, string>();
  let attribute4 = new Map<string, string>();

  attribute1.set("name", "BREEZ-MJT-GH-B1-DR-A-0001.pdf");
  attribute1.set("role", "A");
  attribute1.set("version", "V1");

  attribute2.set("name", "BREEZ-MJT-GH-GF-DR-A-0002.pdf");
  attribute2.set("role", "A");
  attribute2.set("version", "V2");

  attribute3.set("name", "BREEZ-MJT-ZZ-01-DR-0003.pdf");
  attribute3.set("role", "A");
  attribute3.set("version", "V1");

  attribute4.set("name", "BREEZ-MJT-ZZ-01-DR-0004.pdf");
  attribute4.set("role", "A");
  attribute4.set("version", "V1");

  let version1: Version = attribute1;
  let version2: Version = attribute2;
  let version3: Version = attribute3;
  let version4: Version = attribute4;

  let document1: Documents = [version1];
  let document2: Documents = [version2];
  let document3: Documents = [version3];
  let document4: Documents = [version4];

  let data = [document1, document2, document3, document4];

  let totalPages = Math.ceil(data.length / perPage);

  if (page < 1) page = 1;
  if (page > totalPages) page = totalPages;

  let INDEX = (page - 1) * perPage;
  let documents = [];

  for (INDEX; INDEX < page * perPage && INDEX < data.length; INDEX++) {
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
