import myresume from "/resume/VanieDuranaCV2025v4.pdf";
import jpgresume from "/resume/VanieDuranaCV2025v4_page.webp";

export default function MyResumeContent() {
	
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 flex flex-col items-center gap-6">
		<a
			href={myresume}
			target="_blank"
			rel="noopener noreferrer"
			className="px-6 py-3 rounded-2xl bg-purple-600 text-white hover:bg-purple-700 transition-out-200"
		>
			View PDF
		</a>

		<img
			src={jpgresume}
			alt="Resume preview"
			className="w-full max-w-3xl rounded-2xl shadow-md"
		/>
    </div>
  );
}