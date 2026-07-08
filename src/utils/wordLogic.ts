// 워들 색상 판정 타입이야
export type TileStatus = 'GREEN' | 'YELLOW' | 'GRAY';

export const checkWord = (guess: string, solution: string): TileStatus[] => {
  const result: TileStatus[] = Array(5).fill('GRAY');

  //guess랑 solution 비교해서 result 배열 완성


  return result; 
};