import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

export default function ProjectCard({ title, summary, description, tech, repo, demo, report }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="bg-white dark:bg-zinc-900/80 rounded-lg shadow-md p-6 transition-transform duration-300 cursor-pointer hover:scale-[1.05] hover:shadow-lg"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">{summary}</p>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm text-gray-700 dark:text-gray-200 mt-3">{description}</p>
            {tech && tech.length > 0 && (
              <ul className="flex flex-wrap mt-4 gap-2">
                {tech.map((item, index) => (
                  <li
                    key={index}
                    className="text-xs bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 px-2 py-1 rounded"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3 mt-4 text-gray-500 dark:text-gray-400 text-sm">
        {repo && (
          <a href={repo} target="_blank" rel="noopener noreferrer" title="GitHub Repo">
            <FaGithub className="hover:text-black dark:hover:text-white transition-colors" />
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" title="Live Demo">
            <FaExternalLinkAlt className="hover:text-black dark:hover:text-white transition-colors" />
          </a>
        )}
        {report && (
          <a href={report} target="_blank" rel="noopener noreferrer" title="Project Report">
            <FaFileAlt className="hover:text-black dark:hover:text-white transition-colors" />
          </a>
        )}
      </div>
    </div>
  );
}
