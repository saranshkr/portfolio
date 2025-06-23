import Navbar from '../components/Navbar';
import Header from '../components/Header';
import DarkModeToggler from '../components/DarkModeToggler';

export default function PageLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white">
      <Navbar />
      <div className="hidden md:flex justify-center mt-8 mb-4">
        <DarkModeToggler />
      </div>
      <main className="px-4 pt-4 sm:pt-6 lg:pt-10 max-w-4xl mx-auto space-y-10 pb-24">
        <Header />
        <hr className="border-t border-gray-300 dark:border-gray-700 my-6" />

        {title && (
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 text-center">
            {title}
          </h2>
        )}

        {children}
      </main>
    </div>
  );
}
