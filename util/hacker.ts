import { caesarEncrypt } from "./caesar";

let wordList: string[] = [];

async function fetchData() {
    const data = await fetch("https://raw.githubusercontent.com/lorenbrichter/Words/master/Words/en.txt");
    wordList = await (await data.text()).split("\n");
    console.log(wordList)
}

async function isEnglishWord(input: string): Promise<boolean> {
    // create array splitting text by newlines
    console.log(wordList) 
    for (let i = 0; i < wordList.length; i++) {
        if (wordList[i] === input) {
            return true;
        }
    }
    return false;

}

export async function crackCaesarCipher(input: string): Promise<boolean> {
    fetchData();

    // if input is in wordList, return true
    for (let i = 0; i < wordList.length; i++) {
        if (wordList[i] === input) {
            return true;
        }
    }
    return false;    
}