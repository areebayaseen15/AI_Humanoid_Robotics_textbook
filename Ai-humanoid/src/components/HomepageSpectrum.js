import React from 'react';
import { motion } from 'framer-motion';

import styles from './HomepageSpectrum.module.css';

const spectrumCards = [
  {
    title: 'AI-Native Development',
    description: 'Build systems from the ground up with AI as the core architectural principle, not an afterthought.',
    icon: '🤖',
    features: [
      'AI-first architecture patterns',
      'Native intelligence integration',
      'Adaptive learning systems'
    ]
  },
  {
    title: 'Physical Intelligence',
    description: 'Bridge the gap between digital AI and physical robotic systems with seamless integration.',
    icon: '🦾',
    features: [
      'Real-world interaction models',
      'Sensorimotor learning',
      'Embodied cognition'
    ]
  },
  {
    title: 'Humanoid Systems',
    description: 'Create sophisticated humanoid robots that can interact naturally with human environments.',
    icon: '🤖',
    features: [
      'Biomechanical design',
      'Social interaction protocols',
      'Natural movement patterns'
    ]
  }
];

export default function HomepageSpectrum() {
  return (
    <section className={styles.spectrum}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>AI Development Spectrum</h2>
          <p className={styles.description}>
            Explore the complete spectrum of AI-native robotics development, from foundational concepts to advanced humanoid systems.
          </p>
        </motion.div>

        <div className={styles.cardsGrid}>
          {spectrumCards.map((card, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.cardIcon}>{card.icon}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
              <ul className={styles.cardFeatures}>
                {card.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.featureItem}>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}