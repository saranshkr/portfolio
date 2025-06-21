import PageLayout from './PageLayout';

export default function Education() {
  return (
    <PageLayout title="Education">
      <section className="space-y-10">

        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            MS in Data Science
          </h2>
          <p className="text-gray-600 dark:text-gray-400">University of Maryland, College Park — Maryland, USA (Aug 2024 – May 2026)</p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Currently pursuing coursework in machine learning, big data analytics, deep learning, and data visualization.</li>
            <li>Projects include real-time Bitcoin analytics, reinforcement learning for HVAC optimization, and image inpainting with GANs.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            B.Tech in Electronics and Communication Engineering
          </h2>
          <p className="text-gray-600 dark:text-gray-400">National Institute of Technology (NIT), Silchar — India (Jul 2017 – May 2021)</p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Graduated with Distinction.</li>
            <li>Led a computer vision research project on automated license plate recognition.</li>
            <li>Explored electives in neural networks and data mining that sparked my transition into data science.</li>
          </ul>
        </div>

      </section>
    </PageLayout>
  );
}
