export const resolveIpfs = (uri: string): string => {
  if (!uri) return "";

  // ipfs://CID
  if (uri.startsWith("ipfs://")) {
    const cid = uri.replace("ipfs://", "");
    return `https://dweb.link/ipfs/${cid}`;
  }

  // https://gateway.pinata.cloud/ipfs/CID
  if (uri.includes("/ipfs/")) {
    const cid = uri.split("/ipfs/")[1];
    return `https://dweb.link/ipfs/${cid}`;
  }

  // Déjà une URL valide
  return uri;
};
