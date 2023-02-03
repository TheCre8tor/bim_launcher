export async function* getDocuments(): AsyncGenerator<Document> {
  const PER_PAGE = 10;
  const PAGE = 1;

  let response = await getDocmuentPaged(PER_PAGE, PAGE);

  for (let document of response) {
    yield document;
  }
}

export type Document = {
  name: string;
  version: Array<{ version: string; role: string }>;
};

function Document(name: string): Document {
  return {
    name,
    version: [
      { version: "V1", role: "A" },
      { version: "V1", role: "A" },
      { version: "V2", role: "A" },
      { version: "V", role: "A" },
    ],
  };
}

function range(start: number, end: number): Array<number> {
  return Array.from({ length: end - start + 1 }, (_, idx) => idx + start);
}

function generateMultipleDocuments(count: number): Array<Document> {
  return range(1, count).map((idx) =>
    Document(`BREEZ-MJT-GH-B1-DR-A-0${idx}.pdf`)
  );
}

export type Version = Map<string, string>;

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
