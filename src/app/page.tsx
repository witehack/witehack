'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const categories = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'HTML, CSS, JavaScript, React, Vue, Angular',
    topics: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'W3.CSS', 'TypeScript', 'Vue', 'Angular', 'SASS'],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'PHP, Node.js, ASP.NET, Django',
    topics: ['PHP', 'Node.js', 'ASP.NET', 'Django', 'Express', 'Laravel', 'Flask', 'FastAPI'],
  },
  {
    id: 'databases',
    title: 'Базы данных',
    description: 'SQL, MySQL, PostgreSQL, MongoDB',
    topics: ['SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Supabase'],
  },
  {
    id: 'data-science',
    title: 'Data Science & AI',
    description: 'Python, NumPy, Pandas, AI, Data Science',
    topics: ['Python', 'NumPy', 'Pandas', 'SciPy', 'AI', 'Data Science', 'R', 'Gen AI'],
  },
  {
    id: 'programming',
    title: 'Программирование',
    description: 'C, C++, C#, Java, Go, Kotlin',
    topics: ['C', 'C++', 'C#', 'Java', 'Go', 'Kotlin', 'Rust', 'Swift'],
  },
  {
    id: 'devops',
    title: 'DevOps & Git',
    description: 'Git, Cybersecurity, DSA',
    topics: ['Git', 'Docker', 'Kubernetes', 'CI/CD', 'Cybersecurity', 'DSA'],
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-4 animate-glitch">
          WiteHack
        </h1>
        <p className="text-xl text-primary">
          Исследуйте мир кибербезопасности и программирования
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/courses/${category.id}`}>
              <div className="card p-6 h-full">
                <h2 className="text-2xl font-bold text-primary mb-2">
                  {category.title}
                </h2>
                <p className="text-gray-400 mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <button className="btn-primary w-full mt-6">
                  Начать обучение
                </button>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Социальные сети</h2>
        <div className="flex justify-center gap-6">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-light transition-colors"
          >
            YouTube
          </a>
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-light transition-colors"
          >
            Telegram
          </a>
        </div>
      </div>
    </div>
  );
} 