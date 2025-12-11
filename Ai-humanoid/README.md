# Physical AI & Humanoid Robotics Textbook

[![Vercel](https://vercel.com/button)](https://aihumanoidtextbook.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Docusaurus](https://img.shields.io/badge/Docusaurus-3.0.0-blue)](https://docusaurus.io/)

An open-source, AI-augmented textbook for physical AI and humanoid robotics, leveraging Claude Code agents for dynamic content generation, personalization, and RAG-driven interactions.

## 🚀 Project Overview

This project aims to create a comprehensive and interactive textbook that adapts to the learner's needs and provides up-to-date information on physical AI and humanoid robotics. By integrating Claude Code agents, we envision an adaptive learning experience where content can be dynamically generated, personalized, and made queryable through a Retrieval-Augmented Generation (RAG) chatbot.

## ✨ Key Features

- 📚 **Comprehensive Curriculum**: Complete modules covering ROS2, Digital Twins, AI Robotics, and Vision-Language-Action systems
- 🤖 **AI-Augmented Content**: Dynamic content generation and personalization using Claude Code agents
- 💬 **RAG Chatbot**: Interactive Q&A system for querying textbook content
- 🌐 **Modern UI**: Built with Docusaurus for an excellent reading experience
- 📱 **Responsive Design**: Works seamlessly across all devices
- 🔍 **Searchable Content**: Full-text search across all modules and chapters

## 📖 Curriculum Structure

### Module 1: The Robotic Nervous System (ROS 2)
- Introduction to ROS2
- Nodes, Topics, Services, and Actions
- Python Agents with Rclpy
- Launch Files, Parameters, and Lifecycle Nodes

### Module 2: The Digital Twin (Gazebo & Unity)
- Physics Simulation Fundamentals
- Simulating Physics, Gravity, and Collisions in Gazebo
- Unity Rendering

### Module 3: The AI-Robot Brain (NVIDIA Isaac™)
- Advanced Perception and Training
- Nav2 Path Planning for Bipedal Humanoid Movement
- NVIDIA Isaac Sim: Photorealistic Simulation and Synthetic Data Generation
- Isaac ROS Hardware-accelerated VSLAM

### Module 4: Vision-Language-Action (VLA)
- Vision-Language-Action Models and Principles
- Integration with Robotic Systems

## 🛠️ Technology Stack

- **Framework**: [Docusaurus v3](https://docusaurus.io/) - Static Site Generator
- **Language**: JavaScript/TypeScript
- **AI Integration**: Claude Code agents for content generation
- **Deployment**: Vercel
- **Documentation**: Markdown/MDX
- **Styling**: CSS Modules, Tailwind CSS

## 🏗️ Project Architecture

```
Ai-humanoid/
├── docs/                    # Textbook content and modules
├── src/                     # Custom React components
│   ├── components/          # Reusable UI components
│   ├── pages/              # Custom pages
│   └── css/                # Custom styles
├── static/                 # Static assets (images, etc.)
├── api/                    # Backend API endpoints
├── specs/                  # Project specifications
├── history/                # Prompt history records
├── .claude/                # Claude Code configurations
└── vercel.json             # Vercel deployment configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.0
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/areebayaseen15/Physical_Ai-Humanoid_TextBook.git
cd Physical_Ai-Humanoid_TextBook
```

2. Navigate to the Ai-humanoid directory:
```bash
cd Ai-humanoid
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Open your browser to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

The built static files will be in the `build` directory.

## 🤖 Claude Code Skills Integration

This project leverages various Claude Code skills for automation:

- **AISpecDrivenBookCreation**: Automated content generation following spec-driven development
- **ContentPersonalization**: Adaptive content based on user profiles and learning styles
- **RAGChatbot**: Retrieval-Augmented Generation chatbot for interactive learning
- **GazeboSimulation**: Gazebo simulation environment generation
- **UnitySimulation**: Unity 3D simulation integration
- **UrduTranslation**: Multi-language content support
- **QuizAssessmentGeneration**: Automated quiz and assessment creation

## 📊 Modules and Content

The textbook is organized into comprehensive modules:

### 1. ROS 2 - The Robotic Nervous System
- Complete introduction to ROS2 concepts
- Practical Python agent development with rclpy
- Advanced launch files and lifecycle management

### 2. Digital Twin - Physics Simulation
- Gazebo physics simulation fundamentals
- Unity rendering and visualization
- Collision detection and physics modeling

### 3. AI-Robot Brain - NVIDIA Isaac
- Advanced perception and training methodologies
- Nav2 path planning for humanoid robots
- Isaac Sim photorealistic simulation
- Hardware-accelerated VSLAM

### 4. Vision-Language-Action Systems
- VLA model architecture and principles
- Integration with robotic systems
- Real-world applications

## 🤝 Contributing

We welcome contributions to make this textbook better! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🌐 Live Deployment

The textbook is deployed on Vercel and accessible at: [https://aihumanoidtextbook.vercel.app/](https://aihumanoidtextbook.vercel.app/)

## 📞 Contact

- **Areeba Yaseen** - [GitHub](https://github.com/areebayaseen15) | [LinkedIn](https://www.linkedin.com/in/areeba-yaseen-6523552b5/) | [Twitter](https://x.com/areebayaseen15)

## 🙏 Acknowledgments

- Built with [Docusaurus](https://docusaurus.io/)
- AI enhancement through Claude Code
- Open-source robotics community
- NVIDIA Isaac ecosystem
- ROS community

## 🚀 Future Enhancements

- Multi-language support (Urdu and other languages)
- Interactive simulation environments
- Advanced RAG capabilities
- Personalized learning paths
- Assessment and progress tracking
- Mobile application