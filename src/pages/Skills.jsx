import PageLayout from './PageLayout';
import SkillCard from '../components/SkillCard';

export default function Skills() {
  const skillGroups = [
    {
      title: 'Languages',
      skills: ['Python', 'SQL', 'Java', 'C++', 'JavaScript', 'HTML', 'CSS', 'Bash']
    },
    {
      title: 'Data Science & Machine Learning',
      skills: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Keras', 'OpenCV', 'XGBoost']
    },
    {
      title: 'Data Visualization',
      skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Streamlit', 'Tableau']
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
          <SkillCard key={group.title} title={group.title} skills={group.skills} />
        ))}
      </div>
    </PageLayout>
  );
}
