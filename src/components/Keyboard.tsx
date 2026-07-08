export default function Keyboard() {
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK']
  ];

  return (
    <div className="flex flex-col gap-2 my-2">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-1">
          {row.map((key) => (
            <button
              key={key}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold p-3 text-sm rounded uppercase transition flex-1 min-w-[32px] h-12 flex justify-center items-center"
            >
              {/* [서정권] 가상 키보드 버튼 스타일! */}
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}