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

  let version1: Version = attribute1;
  let version2: Version = attribute1;
  let version3: Version = attribute3;

  let document1: Documents = [version1, version2];
  let document2: Documents = [version3];

  return [document1, document2];
};

export type Version = Map<string, string>;
export type Documents = Array<Version>;
