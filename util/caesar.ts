const alphabet = [
  { char: "a", num: 0 },
  { char: "b", num: 1 },
  { char: "c", num: 2 },
  { char: "d", num: 3 },
  { char: "e", num: 4 },
  { char: "f", num: 5 },
  { char: "g", num: 6 },
  { char: "h", num: 7 },
  { char: "i", num: 8 },
  { char: "j", num: 9 },
  { char: "k", num: 10 },
  { char: "l", num: 11 },
  { char: "m", num: 12 },
  { char: "n", num: 13 },
  { char: "o", num: 14 },
  { char: "p", num: 15 },
  { char: "q", num: 16 },
  { char: "r", num: 17 },
  { char: "s", num: 18 },
  { char: "t", num: 19 },
  { char: "u", num: 20 },
  { char: "v", num: 21 },
  { char: "w", num: 22 },
  { char: "x", num: 23 },
  { char: "y", num: 24 },
  { char: "z", num: 25 },
];

function getCharNum(char: string): number {
  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i].char === char) {
      return alphabet[i].num;
    }
  }
  return -1;
}

function getIncrementedCharNum(charNum: number, increment: number): number {

  const incrementedCharNum = charNum + increment;

  if (incrementedCharNum >= 26) {
    // wrap it around
    return incrementedCharNum - 26;
  }
  if (incrementedCharNum < 0) {
    // wrap it around
    return incrementedCharNum + 26;
  }

  return incrementedCharNum;
}

function getCharFromNum(charNum: number): string {
  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i].num === charNum) {
      return alphabet[i].char;
    }
  }
  return "";
}

function incrementNumber(char: string, increment: number): string {
  const charNum = parseInt(char);
  let incrementedCharNum = charNum + increment;

  while (incrementedCharNum > 9) {
    // wrap it around
    incrementedCharNum -= 10;
  }
  while (incrementedCharNum < 0) {
    // wrap it around
    incrementedCharNum += 10;
  }

  return incrementedCharNum.toString();
}

export function caesarEncrypt(
  input: string,
  key: number,
  isEncrypt: boolean = true
): string {
  const inputArray = input.split("");

  let encryptedString: string = "";

  for (let i = 0; i < inputArray.length; i++) {
    const char = inputArray[i];
    if (/[a-z]/.test(char)) {
      // lowercase letter
      const charCode: number = getCharNum(char);
      const increment = isEncrypt ? key : -key;
      const encryptedCharCode = getIncrementedCharNum(charCode, increment);

      encryptedString += getCharFromNum(encryptedCharCode);
    } else if (/[A-Z]/.test(char)) {
      // uppercase letter
      const charCode: number = getCharNum(char.toLowerCase());
      const increment = isEncrypt ? key : -key;
      const encryptedCharCode = getIncrementedCharNum(charCode, increment);

      encryptedString += getCharFromNum(encryptedCharCode).toUpperCase(); // to uppercase for uppercase letters
    } else if (/[0-9]/.test(char)) {
        // number
        encryptedString += incrementNumber(char, key);
    }
    else {
      // other characters are not encrypted
      encryptedString += char;
    }
  }
  return encryptedString;
}