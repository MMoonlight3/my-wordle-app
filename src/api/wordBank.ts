export const WORD_BANK: string[] = [
  "APPLE",
  "WORLD",
  "REACT",
  "ROBOT",
  "SMART" // 단어는 5글자, 단어의 정답은 모두 대문자
];
//단어 추가하기
export function addWord(word: string): void {
  const newWord = word.toUpperCase();

  // 5글자가 아니면 추가안함
  if (newWord.length !== 5) {
    return;
  }

  // 이미 있는 단어면 추가안함
  if (WORD_BANK.includes(newWord)) {
    return;
  }

  WORD_BANK.push(newWord);
}


//랜덤한 단어 뽑기
export function randword(): string {
  const randomIndex = Math.floor(Math.random()*WORD_BANK.length);
  return WORD_BANK[randomIndex];
}

//단어 찾기
export function findWord(word: string): boolean {
  return WORD_BANK.includes(word.toUpperCase());
}
