import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { motion } from 'framer-motion';

import styles from './HomepageHero.module.css';

export default function HomepageHero() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className={styles.heroTitle}>
              {siteConfig.title}
            </h1>
            <p className={styles.heroSubtitle}>
              Physical AI & Humanoid Robotics — An AI-Native Textbook for Panaversity
            </p>
            <p className={styles.heroTagline}>
              Master the convergence of artificial intelligence and physical robotics through an AI-native approach to building intelligent humanoid systems.
            </p>
            <div className={styles.heroButtons}>
              <Link className={styles.primaryButton} to="/docs/intro">
                Start Reading
              </Link>
              <Link className={styles.secondaryButton} to="/docs/module1/intro">
                View Curriculum
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className={styles.bookCover}>
            <div className={styles.coverContent}>
              <h3>Physical AI & Humanoid Robotics</h3>
              <p>An AI-Native Textbook</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}