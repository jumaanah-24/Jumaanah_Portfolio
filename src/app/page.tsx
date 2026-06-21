"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const skills = [
  {
    category: "Languages",
    items: ["C", "C++", "Java"],
  },
  {
    category: "Technologies",
    items: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React",
      "Next.js",
    "Node.js",
    ],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "Core Concepts",
    items: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
    ],
  },
];

const projects = [
  {
    title: "RoadWatch AI - an AI Powered Road Transparency System ",
    description: "AI-powered road transparency platform used to provide road-related information through an intelligent chatbot. Enabled users to access road maintenance, expenditure, accident statistics, contractor details, and complaint data through a centralized system. Implemented interactive dashboards, analytics, and location-based insights to improve transparency and accountability in road infrastructure management",
    tech: ["React", "Python","PostgreSQL"],
    icon: "🛣️",
  },
  {
    title: "Event Managment System",
    description: "A full-stack MERN  web application designed to streamline event discovery, booking, and management. The platform enables users to browse events, make bookings, leave reviews, and receive notifications—providing a seamless experience for event organizers and attendees.",
    tech: ["MongoDB","Express.js","React","Node.js"],
    icon: "🏅",
  },
  {
    title: "AlumniTrack - An AI Powered Placement Platform",
    description: "A full-stack platform designed to bridge the gap between Students, Alumni, and Placement Officers that helps students improve their career readiness by leveraging alumni experience and placement insights.",
    tech: ["Next.js","TypeScript","PostgreSQL","Prisma","REST APIs"],
    icon: "💻",
  },
  {
    title: "Astronomy Image Classification System",
    description: "Developed a ML Based project which classifies astronomical images/celestial bodies using the image dataset , applied CNN model forpattern recognition in images. This project integrates dataset exploration, image preprocessing and model training and gives solution whether the uploaded images belongs to star/galaxy or etc.. categories",
    tech: ["ML", "CNN"],
    icon: "🛰️",
  },
];

const achievements = [
  {
    icon: "🏆",
    title: "Mini Project Expo",
    description: "Secured Third Prize in Design Thinking Project",
    badge: "🥉Third Place",
  },
  {
    icon: "📜",
    title: " ICCISS’26 International Conference",
    description: "Research Paper got Selected at Sona College of Technology",
    badge: "📰Certification",
  },
  {
    icon: "🏆",
    title: "College Mirai Event",
    description: "Secured Second Place at Case Study Presentation",
    badge: "🥈 Second Place",
  },
];

const codingProfiles = [
  {
    name: "LeetCode",
    handle:"jumaanah-17",
    href: "https://leetcode.com/u/jumaanah-17/",
    icon: "⚡",
    color: "from-yellow-400 to-orange-500",
    border: "hover:border-yellow-400/50 hover:shadow-yellow-400/10",
    stat: "Active",
  },
  {
    name: "CodeChef",
    handle: "jumaanah_code",
    href: "https://www.codechef.com/users/jumaanah_code",
    icon: "⚪",
    color: "from-lime-400 to-green-500",
    border: "hover:border-green-400/50 hover:shadow-green-400/10",
    stat: "Active",
  },
  {
    name: "HackerRank",
    handle: "jumaanahbasheeth",
    href: "https://www.hackerrank.com/profile/jumaanahbasheeth",
    icon: "🟢",
    color: "from-slate-400 to-slate-500",
    border: "hover:border-slate-400/50 hover:shadow-slate-400/10",
    stat: "Active",
  },
  {
    name: "Skillrack",
    handle: "Jumaanah",
    href: "http://www.skillrack.com/profile/514949/72fad0de729c868ebf9d14b81e4435e1aa02135b",
    icon: "👩‍💻",
    color: "from-blue-400 to-indigo-500",
    border: "hover:border-blue-400/50 hover:shadow-blue-400/10",
    stat: "Active",
  },
];

