// src/components/LeadershipSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface Role {
  id: string;
  period: string;
  title: string;
  organization: string;
  points: string[];
}

const roles: Role[] = [
  {
    id: '01',
    period: 'JUN 2025 - NOW',
    title: 'GENERAL SECRETARY',
    organization: "ENET'COM JUNIOR ENTREPRISE (ECJE)",
    points: [
      'Oversee the administrative and organizational coordination of the junior enterprise, chair meetings and draft official minutes.',
      'Lead internal structuring initiatives across operational poles.',
      'Led the handover to the incoming executive board.',
    ],
  },
  {
    id: '02',
    period: '2025',
    title: 'CO-FOUNDER & TEAM LEADER',
    organization: 'CHALLENGINI · JET IMPACT 2025',
    points: [
      'Led a four-person founding team behind Challengini, a gamified mobile app that turns social and environmental actions into challenges, rankings and badges.',
      'Concept aligned with SDG 4, 13 and 17, for young adults, CSR companies and NGOs.',
    ],
  },
  {
    id: '03',
    period: 'FEB - MAY 2025',
    title: 'DEPUTY PROJECT PROCESS MANAGER',
    organization: "ENET'COM JUNIOR ENTREPRISE (ECJE)",
    points: [
      'Coordinated project delivery and tracked progress across active missions.',
      'Improved internal processes for team efficiency.',
    ],
  },
  {
    id: '04',
    period: 'OCT 2024 - FEB 2025',
    title: 'MARKETING & EVENTS MEMBER',
    organization: "ENET'COM JUNIOR ENTREPRISE (ECJE)",
    points: [
      'Created marketing materials and visual content.',
      'Sourced partnerships and co-organized events.',
    ],
  },
  {
    id: '05',
    period: 'VOLUNTEER',
    title: 'CAMP COUNSELLOR',
    organization: 'ONET TEBOULBA',
    points: [
      'Led workshops (theatre, music, dance, arts & crafts, brain games) for children aged 8 to 14 during national summer camps.',
      'Fostered self-reliance, teamwork and civic responsibility through structured group activities.',
    ],
  },
];

export const LeadershipSection: React.FC = () => {
  return (
    <section
      id="leadership"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-8 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-[34rem] h-[34rem] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-[#8C6D4F]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            05 / LEADERSHIP
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              LEADING TEAMS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              SERVING COMMUNITIES.
            </span>
          </h2>
        </motion.div>

        <p
          className="text-xs sm:text-sm font-light text-[#A8988B] leading-relaxed max-w-xl mb-16"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Beyond engineering, I lead teams, coordinate projects and organize initiatives, from a junior enterprise to a social-impact startup and children&apos;s summer camps.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {roles.map((role, idx) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: (idx % 2) * 0.1 }}
              className="relative p-8 sm:p-9 rounded-sm border border-[#8C6D4F]/35 bg-[#100D0B]/85 overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/80 hover:shadow-[0_16px_45px_rgba(212,175,55,0.14)] group"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-300" />

              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37]">
                {role.period}
              </span>

              <h3
                className="text-3xl sm:text-4xl tracking-wide text-white group-hover:text-[#F7E7C4] transition-colors mt-3 mb-1 leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {role.title}
              </h3>

              <span
                className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#8C6D4F] mb-5"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {role.organization}
              </span>

              <ul
                className="space-y-2.5 pt-4 border-t border-[#8C6D4F]/20"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {role.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 text-xs sm:text-[13px] font-light text-[#A8988B] leading-[1.7] group-hover:text-[#D5CBC0] transition-colors"
                  >
                    <span className="mt-[9px] w-1 h-1 rounded-full bg-[#D4AF37] shrink-0" />
                    <span>{p}</span>
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

export default LeadershipSection;