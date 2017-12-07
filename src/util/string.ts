const weddingNameString = (owner: string, fiancee?: string) => {
  const ownerFirstName = owner.split(' ')[0];
  if (Boolean(fiancee)) {
    return `${ownerFirstName} & ${fiancee.split(' ')[0]}`;
  }
  return ownerFirstName;
};

export { weddingNameString };
