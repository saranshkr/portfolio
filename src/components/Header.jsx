export default function Header() {
    return (
      <section className="text-center">
        <h1 className="text-4xl font-bold">Saransh Kumar</h1>
        <p className="text-lg text-gray-600 mt-2">
          Data Scientist | Machine Learning | Big Data
        </p>
        <div className="mt-4 space-x-4">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Contact Me
          </a>
          <a
            href="/portfolio/Saransh_Kumar_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border px-4 py-2 rounded hover:bg-gray-100"
          >
            View Resume
          </a>
        </div>
      </section>
    );
  }
  