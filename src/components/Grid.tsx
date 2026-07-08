interface GridProps {
  guesses: string[];
  currentRow: number;
}

export default function Grid({ guesses, currentRow }: GridProps) {
  return (
    <div className="grid grid-rows-6 gap-2 p-2">
      {guesses.map((guess, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-5 gap-2">
          {Array(5).fill('').map((_, colIndex) => {
            const char = guess[colIndex] || '';
            return (
              <div
                key={colIndex}
                className="w-14 h-14 border-2 border-gray-300 flex justify-center items-center text-2xl font-bold uppercase rounded"
              >
                {/* [서정권&문지후] 배경색, 테두리, 글자색 CSS*/}
                {char}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}