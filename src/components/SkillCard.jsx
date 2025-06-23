import { motion } from 'framer-motion';

export default function SkillCard({ title, skills }) {
  return (
    <motion.div
      layout
      className="bg-white dark:bg-zinc-900/80 rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-[1.05] hover:shadow-lg cursor-default"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>

      <ul className="flex flex-wrap gap-2 mt-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="text-xs bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 px-3 py-1 rounded-full transition-colors duration-200 hover:bg-blue-200 dark:hover:bg-blue-600"
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
