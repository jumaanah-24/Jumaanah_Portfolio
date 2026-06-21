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
    description: "AI-powered road transparency platform used to provide road-related information through an intelligent chatbot. Enabled users to access road maintenance, expenditure, accident statistics, contractor details, and complaint data through a centralized system. Implemented interactive dashboards, analytics, and location-based insights to improve transparency andaccountability in road infrastructure management",
    tech: ["React", "Python","PostgreSQL"],
    icon: "🛣️",
  },
  {
    title: "Event Managment System",
    description: "A full-stack MERN  web application designed to streamline event discovery, booking, andmanagement. The platform enables users to browse events, make bookings, leave reviews, and receive notifications—providing aseamless experience for event organizers and attendees.",
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
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-6 text-sm font-medium"
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
        </div>
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
          <div className="grid md:grid-cols-2 gap-8">

            {/* Left — info */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl flex flex-col gap-6"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Let&apos;s Connect</h3>
                <p className="text-slate-400 text-sm leading-7">
                  I&apos;m open to internships, hackathons, and exciting projects. Feel free to reach out — I&apos;ll get back to you soon!
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { icon: "📧", label: "jumaanahbasheeth@gmail.com", href: "mailto:jumaanahbasheeth@gmail.com" },
                  { icon: "💻", label: "github.com/jumaanah-24", href: "https://github.com/jumaanah-24" },
                  { icon: "🔗", label: "linkedin.com/in/jumaanah-basheeth", href: "https://www.linkedin.com/in/jumaanah-basheeth-868373315/" },
                ].map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-slate-800 hover:scale-105 transition-all duration-200 text-sm"
                  >
                    <span className="text-lg">{icon}</span>
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right — message form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5 text-center text-slate-600 text-sm">
        <p>© 2025 Jumaanah Basheeth. Built with Next.js &amp; Tailwind CSS.</p>
      </footer>

    </main>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-slate-400 font-medium">Your Name</label>
        <input
          type="text"
          required
          placeholder="John Doe"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors duration-200"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-slate-400 font-medium">Email Address</label>
        <input
          type="email"
          required
          placeholder="john@example.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors duration-200"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-slate-400 font-medium">Message</label>
        <textarea
          required
          rows={4}
          placeholder="Hi Jumaanah, I'd like to connect..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors duration-200 resize-none"
        />
      </div>
      {status === "error" && (
        <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className="mt-1 w-full py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {status === "sending" ? "Sending..." : status === "sent" ? "✅ Message Sent!" : "Send Message"}
      </button>
    </form>
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
