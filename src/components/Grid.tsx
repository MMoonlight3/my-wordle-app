import { TileStatus } from '../utils/wordLogic';

interface GridProps {
  guesses: string[];
  currentRow: number;
  // TODO: [대호 담당] checkWord()로 계산한 결과를 여기로 받아서 칸마다 색을 입혀야 함
  // 예: statuses={['GREEN', 'GRAY', 'YELLOW', 'GRAY', 'GRAY']} 형태로 한 줄(row)씩 배열
  statuses?: TileStatus[][];
}

export default function Grid({ guesses, currentRow, statuses }: GridProps) {
  return (
    <div className="grid grid-rows-6 gap-2 p-2">
      {guesses.map((guess, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-5 gap-2">
          {Array(5).fill('').map((_, colIndex) => {
            const char = guess[colIndex] || '';
            // TODO: [서정권&문지후 담당] statuses?.[rowIndex]?.[colIndex] 값(GREEN/YELLOW/GRAY)에 따라
            // 배경색(className)을 다르게 입혀야 함. 지금은 항상 기본 테두리색만 적용됨.
            return (
              <div
                key={colIndex}
                className="w-14 h-14 border-2 border-gray-300 flex justify-center items-center text-2xl font-bold uppercase rounded"
              >
                {char}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}