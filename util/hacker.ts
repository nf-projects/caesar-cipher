import { caesarEncrypt } from "./caesar";

let wordList: string[] = [];

async function fetchData() {
  const englishWordsData = await fetch(
    "https://raw.githubusercontent.com/lorenbrichter/Words/master/Words/en.txt"
  );
  const germanWordsData = await fetch(
    "https://gist.githubusercontent.com/MarvinJWendt/2f4f4154b8ae218600eb091a5706b5f4/raw/36b70dd6be330aa61cd4d4cdfda6234dcb0b8784/wordlist-german.txt"
  );
  wordList = await (await englishWordsData.text()).split("\n");
  wordList = await (wordList.concat((await germanWordsData.text()).split("\n")));
}

function isWord(word: string): boolean {
  for (let i = 0; i < wordList.length; i++) {
    if(word === "I" || word === "i") return true;
    if (wordList[i] === word && wordList[i].length >= 2) { // "I" is the only common one-letter word
      return true;
    }
  }
  return false;
}

export async function crackCaesarCipher(input: string, breakAfter: boolean = true): Promise<number> {
  await fetchData();

  let maxMatches = 0;
  let maxMatchesKey = -1;

   // 25% of the words + 2; if there are this many matches, it counts as the answer
  let breakAfterTries: number = ((input.replace(/[^a-zA-Z ]/g, "").split(" ")).length) * 0.25 + 2;
  
    for (let i = 0; i < 26; i++) {
        const decrypted = caesarEncrypt(input, i, false);
        const decryptedArray = decrypted.replace(/[^a-zA-Z ]/g, "").split(" ");
        let matches = 0;
        for (let j = 0; j < decryptedArray.length; j++) {
            if (isWord(decryptedArray[j])) {
                matches++;
            }
            if (matches >= breakAfterTries && breakAfter) {
              console.log("BREAKING: " + i);
                return i;
            }
        }
        if (matches > maxMatches) {
            maxMatches = matches;
            maxMatchesKey = i;
        }
    }
    return maxMatchesKey;
}