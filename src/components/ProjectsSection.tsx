import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl?: string; // optional: no button is shown when there is no public repo
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'TalentFlow RH',
    category: 'FULL STACK / AI HR PLATFORM',
    description:
      'AI-powered HR management platform built during my internship at Proxym IT. I developed the Spring Boot backend (leave management, document handling, candidate interview workflows), integrated the Google Gemini API to automate candidate screening with AI-driven scoring, and built the React/Vite frontend with AI interview pages, per-answer scoring and admin dashboards.',
    githubUrl: 'https://github.com/chaimabenrayana/HR-website',
    tech: [
      'Java',
      'Spring Boot',
      'Spring Security (JWT)',
      'PostgreSQL',
      'MinIO',
      'Google Gemini API',
      'React',
      'Vite',
      'Docker',
    ],
    metrics: [
      { label: 'BACKEND', value: 'Spring Boot + JWT' },
      { label: 'AI', value: 'Gemini candidate scoring' },
      { label: 'STORAGE', value: 'PostgreSQL + MinIO' },
    ],
  },
  {
    number: '02',
    title: 'ECG Anomaly Detection',
    category: 'DEEP LEARNING / BIOMEDICAL SIGNALS',
    description:
      'Arrhythmia classification system on the MIT-BIH dataset using a CNN-BiLSTM architecture with an attention mechanism. The full pipeline covers Pan-Tompkins segmentation, normalization, data augmentation and per-class threshold optimization, with a real-time Streamlit interface.',
    githubUrl: 'https://github.com/chaimabenrayana/ECG-Anomaly-Detection-with-Deep-Learning',
    tech: [
      'Python',
      'TensorFlow',
      'NumPy',
      'Streamlit',
      'CNN-BiLSTM',
      'Attention',
      'Pan-Tompkins',
      'MIT-BIH',
    ],
    metrics: [
      { label: 'ACCURACY', value: '98.27%' },
      { label: 'MACRO F1-SCORE', value: '91.08%' },
      { label: 'AUC-ROC', value: '98.92%' },
    ],
  },
  {
    number: '03',
    title: 'EMG Feature Evaluation Interface',
    category: 'IOT / SIGNAL PROCESSING',
    description:
      'Interactive interface for real-time extraction and visualization of EMG signal features. Filtering and feature-extraction pipelines process biomedical signals for muscular performance monitoring, designed for rehabilitation and sports-performance contexts.',
    tech: ['Python', 'Signal Processing', 'Feature Extraction', 'Real-Time Visualization'],
    metrics: [
      { label: 'SIGNAL', value: 'EMG' },
      { label: 'PROCESSING', value: 'Real-time features' },
      { label: 'USE CASE', value: 'Rehabilitation & sports' },
    ],
  },
  {
    number: '04',
    title: "ENET'Com Room Booking",
    category: 'FULL STACK / WEB APPLICATION',
    description:
      "Room reservation platform for ENET'Com student clubs. It includes authentication, booking logic and role-based access control for admin and student users, on top of a relational schema that manages room availability and prevents booking conflicts across clubs.",
    githubUrl: 'https://github.com/chaimabenrayana/ENET-MAP-Website-',
    tech: ['React', 'Laravel', 'PHP', 'SQL'],
    metrics: [
      { label: 'USERS', value: 'Admin + Student' },
      { label: 'ACCESS', value: 'Role-based (RBAC)' },
      { label: 'LOGIC', value: 'Conflict prevention' },
    ],
  },
  {
    number: '05',
    title: 'WOOD-TOUCH',
    category: 'FULL STACK / E-COMMERCE',
    description:
      'Artisanal e-commerce platform built as an academic full-stack project. Visitors browse a catalog of handcrafted products, add items to a cart and make bookings, while artisans and admins manage everything from a dedicated dashboard.',
    githubUrl: 'https://github.com/chaimabenrayana/site-web-artisanat-',
    tech: ['Vite', 'JavaScript', 'Laravel', 'PHP', 'MySQL'],
    metrics: [
      { label: 'FEATURES', value: 'Catalog, Cart, Bookings' },
      { label: 'DASHBOARD', value: 'Artisan + Admin' },
      { label: 'STACK', value: 'Vite + Laravel' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              FROM SIGNAL TO SYSTEM.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll to explore projects across biomedical signal processing, deep learning and full-stack development.
          </p>
        </motion.div>

        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/25">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                        // KEY FACTS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between gap-4"
                        >
                          <span className="text-[10px] font-mono text-[#A8988B]">{m.label}</span>
                          <span className="text-[11px] font-mono font-medium text-[#F7E7C4] text-right">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        <span>VIEW ON GITHUB</span>
                        <span className="text-xs">↗</span>
                      </a>
                    ) : (
                      <span
                        className="inline-flex items-center justify-center px-6 py-3.5 border border-[#8C6D4F]/25 text-[#8C6D4F] text-[11px] font-medium tracking-[0.24em] uppercase cursor-default"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        NO PUBLIC REPOSITORY
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default ProjectsSection;