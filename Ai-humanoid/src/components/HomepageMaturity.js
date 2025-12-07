import React from 'react';
import { motion } from 'framer-motion';

import styles from './HomepageMaturity.module.css';

const maturityLevels = [
  {
    number: '01',
    title: 'Traditional Automation',
    description: 'Basic programmed behaviors with fixed sequences and limited adaptability.'
  },
  {
    number: '02',
    title: 'AI-Enhanced Systems',
    description: 'Integration of AI algorithms for improved decision-making and pattern recognition.'
  },
  {
    number: '03',
    title: 'Adaptive Intelligence',
    description: 'Systems that learn from experience and adapt their behavior to changing conditions.'
  },
  {
    number: '04',
    title: 'Embodied Cognition',
    description: 'True physical intelligence where robots understand and interact with the world naturally.'
  }
];

export default function HomepageMaturity() {
  return (
    <section className={styles.maturity}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Organizational AI Maturity Levels</h2>
          <p className={styles.description}>
            Understand the progression from traditional automation to true embodied intelligence in robotics.
          </p>
        </motion.div>

        <div className={styles.stepper}>
          {maturityLevels.map((level, index) => (
            <motion.div
              key={index}
              className={styles.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.stepNumber}>
                <span>{level.number}</span>
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{level.title}</h3>
                <p className={styles.stepDescription}>{level.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}