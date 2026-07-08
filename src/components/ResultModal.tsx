interface ResultModalProps {
  isSuccess: boolean;
  solution: string;
}

export default function ResultModal({ isSuccess, solution }: ResultModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-xl shadow-2xl text-center max-w-sm w-full">
        {isSuccess ? (
          <h2 className="text-2xl font-bold text-green-600 mb-2">축하합니다!</h2>
        ) : (
          <h2 className="text-2xl font-bold text-red-500 mb-2">아쉽습니다!</h2>
        )}
        
        <p className="text-gray-600 mb-4">
          {isSuccess ? '정답을 맞추셨습니다!' : '기회를 모두 소진했습니다.'}
        </p>

        <div className="bg-gray-100 p-3 rounded font-mono text-2xl font-black tracking-widest mb-4 text-gray-800">
          {solution}
        </div>

        <button 
          onClick={() => window.location.reload()} 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full transition"
        >
          다시 하기
        </button>
      </div>
    </div>
  );
}