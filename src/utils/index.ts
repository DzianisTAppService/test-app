export const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

export const makeSubStringBold = (str: string, substr: string): string => {
  const strLowerCase = str.toLowerCase();
  const substrLowerCase = substr.toLowerCase();

  const stringBefore = str.slice(0, strLowerCase.indexOf(substrLowerCase));
  const stringAfter = str.slice(strLowerCase.indexOf(substrLowerCase) + substr.length, str.length);
  const boldSubstring = str.slice(
    strLowerCase.indexOf(substrLowerCase),
    strLowerCase.indexOf(substrLowerCase) + substr.length,
  );

  return `${stringBefore}<b>${boldSubstring}</b>${stringAfter}`;
};
