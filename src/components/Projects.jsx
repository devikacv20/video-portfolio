import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'Mood Maven',
    tech: 'Python, Flask, ML, XGBoost',
    date: 'May 2025',
    points: [
      'Built an ML-based music recommendation system using KMeans clustering and XGBoost for personalized song suggestions based on user mood input.',
      'Developed a Flask web application with a CI/CD pipeline via GitHub Actions, deployed on Render for live access.',
    ],
  },
  {
    title: 'Offline AI Chatbot using LLM',
    tech: 'Python, Django REST Framework, LLM, JWT',
    date: 'Nov 2025',
    points: [
      'Built a REST API backend for an AI-powered chatbot that generates human-like responses, designed to run completely offline.',
      'Implemented JWT authentication, prompt handling, and chat history management via Django REST Framework.',
    ],
  },
  {
    title: 'Real-Time Polling & Voting System',
    tech: 'React, Django, Django REST Framework, MySQL, JWT',
    date: 'Feb 2025',
    points: [
      'Developed a full-stack polling and voting application using React, Django, and MySQL, enabling authenticated users to create polls, submit votes, and view results.',
      'Built REST APIs with Django REST Framework; implemented JWT authentication using Djoser and SimpleJWT, role-based access control, and interactive vote-result charts using Chart.js.',
    ],
  },
  {
    title: 'Speech Emotion Recognition',
    tech: 'Python, Librosa, Scikit-learn',
    date: 'Sep 2024',
    points: [
      'Built a four-class speech emotion recognition pipeline using MFCC and mel-spectrogram features extracted from 25,000+ audio clips.',
      'Achieved 89% classification accuracy and evaluated the model using precision, recall, F1-score, and confusion matrices.',
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="mb-10 md:mb-12">
          <span className="inline-block text-xs font-semibold text-black/50 uppercase tracking-widest px-3 py-1.5 bg-black/2 border border-black/5 rounded-full mb-3">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2 tracking-tight">
            Things I've Built
          </h2>
          <p className="text-sm text-black/60 font-normal">
            A selection of machine learning, backend, and full-stack projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-black/5 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-red-500/5 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-black">{project.title}</h3>
                <span className="text-xs text-black/40 whitespace-nowrap ml-2">{project.date}</span>
              </div>
              <p className="text-xs text-red-500 font-medium mb-3">{project.tech}</p>
              <ul className="space-y-2">
                {project.points.map((point, i) => (
                  <li key={i} className="text-sm text-black/70 leading-relaxed flex gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;