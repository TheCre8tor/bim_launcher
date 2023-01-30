export const getDocuments = async (): Promise<Array<Documents>> => {
  let attribute1 = new Map<string, string>();
  let attribute2 = new Map<string, string>();
  let attribute3 = new Map<string, string>();

  attribute1.set("name", "BREEZ-MJT-GH-B1-DR-A-0001.pdf");
  attribute1.set("role", "A");
  attribute1.set("version", "V1");

  attribute2.set("name", "BREEZ-MJT-GH-GF-DR-A-0001.pdf");
  attribute2.set("role", "A");
  attribute2.set("version", "V2");

  attribute3.set("name", "BREEZ-MJT-ZZ-01-DR-0002.pdf");
  attribute3.set("role", "A");
  attribute3.set("version", "V1");

  let version1 = new Version(attribute1);
  let version2 = new Version(attribute1);
  let version3 = new Version(attribute3);

  let document1 = new Documents([version1, version2]);
  let document2 = new Documents([version3]);

  return [document1, document2];
};

export class Version {
  attribute: Map<string, string>;

  constructor(attribute: Map<string, string>) {
    this.attribute = attribute;
  }
}

export class Documents {
  documents: Array<Version>;

  constructor(document: Array<Version>) {
    this.documents = document;
  }
}
