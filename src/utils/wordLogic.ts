// 워들 색상 판정 타입이야
export type TileStatus = 'GREEN' | 'YELLOW' | 'GRAY';

// 게임 결과 타입
export type GameResult = "playing" | "win" | "lose";

export const checkWord = (guess: string, solution: string): TileStatus[] => {
  const result: TileStatus[] = Array(5).fill('GRAY');

  //guess랑 solution 비교해서 result 배열 완성

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