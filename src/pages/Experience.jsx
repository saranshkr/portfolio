import PageLayout from './PageLayout';

export default function Experience() {
  return (
    <PageLayout title="Experience">
      <section className="space-y-10">

        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Data Scientist <span className="text-sm font-normal text-gray-500 dark:text-gray-400">| Python, SQL, AWS, Big Data</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Samsung R&D Institute – Delhi, India (Apr 2022 – Aug 2024)</p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Worked with 500+ TB of SmartTV viewership data to uncover trends and improve ad relevance for 10M+ users.</li>
            <li>Built real-time data pipelines using Python, SQL, and AWS, reducing processing time by 30% across 12 markets.</li>
            <li>Created a customizable dashboard used across 130+ services, enabling stakeholder-driven decision-making.</li>
            <li>Teamed up with cross-functional groups to deploy ML models, improve fingerprinting accuracy by 10%, and cut $200K/month in cloud costs.</li>
            <li>Championed new tooling in the Cloud division, boosting analytics efficiency by 40% and saving 60+ manhours/week.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Junior Data Scientist <span className="text-sm font-normal text-gray-500 dark:text-gray-400">| Java, SQL, Recommendation Systems</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Wipro Limited – Bangalore, India (Jul 2021 – Apr 2022)</p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Built API-integrated features for a B2B e-commerce platform that improved user engagement by 15%.</li>
            <li>Optimized recommendation models to reduce load times by 30% and boost real-time accuracy by 10%.</li>
            <li>Used Git and Agile practices to streamline deployments and resolve 1000+ code quality issues.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Research Data Science Intern <span className="text-sm font-normal text-gray-500 dark:text-gray-400">| Computer Vision, Deep Learning</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">NIT Silchar – India (Jan 2021 – May 2021)</p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Led a team to build a 3-step ALPR system for non-standard license plates, achieving 96% accuracy with MobileNet.</li>
            <li>Benchmarked and fine-tuned neural networks on noisy, blurred, and symbol-rich images.</li>
          </ul>
        </div>

      </section>
    </PageLayout>
  );
}
