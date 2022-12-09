import { caesarEncrypt } from "./caesar";

let wordList: string[] = [];

async function fetchData() {
  const data = await fetch(
    "https://raw.githubusercontent.com/lorenbrichter/Words/master/Words/en.txt"
  );
  wordList = await (await data.text()).split("\n");
  console.log(wordList);
}

function isEnglishWord(word: string): boolean {
  // if input is in wordList, return true
  for (let i = 0; i < wordList.length; i++) {
    if (wordList[i] === word) {
      return true;
    }
  }
  return false;
}

export async function crackCaesarCipher(input: string): Promise<number> {
  // fetchData() should be awaited so that wordList is populated
  // before isEnglishWord() is called
  await fetchData();

  let maxMatches = 0;
  let maxMatchesKey = -1;
  
//   return (await isEnglishWord(input))
    for (let i = 0; i < 26; i++) {
        const decrypted = caesarEncrypt(input, i, false);
        // console.log("Input: " + input)
        /////console.log("----------------------")
        const decryptedArray = decrypted.replace(/[^a-zA-Z ]/g, "").split(" ");
        // console.log("Decrypted: " + decryptedArray + " Key: " + i);
        // log every word in the decrypted array to console in a single line
        /////console.log(decryptedArray.join(" ") + " Key: " + i);
        let matches = 0;
        for (let j = 0; j < decryptedArray.length; j++) {
            if (isEnglishWord(decryptedArray[j])) {
                matches++;
            }
        }
        if (matches > maxMatches) {
            maxMatches = matches;
            maxMatchesKey = i;
        }
        /////console.log(matches)
    }
    return maxMatchesKey;
}
