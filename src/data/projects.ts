export interface Project {
  title: string
  description: string
  bullets: string[]
  tags: string[]
}

export const projects: Project[] = [
  {
    title: 'Industrial HMI & Touch-Based Control Interface',
    description: 'An HMI platform for industrial automation with touch-based interactive visual controls and real-time feedback.',
    bullets: [
      'Architected an HMI platform for industrial automation using React, TypeScript, and React Three Fiber, designing touch-based interactive visual controls with real-time feedback for 1M+ operator interactions.',
      'Sustained 99.95% system reliability by integrating live sensor data and camera feeds with GitHub version control, and applying security and maintainability standards that reduced incidents by 40%.',
    ],
    tags: ['React', 'TypeScript', 'React Three Fiber', 'GitHub', 'Sensor Data'],
  },
  {
    title: '3D Animation & Robotics Visualization Engine',
    description: 'A 2D/3D animation engine visualizing robot movements and system states for intuitive operator experience design.',
    bullets: [
      'Built a 2D/3D animation engine using Three.js, Babylon.js, and Lottie to visualize robot movements and system states, designing assets in Blender and Figma for intuitive operator experience design.',
      'Achieved 40% faster development by creating reusable React Native components, implementing Kotlin/Java Native Modules via Gradle, and applying human-centric design principles for safe, intuitive automation.',
    ],
    tags: ['Three.js', 'Babylon.js', 'Lottie', 'Blender', 'Figma', 'React Native'],
  },
  {
    title: 'IoT Device Communication & Network Security Platform',
    description: 'A device communication platform supporting Wi-Fi, Bluetooth/BLE, and socket-based frameworks for robotics/IoT systems.',
    bullets: [
      'Developed a device communication platform supporting Wi-Fi, Bluetooth/BLE, and socket-based frameworks in JavaScript and TypeScript on Linux, sustaining 99.9% connection reliability.',
      'Reduced pairing failures by 40% by implementing network security protocols and device pairing workflows, optimizing local communication for robotics/IoT systems with rigorous risk assessment.',
    ],
    tags: ['JavaScript', 'TypeScript', 'Bluetooth/BLE', 'Wi-Fi', 'Linux'],
  },
]
