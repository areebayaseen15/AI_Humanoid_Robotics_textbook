import React from 'react';
import { motion } from 'framer-motion';

import styles from './HomepageFeatures.module.css';

const features = [
  {
    title: 'AI-First Architecture',
    description: 'Design systems with artificial intelligence as the foundational layer, enabling intelligent decision-making and adaptive behavior.',
    icon: '🧠'
  },
  {
    title: 'Physical Intelligence',
    description: 'Combine AI algorithms with physical systems to create robots that can perceive, understand, and interact with the real world.',
    icon: '🦾'
  },
  {
    title: 'Humanoid Robotics',
    description: 'Develop sophisticated humanoid robots capable of natural human interaction and complex task execution.',
    icon: '🤖'
  },
  {
    title: 'Embodied Learning',
    description: 'Enable robots to learn from physical interactions and experiences, improving their capabilities through real-world practice.',
    icon: '🎓'
  }
];

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Why This Book?</h2>
          <p className={styles.description}>
            Discover the core pillars that make this book essential for understanding the future of AI and robotics.
          </p>
        </motion.div>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}