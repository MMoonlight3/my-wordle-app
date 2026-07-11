import { TileStatus } from '../utils/wordLogic';

interface KeyboardProps {
  // TODO: [정권 담당] page.tsx의 키 입력 처리 함수(handleKeyDown 안의 로직)를 재사용해서
  // 이 onKeyClick으로 연결해야 화면 키보드를 클릭해도 입력이 됨.
  // 지금은 물리 키보드(keydown 이벤트)로만 입력 가능하고, 화면 버튼은 눌러도 반응 없음!

  onKeyClick?: (key: string) => void;
  letterStatuses?: Record<string, TileStatus>;
}

export default function Keyboard({ onKeyClick, letterStatuses = {} }: KeyboardProps) {
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK']
  ];
  const handleClick = (key: string) => {
    const eventKey =
      key === 'ENTER' ? 'Enter'
      : key === 'BACK' ? 'Backspace'
      : key.toLowerCase();
    
    const event = new KeyboardEvent('keydown', { key: eventKey });
    window.dispatchEvent(event);
  };

  // [문지후] 글자 상태에 따른 키보드 색상 매핑
  const getKeyColorClass = (key: string) => {
    const status = letterStatuses[key];
    if (status === 'GREEN') return 'bg-green-500 hover:bg-green-600 text-white';
    if (status === 'YELLOW') return 'bg-yellow-500 hover:bg-yellow-600 text-white';
    if (status === 'GRAY') return 'bg-gray-500 hover:bg-gray-600 text-white';
    return 'bg-gray-200 hover:bg-gray-300 text-gray-800';
  };

  return (
    <div className="flex flex-col gap-2 my-2">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-1">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => handleClick(key)}
              className={`${getKeyColorClass(key)} font-bold p-3 text-sm rounded uppercase transition flex-1 min-w-[32px] h-12 flex justify-center items-center`}
            >
              {/* [서정권& 문지후] 가상 키보드 버튼 스타일 - 워들 정답 상태(정답/포함/없음)에 따라 초록/노랑/회색으로 표시 */}
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}