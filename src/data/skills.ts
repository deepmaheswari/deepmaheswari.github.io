export interface SkillGroup {
  category: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages & Frontend',
    items: ['JavaScript', 'TypeScript', 'React', 'React Native', 'Kotlin', 'Java', 'Python', 'SQL', 'C++', 'C#', 'HTML/CSS'],
  },
  {
    category: 'HMI & Graphics',
    items: ['HMI Design', 'UI/UX', 'Three.js', 'React Three Fiber', 'Expo Three', 'Lottie', 'Babylon.js', 'Blender', 'Figma', '2D/3D Animation', 'Touch-Based Input', 'Operator Experience Design'],
  },
  {
    category: 'Hardware & Connectivity',
    items: ['Sensor Data Integration', 'Device Communication', 'Android Networking (Wi-Fi, Bluetooth, BLE)', 'Socket-Based Communication', 'Native Modules/Gradle', 'IoT', 'Network Security', 'Linux'],
  },
  {
    category: 'Practices & Soft Skills',
    items: ['GitHub', 'Code Quality', 'System Architecture', 'Security', 'Risk Assessment', 'Ergonomics', 'Problem-Solving', 'Detail-Oriented', 'Self-Starter', 'Multidisciplinary Collaboration', 'Leadership', 'GenAI Tools'],
  },
]
