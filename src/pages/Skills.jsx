import PageLayout from './PageLayout';

export default function Skills() {
  const skillGroups = [
    {
      title: 'Languages',
      skills: ['Python', 'SQL', 'JavaScript', 'Bash']
    },
    {
      title: 'Data Science & ML',
      skills: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Keras', 'OpenCV', 'XGBoost']
    },
    {
      title: 'Data Visualization',
      skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Streamlit']
    },
    {
      title: 'Big Data & Cloud',
      skills: ['PySpark', 'Kafka', 'Hadoop', 'AWS', 'GCP', 'HDFS', 'Airflow']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Neo4j']
    },
    {
      title: 'Web & Tools',
      skills: ['FastAPI', 'Flask', 'Git', 'Docker', 'LangChain', 'Vite', 'React']
    },
  ];

  return (
    <PageLayout title="Skills">
      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="bg-white dark:bg-zinc-900 rounded-lg p-4 shadow transition-all transform hover:scale-[1.02] hover:shadow-lg cursor-default"
          >
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-3">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 px-3 py-1 rounded-full text-sm transition-colors duration-200 hover:bg-blue-200 dark:hover:bg-blue-600 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
