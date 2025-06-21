import PageLayout from './PageLayout';

export default function About() {
  return (
    <PageLayout title="About Me">
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Hi! I’m Saransh Kumar, a Master's student in Data Science at the University of Maryland, College Park. I’m passionate about working with data — whether it's building predictive models, visualizing complex patterns, or engineering scalable pipelines. If it involves logical thinking, analytics, or creative problem-solving with data, I’m all in.
      </p>

      <p className="text-gray-700 dark:text-gray-300 mb-4">
        I bring over three years of industry experience, including two as a Cloud Data Scientist, working across domains like cloud computing, web development, DevOps, and databases. I’ve tackled projects that range from building machine learning models with Python and its rich ecosystem (NumPy, Pandas, scikit-learn, TensorFlow, Keras, etc.) to deploying scalable systems in cloud environments.
      </p>

      <p className="text-gray-700 dark:text-gray-300 mb-4">
        What drives me is the opportunity to build things that make decisions smarter and systems more efficient. I aspire to work in an environment where data-driven thinking fuels innovation and continuous improvement.
      </p>

      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Beyond the code and cloud, I’m a curious generalist — a multipotentialite who enjoys exploring new domains and expanding my skill set. I’m also an avid reader, an occasional poet (short poems are my jam), and a music obsessive who curates playlists like it's a personal art form. I love thoughtful conversations, a good laugh, and meaningful connections.
      </p>

      <p className="text-gray-700 dark:text-gray-300">
        Let’s connect — I’d love to chat. Cheers!
      </p>
    </PageLayout>
  );
}
