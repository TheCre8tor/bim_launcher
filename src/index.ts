import { getDocuments } from "./external_service";

const main = async (): Promise<void> => {
  let response = await getDocuments();
  console.debug(response);
};

main();