const navLinks = ["About", "Education", "Skills", "Projects", "Achievements", "Coding Profiles", "Contact"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-[#020817] text-white min-h-screen overflow-x-hidden">

      {/* Background blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="animate-blob absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute top-[40%] right-[-10%] w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-3xl" />
        <div className="animate-blob animation-delay-4000 absolute bottom-[-10%] left-[30%] w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-950/60 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold gradient-text-white hover:opacity-80 transition-opacity duration-200 cursor-pointer"
          >
            👩‍💻 Jumaanah Portfolio
          </motion.a>

          {/* Desktop links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex gap-6 text-sm font-medium"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </motion.div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-cyan-400 text-sm font-medium transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center px-6 pt-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.p variants={fadeUp} className="text-cyan-400 font-medium tracking-widest uppercase text-sm">
              Hello, I&apos;m
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl font-extrabold leading-tight hover:scale-110  transition-all duration-300">
              <span className="gradient-text" >Jumaanah Basheeth</span>
              
            </motion.h1>
            <motion.h2 variants={fadeUp} className="text-xl text-slate-300 font-light">
              Aspiring Full Stack Developer
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 leading-8 max-w-2xl">
              Passionate about Full Stack Development, problem-solving, and building modern web applications with strong interest in creating impactful software solutions and continuously learning new technologies.
            </motion.p>
            <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
              <a
                href="/Jumaanah Resume lastupd.pdf"
                target="_blank"
                className="group relative px-7 py-3 rounded-xl font-semibold text-sm overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">View Resume</span>
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-xl font-semibold text-sm border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

         <div className="relative flex justify-center">
  <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

  <Image
    src="/Profile.jpeg"
    alt="Jumaanah Basheeth"
    width={380}
    height={380}
    className="
      relative
      w-[380px]
      h-[380px]
      rounded-oval
      object-cover
      border-4 border-cyan-400/30
      shadow-2xl shadow-cyan-500/20
      hover:scale-105
      transition-all duration-500
    "
  />
</div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="About Me" />
          <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="glass-card p-8 rounded-2xl"
>
  <p className="text-slate-300 leading-8 text-lg mb-6">
    I am a Computer Science and Engineering student at{" "}
    <span className="text-cyan-400 font-medium">
      Sri Eshwar College of Engineering
    </span>
    . I am passionate about software development and enjoy
    building modern, user-friendly web applications that solve
    real-world problems.
  </p>

  <p className="text-slate-300 leading-8 text-lg mb-6">
    My core skills include{" "}
    <span className="text-purple-400 font-medium">
     Java, React, PostgreSQL, Next.js, MongoDB, MySQL, Node.js
    </span>{" "}
    . Along with development, I actively practice{" "}
     <span className="text-blue-400 font-medium">
      Data Structures and Algorithms
    </span>{" "}
     to strengthen my problem-solving abilities and
    prepare for technical interviews.
  </p>

  <p className="text-slate-300 leading-8 text-lg">
    I have worked on projects ranging from web applications to
    AI-powered solutions, including an Astronomy Image
    Classification System, RoadWatch AI - an AI Powered Road Transparency System , AlumniTrack - An AI Powered Placement Platform, and Event Managment System.
     I am continuously learning new technologies and striving to grow
    as a{" "}
    <span className="text-cyan-400 font-medium">
      Full Stack Developer
    </span>{" "}
    and aspiring{" "}
    <span className="text-blue-400 font-medium">
      Software Engineer
    </span>.
  </p>
</motion.div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Education" />
          <div className="space-y-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card p-10 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-8 transition-all duration-300 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-2xl shrink-0">🎓</div>
            <div>
              <h3 className="text-xl font-bold text-white">Sri Eshwar College of Engineering</h3>
              <p className="text-slate-300 mt-1">B.E Computer Science and Engineering</p>
              <p className="text-slate-300 mt-1">CGPA : 8.0 (3rd sem)</p>
              <p className="text-slate-500 text-sm mt-1">2024 – 2028</p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card p-8 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-6 transition-all duration-300 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-2xl shrink-0">🎓</div>
            <div>
              <h3 className="text-xl font-bold text-white">Spectrum Life School</h3>
              <p className="text-slate-300 mt-1">Higher Secondary Education</p>
              <p className="text-slate-300 mt-1">12th Percentage : 73.8%</p>
              <p className="text-slate-500 text-sm mt-1">2022 – 2024</p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card p-8 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-6 transition-all duration-300 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-2xl shrink-0">🎓</div>
            <div>
              <h3 className="text-xl font-bold text-white">Trinity International School CBSE</h3>
              <p className="text-slate-300 mt-1">Secondary Education</p>
              <p className="text-slate-300 mt-1">10th Percentage : 91.6%</p>
              <p className="text-slate-500 text-sm mt-1">2021 – 2022</p>
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-12 px-6">
  <div className="max-w-6xl mx-auto">
    <SectionHeading title="Skills" />
    <div className="grid md:grid-cols-2 gap-6">
      {skills.map((group) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -5 }}
          className="glass-card p-6 rounded-2xl"
        >
          <h3 className="text-xl font-bold text-cyan-400 mb-4">{group.category}</h3>
          <div className="flex flex-wrap gap-3">
            {group.items.map((item) => (
              <span
                key={item}
                className="px-3 py-2 rounded-lg bg-slate-800 text-slate-200 text-sm border border-slate-700 hover:border-cyan-400 transition"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Projects */}
      <section id="projects" className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Projects" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass-card p-6 rounded-2xl group cursor-default transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{project.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mt-2 text-sm leading-7">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Achievements" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {achievements.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass-card p-6 rounded-2xl group transition-all duration-300 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl shrink-0">{item.icon}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <h3 className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors duration-200">
                        {item.title}
                      </h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 shrink-0">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-7 block w-full">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coding Profiles */}
      <section id="coding profiles" className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Coding Profiles" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
          >
            {codingProfiles.map((profile) => (
              <motion.a
                key={profile.name}
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.04 }}
                className={`glass-card p-5 rounded-2xl flex flex-col items-center gap-3 text-center transition-all duration-300 hover:shadow-lg ${profile.border} cursor-pointer`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${profile.color} flex items-center justify-center text-xl shadow-lg`}>
                  {profile.icon}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{profile.name}</p>
                  <p className="text-slate-500 text-xs mt-0.5">@{profile.handle}</p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                  {profile.stat}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Get In Touch" />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl"
          >
            <p className="text-white-400 text-xl leading-7 mb-8">
              I&apos;m open to internships, hackathons,exciting projects and all other oppurtunities that develop my growth. Feel free to reach out ! 🎉
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  ),
                  label: "Email",
                  value: "jumaanahbasheeth@gmail.com",
                  href: "mailto:jumaanahbasheeth@gmail.com",
                  color: "from-cyan-500 to-blue-500",
                  hover: "hover:border-cyan-500/50 hover:shadow-cyan-500/10",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                  label: "LinkedIn",
                  value: "linkedin.com/in/jumaanah-basheeth",
                  href: "https://www.linkedin.com/in/jumaanah-basheeth-868373315/",
                  color: "from-blue-500 to-blue-700",
                  hover: "hover:border-blue-500/50 hover:shadow-blue-500/10",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  ),
                  label: "GitHub",
                  value: "github.com/jumaanah-24",
                  href: "https://github.com/jumaanah-24",
                  color: "from-slate-500 to-slate-700",
                  hover: "hover:border-slate-400/50 hover:shadow-slate-400/10",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  ),
                  label: "Phone",
                  value: "+91 8122613484",
                  href: "tel:+918122613484",
                  color: "from-green-500 to-emerald-600",
                  hover: "hover:border-green-500/50 hover:shadow-green-500/10",
                },
              ].map(({ icon, label, value, href, color, hover }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Phone" && label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 px-5 py-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:scale-105 transition-all duration-300 hover:shadow-lg ${hover}`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">{label}</p>
                    <p className="text-sm text-white font-medium mt-0.5">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5 text-center text-slate-600 text-sm">
        <p>© 2026 Jumaanah Basheeth.</p>
      </footer>

    </main>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-10"
    >
      <h2 className="text-4xl font-bold gradient-text inline-block">{title}</h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
    </motion.div>
  );
}
