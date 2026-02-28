import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100 p-8 gap-8">
      <div className="w-1/2">
        <ResumeForm />
      </div>
      <div className="w-1/2 bg-white p-6 rounded-2xl shadow-xl">
        <ResumePreview />
      </div>
    </div>
  );
}