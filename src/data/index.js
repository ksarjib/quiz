import { set1 } from './set1.js';
import { set2 } from './set2.js';
import { set3 } from './set3.js';
import { set4 } from './set4.js';
import { set5 } from './set5.js';
import { set6 } from './set6.js';
import { set7 } from './set7.js';
import { set8 } from './set8.js';
import { set9 } from './set9.js';
import { set10 } from './set10.js';

export const QUESTION_SETS = [
  { id: 1, title: 'SET-1', questions: set1 },
  { id: 2, title: 'SET-2', questions: set2 },
  { id: 3, title: 'SET-3', questions: set3 },
  { id: 4, title: 'SET-4', questions: set4 },
  { id: 5, title: 'SET-5', questions: set5 },
  { id: 6, title: 'SET-6', questions: set6 },
  { id: 7, title: 'SET-7', questions: set7 },
  { id: 8, title: 'SET-8', questions: set8 },
  { id: 9, title: 'SET-9', questions: set9 },
  { id: 10, title: 'SET-10', questions: set10 }
];

export const DOMAIN_WEIGHTS = {
  "Agentic Architecture & Orchestration": 270,
  "Tool Design & MCP Integration": 180,
  "Claude Code Configuration & Workflows": 200,
  "Prompt Engineering & Structured Output": 200,
  "Context Management & Reliability": 150
};
