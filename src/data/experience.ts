export interface ExperienceEntry {
  company: string
  role: string
  dates: string
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Aramark',
    role: 'Analyst (Software Analyst)',
    dates: '08/2025 – 05/2026',
    bullets: [
      'Developed and refined HMI applications integrating sensor data, device communication, and touch-based controls using React, TypeScript, and JavaScript for 500+ users, driving 18% profit growth and 80% waste reduction, earning The Tech Whisperer Award for engineering impact.',
      'Designed interactive 2D/3D animations and operator experience elements using Three.js and Lottie to visualize system states, considering ergonomics and workflow efficiency, accelerating delivery by 40% with GitHub version control.',
      'Reduced resolution time by 60% by performing risk assessments for secure solutions, taking ownership of task completeness and timeliness, and collaborating with mechanical and electrical engineers to ensure hardware-software integration and long-term maintainability.',
    ],
  },
  {
    company: 'devx AI Labs',
    role: 'Software Engineer Intern',
    dates: '01/2024 – 07/2024',
    bullets: [
      'Improved application throughput by 25% by building cross-platform UI components with React, React Native, and TypeScript, integrating device communication frameworks for an e-commerce platform processing thousands of daily transactions.',
      'Delivered 50% faster releases by maintaining code quality and documentation standards on Linux, applying system architecture best practices, and recommending more effective approaches in a fast-paced collaborative environment.',
    ],
  },
]
