import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold mb-4">Saransh Kumar</h1>
      <p className="text-xl mb-6">Data Scientist | Machine Learning | Big Data</p>
      <div className="space-x-4 mb-6">
        <a href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Contact Me
        </a>
        <a href="/portfolio/Saransh_Kumar_resume.pdf" target="_blank" rel="noopener noreferrer" className="border px-4 py-2 rounded hover:bg-gray-100">
          View Resume
        </a>
      </div>
      <Link to="/about" className="text-sm text-blue-600 hover:underline">
        View full portfolio →
      </Link>
    </div>
  );
}
