import { useState, useEffect } from 'react';
import Grid from '../components/Grid';
import Keyboard from '../components/Keyboard';
import ResultModal from '../components/ResultModal.tsx';
import { randword, findWord } from '../api/wordBank';
import { checkWord, TileStatus } from '../utils/wordLogic';

export default function IndexPage() {
  // 게임 상태 관리
  const [solution] = useState<string>(() => randword()); // [시우 담당] 나중에 랜덤 단어로 교체 --> 교체 완
  const [guesses, setGuesses] = useState<string[]>(Array(6).fill('')); // 유저가 입력한 6개의 단어들
  const [statuses, setStatuses] = useState<TileStatus[][]>(Array(6).fill([])); // 각 줄의 칸별 색깔 판정 결과
  const [currentRow, setCurrentRow] = useState<number>(0); // 현재 입력 중인 줄 (0~5)
  const [isGameOver, setIsGameOver] = useState<boolean>(false); // 게임 종료 여부
  const [isSuccess, setIsSuccess] = useState<boolean>(false); // 성공 여부

  // [선우 & 보민 공동 작업 영역] 키보드 타이핑 입력 처리
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isGameOver) return;

      const currentGuess = guesses[currentRow];

      // 1. 엔터키를 눌렀을 때 (단어 제출)
      if (e.key === 'Enter') {
        if (currentGuess.length < 5) {
          alert('5글자를 모두 입력해주세요!');
          return;
        }

        // 이번 줄의 칸별 색깔(초록/노랑/회색) 계산해서 저장
        const rowResult = checkWord(currentGuess, solution);
        setStatuses((prev) => {
          const newStatuses = [...prev];
          newStatuses[currentRow] = rowResult;
          return newStatuses;
        });

        // 정답 확인 로직 (대호가 만든 판정 함수를 나중에 여기 연결할 예정)
        if (currentGuess === solution) {
          setIsSuccess(true);
          setIsGameOver(true);
          return;
        }

        // 6번째 기회까지 다 썼으면 게임 오버
        if (currentRow === 5) {
          setIsGameOver(true);
          return;
        }

        // 다음 줄로 이동
        setCurrentRow((prev) => prev + 1);
      }

      // 2. 백스페이스를 눌렀을 때 (글자 지우기)
      if (e.key === 'Backspace') {
        setGuesses((prev) => {
          const newGuesses = [...prev];
          newGuesses[currentRow] = currentGuess.slice(0, -1);
          return newGuesses;
        });
        return;
      }

      // 3. 알파벳을 눌렀을 때 (글자 추가, 5글자 제한)
      if (/^[a-zA-Z]$/.test(e.key)) {
        if (currentGuess.length >= 5) return;
        
        setGuesses((prev) => {
          const newGuesses = [...prev];
          newGuesses[currentRow] = currentGuess + e.key.toUpperCase();
          return newGuesses;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentRow, guesses, isGameOver, solution]);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-50 py-6 font-sans">
      <header className="border-b border-gray-200 w-full text-center pb-2">
        <h1 className="text-3xl font-black tracking-wider text-gray-800">WORDLE</h1>
      </header>

      {/* 메인 게임판 [정권 담당 파일 연결] */}
      <main className="flex-grow flex items-center justify-center my-4">
        <Grid guesses={guesses} currentRow={currentRow} statuses={statuses} />
      </main>

      {/* 가상 키보드 [정권 담당 파일 연결] */}
      <footer className="w-full max-w-lg px-4">
        <Keyboard />
      </footer>

      {/* 결과 팝업창 [시우 & 정권 담당 파일 연결] */}
      {isGameOver && (
        <ResultModal
          isSuccess={isSuccess}
          solution={solution}
          attemptCount={currentRow + 1}
        />
      )}
    </div>
  );
}