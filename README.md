# Claude Architect Interactive Mock Test

Interactive quiz app for Claude Certified Architect Foundations preparation.

## What is included

- 10 test sets
- 60 questions per set
- SET label at the top, for example `Current Test: SET-1/SET-10`
- Clickable answer options
- Immediate right/wrong feedback
- Explanation after every answer
- Live score out of 1000
- Domain-level score breakdown
- Review screen after finishing each set
- Restart current set anytime

## How to run locally

### 1. Install Node.js

Install Node.js 18 or newer.

Check your version:

```bash
node -v
npm -v
```

### 2. Install dependencies

From the project folder:

```bash
npm install
```

### 3. Start the app

```bash
npm run dev
```

Then open the local URL printed in the terminal, usually:

```text
http://localhost:5173
```

## Build for production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Notes

The app uses only React and Vite. No Tailwind, shadcn, framer-motion, or icon libraries are required.
