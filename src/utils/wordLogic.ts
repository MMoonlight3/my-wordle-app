// 워들 색상 판정 타입
export type TileStatus = 'GREEN' | 'YELLOW' | 'GRAY';

// 게임 결과 타입
export type GameResult = "playing" | "win" | "lose";

export const checkWord = (guess: string, solution: string): TileStatus[] => {
  
  const result: TileStatus[] = Array(5).fill('GRAY'); // 초기설정 (다섯자리 모두 회색)
  const targetGuess = guess.toUpperCase()
  const targetSolution = solution.toUpperCase()
  const solutionLetterCount: Record<string, number> = {};

  for (let i = 0; i < 5; i++) { // 정답 단어 글자수 카운팅
    const solLetter = targetSolution[i];
    solutionLetterCount[solLetter] = (solutionLetterCount[solLetter] || 0) + 1;
  }

  for (let i = 0; i < 5; i++) { // 자리와 글자가 완벽하게 일치(GREEN)
    if (targetGuess[i] === targetSolution[i]) {
      result[i] = 'GREEN';
      solutionLetterCount[targetGuess[i]]--;
    }
  }
  
  for (let i = 0; i < 5; i++) {
    if (result[i] === 'GREEN') continue; // 이미 GREEN 이면 패스(자리가 맞는경우)

    const guessLetter = targetGuess[i]; // 글자 == 자리의 인덱스의 글자
    if (solutionLetterCount[guessLetter] > 0) { // 글자가 답안에 1개이상 존재한다면
      result[i] = 'YELLOW'; // YELLOW 표시
      solutionLetterCount[guessLetter]--; // 글자수 하나 차감
    }
  }

  return result;
};

// 정답인지 확인
export const checkCorrect = (guess: string, solution: string): boolean => {
  return guess.toUpperCase() === solution.toUpperCase();
};

// 성공, 실패, 게임 진행 판정
export const checkGameResult = (
  guess: string,
  solution: string,
  tryCount: number,
  maxTry: number
):

GameResult => {
  if (checkCorrect(guess, solution)) {
    return "win";
  }

  if (tryCount >= maxTry) {
    return "lose";
  }

  return "playing";
};
