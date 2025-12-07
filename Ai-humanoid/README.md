# Physical AI & Humanoid Robotics Textbook

An open-source, AI-augmented textbook for physical AI and humanoid robotics, leveraging Claude Code agents for dynamic content generation, personalization, and RAG-driven interactions.

## Project Purpose

This project aims to create a comprehensive and interactive textbook that adapts to the learner's needs and provides up-to-date information on physical AI and humanoid robotics. By integrating Claude Code agents, we envision an adaptive learning experience where content can be dynamically generated, personalized, and made queryable through a Retrieval-Augmented Generation (RAG) chatbot.

## How Claude Code Skills are Used

Claude Code agents will utilize various skills (located in the `.claude/skills/` directory) to automate different aspects of this textbook:

*   **Content Generation:** Skills like `AISpecDrivenBookCreation` or `HumanoidKinematicsLocomotion` will generate new chapters or sections based on specifications.
*   **Personalization:** Skills such as `ContentPersonalization` will adapt content to individual learning styles or progress.
*   **RAG Chatbot Integration:** The `RAGChatbot` skill will help build and integrate the interactive chatbot feature over the textbook's content.
*   **Translation:** The `UrduTranslation` skill can provide per-chapter translation functionality.
*   **Quiz Generation:** `QuizAssessmentGeneration` will create quizzes to test comprehension.
*   **Simulation Environments:** `GazeboSimulation` and `UnitySimulation` can generate and integrate simulation content.
*   **Hardware Lab Design:** `HardwareLabDesignContent` can provide guidance on setting up robotics labs.

## Chapter Hooks

Book chapters will reside in the `docs/` directory. Each chapter will be a Markdown file (`.md`) that can be structured and linked within the Docusaurus sidebar. Future skills will be able to read, generate, and modify these chapter files.

Example of a chapter structure in `docs/`:

```
docs/
├── intro.md
├── chapter1/
│   ├── _category_.json
│   └── overview.md
├── chapter2/
│   └── concepts.md
└── ...
```

To add a new chapter:
1.  Create a new directory inside `docs/` (e.g., `docs/new-chapter/`).
2.  Add Markdown files within that directory (e.g., `docs/new-chapter/introduction.md`).
3.  Update `sidebars.js` or ensure it's configured for autogeneration to include your new chapter.
