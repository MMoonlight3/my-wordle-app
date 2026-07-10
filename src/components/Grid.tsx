import { TileStatus } from '../utils/wordLogic';

interface GridProps {
  guesses: string[];
  currentRow: number;
  statuses?: TileStatus[][]; // checkWord()로 계산한 결과: 한 줄(row)마다 5칸의 색 판정
}

// 판정 결과에 따른 타일 색상 클래스
const getTileColorClass = (status: TileStatus | undefined): string => {
  switch (status) {
    case 'GREEN':
      return 'bg-green-500 border-green-500 text-white';
    case 'YELLOW':
      return 'bg-yellow-400 border-yellow-400 text-white';
    case 'GRAY':
      return 'bg-gray-400 border-gray-400 text-white';
    default:
      return 'bg-white border-gray-300 text-gray-800'; // 아직 제출 안 된 칸
  }
};

export default function Grid({ guesses, currentRow, statuses }: GridProps) {
  return (
    <div className="grid grid-rows-6 gap-2 p-2">
      {guesses.map((guess, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-5 gap-2">
          {Array(5).fill('').map((_, colIndex) => {
            const char = guess[colIndex] || '';
            // 이미 제출된 줄(rowIndex < currentRow)이거나, 제출과 동시에 채워진 현재 줄만 색이 있음
            const status = statuses?.[rowIndex]?.[colIndex];
            const colorClass = getTileColorClass(status);

            return (
              <div
                key={colIndex}
                className={`w-14 h-14 border-2 flex justify-center items-center text-2xl font-bold uppercase rounded transition-colors ${colorClass}`}
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