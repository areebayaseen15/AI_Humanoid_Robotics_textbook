const fs = require('fs');
const path = require('path');

// Function to process a single file
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Check if file already has frontmatter
  if (content.startsWith('---')) {
    const endIndex = content.indexOf('---', 3);
    if (endIndex !== -1) {
      let frontmatter = content.substring(0, endIndex + 3);
      let restContent = content.substring(endIndex + 3);

      // Check if 'id' already exists in frontmatter
      if (!frontmatter.includes('id:')) {
        // Extract title if it exists
        const titleMatch = frontmatter.match(/title:\s*(.+)/);
        let title = 'Untitled';
        if (titleMatch) {
          title = titleMatch[1].trim();
        }

        // Create new frontmatter with id
        const lines = frontmatter.split('\n');
        const newLines = ['---'];

        // Add id first
        const fileName = path.basename(filePath, '.md');
        newLines.push(`id: ${fileName.replace(/[^a-zA-Z0-9_-]/g, '-')}`);

        // Add other fields
        for (let i = 1; i < lines.length; i++) {
          if (lines[i].trim() && !lines[i].startsWith('id:')) {
            newLines.push(lines[i]);
          }
        }

        // Add sidebar_label if not present
        if (!frontmatter.includes('sidebar_label:')) {
          newLines.push(`sidebar_label: ${title.replace(/^[^a-zA-Z0-9]/, '').replace(/[^a-zA-Z0-9\s-]/g, ' ').trim()}`);
        }

        newLines.push('---');
        const newFrontmatter = newLines.join('\n');

        const newContent = newFrontmatter + restContent;
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated frontmatter for: ${filePath}`);
      }
    }
  } else {
    // File has no frontmatter, add one
    const fileName = path.basename(filePath, '.md');
    const title = fileName.replace(/-/g, ' ');
    const newFrontmatter = `---
id: ${fileName.replace(/[^a-zA-Z0-9_-]/g, '-')}
title: ${title}
sidebar_label: ${title}
sidebar_position: 0
---
`;

    const contentWithFrontmatter = newFrontmatter + content;
    fs.writeFileSync(filePath, contentWithFrontmatter, 'utf8');
    console.log(`Added frontmatter to: ${filePath}`);
  }
}

// Function to recursively process all markdown files in a directory
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (item.endsWith('.md') || item.endsWith('.mdx')) {
      processFile(fullPath);
    }
  }
}

// Process all markdown files in the docs directory
processDirectory('./docs');

console.log('Frontmatter update completed!');