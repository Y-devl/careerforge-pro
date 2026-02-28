export default function ATSScore({ score }: { score: number }) {
  return (
    <div className="mt-4">
      <div className="w-full bg-gray-200 rounded-full">
        <div
          className="bg-green-500 text-white text-center p-1 rounded-full"
          style={{ width: `${score}%` }}
        >
          ATS Score: {score}%
        </div>
      </div>
    </div>
  );
}