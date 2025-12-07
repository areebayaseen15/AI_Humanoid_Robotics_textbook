import React from 'react';
import { motion } from 'framer-motion';

import styles from './HomepageShift.module.css';

export default function HomepageShift() {
  return (
    <section className={styles.shift}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>The Great Shift</h2>
          <p className={styles.description}>
            Understanding the fundamental differences between traditional development and AI-native approaches.
          </p>
        </motion.div>

        <div className={styles.comparison}>
          <motion.div
            className={styles.column}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.columnTitle}>Traditional Dev</h3>
            <ul className={styles.columnList}>
              <li className={styles.listItem}>• Rule-based programming</li>
              <li className={styles.listItem}>• Fixed behavior patterns</li>
              <li className={styles.listItem}>• Manual optimization</li>
              <li className={styles.listItem}>• Separate AI integration</li>
              <li className={styles.listItem}>• Static system architecture</li>
              <li className={styles.listItem}>• Human-defined parameters</li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.column}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.columnTitle}>AI-Native Dev</h3>
            <ul className={styles.columnList}>
              <li className={styles.listItem}>• Learning-based systems</li>
              <li className={styles.listItem}>• Adaptive behavior patterns</li>
              <li className={styles.listItem}>• Self-optimization</li>
              <li className={styles.listItem}>• Native AI integration</li>
              <li className={styles.listItem}>• Dynamic system architecture</li>
              <li className={styles.listItem}>• Learned parameters</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}