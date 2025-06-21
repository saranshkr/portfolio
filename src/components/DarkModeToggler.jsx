import { useDarkMode } from '../context/DarkModeContext';
import { LuSun, LuMoon } from 'react-icons/lu';
import { motion, AnimatePresence } from 'framer-motion';

export default function DarkModeToggler() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      className={`w-11 h-6 flex items-center rounded-full transition-colors duration-300 overflow-hidden ${
        darkMode ? 'bg-zinc-700' : 'bg-zinc-300'
      } hover:shadow-[0_0_6px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_6px_rgba(255,255,255,0.2)]`}
    >
      <motion.div
        layout
        animate={{ x: darkMode ? 18 : 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className="w-6 h-6 flex items-center justify-center rounded-full bg-white shadow-md"
      >
        <AnimatePresence mode="wait" initial={false}>
          {darkMode ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <LuMoon className="text-zinc-800" size={16} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <LuSun className="text-yellow-500" size={16} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
}
