import React, { useState } from 'react';

interface ResultModalProps {
  isSuccess: boolean;
  solution: string;
  attemptCount: number; // 몇 번째 시도에서 끝났는지 (1~6)
}

export default function ResultModal({ isSuccess, solution, attemptCount }: ResultModalProps) {
  // 모달 창을 닫았는지 여부
  const [isClosed, setIsClosed] = useState(false);

  // 확인을 눌러 창을 닫으면 완전히 사라지게 처리 (유저가 그리드를 볼 수 있음)
  if (isClosed) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white p-6 rounded-xl shadow-2xl text-center max-w-sm w-full">
        {isSuccess ? (
          <h2 className="text-2xl font-bold text-green-600 mb-2">축하합니다!</h2>
        ) : (
          <h2 className="text-2xl font-bold text-red-500 mb-2">아쉽습니다!</h2>
        )}

        <p className="text-gray-600 mb-4">
          {isSuccess ? `${attemptCount}번 만에 맞추셨습니다!` : '기회를 모두 소진했습니다.'}
        </p>

        {/* 실패했을 때만 정답 공개 */}
        {!isSuccess && (
          <div className="bg-gray-100 p-3 rounded font-mono text-2xl font-black tracking-widest mb-4 text-gray-800">
            {solution}
          </div>
        )}

        {/* 창을 닫는 단일 버튼 */}
        <button
          onClick={() => setIsClosed(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full transition"
        >
          확인
        </button>
      </div>
    </div>
  );
}