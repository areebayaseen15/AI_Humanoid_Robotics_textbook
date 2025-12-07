const fs = require('fs');
const path = require('path');

// Function to create a _category_.json file in a directory
function createCategoryJson(dirPath, label, position = 0) {
  const categoryContent = {
    label: label,
    position: position,
    link: {
      type: 'generated-index',
      description: `Learn about ${label}`
    }
  };

  const categoryFilePath = path.join(dirPath, '_category_.json');
  fs.writeFileSync(categoryFilePath, JSON.stringify(categoryContent, null, 2));
  console.log(`Created _category_.json for: ${dirPath}`);
}

// Process all chapter directories
function processChapterDirectories() {
  // Define the chapter directories that need _category_.json files
  const chapterDirs = [
    // Module 1
    { path: 'docs/Module 1 The Robotic Nervous System (ROS 2)/Chapter1-Introduction to ROS2', label: 'Chapter 1: Introduction to ROS2' },
    { path: 'docs/Module 1 The Robotic Nervous System (ROS 2)/Chapter2-Nodes,TopicsService,Action', label: 'Chapter 2: Nodes, Topics, Services, and Actions' },
    { path: 'docs/Module 1 The Robotic Nervous System (ROS 2)/Chapter3-PythonAgentsWithRclpy', label: 'Chapter 3: Python Agents with rclpy' },

    // Module 2
    { path: 'docs/Module2-Digital-Twin/Chapter1-PhysicsSimulation', label: 'Chapter 1: Physics Simulation' },
    { path: 'docs/Module2-Digital-Twin/Chapter2-GazeboPhysics', label: 'Chapter 2: Gazebo Physics' },

    // Module 3
    { path: 'docs/Module3-AI-Robot-Brain/Chapter1-Focus Advanced perception and training', label: 'Chapter 1: Focus Advanced perception and training' },
    { path: 'docs/Module3-AI-Robot-Brain/Chapter2-Nav2 Path planning for bipedal humanoid movement', label: 'Chapter 2: Nav2 Path planning for bipedal humanoid movement' },
    { path: 'docs/Module3-AI-Robot-Brain/Chapter3-NVIDIA Isaac Sim Photorealistic simulation and synthetic data generation', label: 'Chapter 3: NVIDIA Isaac Sim Photorealistic simulation and synthetic data generation' },
    { path: 'docs/Module3-AI-Robot-Brain/Chapter4-saac ROS Hardware-accelerated VSLAM (Visual SLAM) and navigation', label: 'Chapter 4: Isaac ROS Hardware-accelerated VSLAM (Visual SLAM) and navigation' },
  ];

  for (const chapterDir of chapterDirs) {
    if (fs.existsSync(chapterDir.path)) {
      createCategoryJson(chapterDir.path, chapterDir.label);
    } else {
      console.log(`Directory does not exist: ${chapterDir.path}`);
    }
  }
}

processChapterDirectories();
console.log('_category_.json files creation completed!');