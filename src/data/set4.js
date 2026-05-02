export const set4 = [
  {
    "id": 1,
    "setId": 4,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Data Extraction",
    "question": "You need guaranteed valid JSON syntax from Claude. Best method?",
    "options": [
      "Use tool use with JSON schema",
      "Use markdown code blocks",
      "Ask Claude to only return JSON",
      "Use higher temperature"
    ],
    "answer": 0,
    "explanation": "Tool use with JSON schema is the most reliable way to enforce schema-compliant structured output."
  },
  {
    "id": 2,
    "setId": 4,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Tool Design and MCP",
    "question": "Two tools have vague descriptions: get_customer and lookup_order. Claude often chooses wrong. Best first fix?",
    "options": [
      "Add a separate classifier",
      "Improve tool descriptions with inputs, examples, boundaries, and when to use",
      "Disable one tool",
      "Merge tools immediately"
    ],
    "answer": 1,
    "explanation": "Tool descriptions are the primary signal used for tool selection. Fix ambiguity there first."
  },
  {
    "id": 3,
    "setId": 4,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Review",
    "question": "You want review findings to include calibrated routing information for humans. What is useful?",
    "options": [
      "A single vague confidence sentence",
      "Field-level confidence or finding-level confidence, calibrated against labeled data",
      "No metadata",
      "Random score"
    ],
    "answer": 1,
    "explanation": "Confidence scores become useful when calibrated with labeled validation sets."
  },
  {
    "id": 4,
    "setId": 4,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Skills",
    "question": "You want a skill to ask developers for a required argument when they invoke it without one. Which frontmatter option helps?",
    "options": [
      "context: fork",
      "allowed-tools",
      "argument-hint",
      "tool_choice"
    ],
    "answer": 2,
    "explanation": "argument-hint gives users guidance about required parameters."
  },
  {
    "id": 5,
    "setId": 4,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Data Extraction",
    "question": "Extraction fails because total line items do not sum to stated total. Best next step?",
    "options": [
      "Retry with original document, failed extraction, and specific validation error",
      "Increase temperature",
      "Ignore and accept",
      "Remove total field"
    ],
    "answer": 0,
    "explanation": "Retry-with-error-feedback helps the model correct semantic validation failures when the evidence is present."
  },
  {
    "id": 6,
    "setId": 4,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Workflow",
    "question": "Before implementing a cache invalidation feature in an unfamiliar system, what Claude Code pattern can surface missing considerations?",
    "options": [
      "Immediate direct execution",
      "Interview pattern where Claude asks design questions first",
      "Delete old tests",
      "Disable CLAUDE.md"
    ],
    "answer": 1,
    "explanation": "The interview pattern helps reveal design constraints before implementation."
  },
  {
    "id": 7,
    "setId": 4,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Prompt Engineering",
    "question": "A code review prompt says 'check comments for accuracy' and produces many false positives. Better instruction?",
    "options": [
      "Review harder",
      "Flag comments only when claimed behavior contradicts actual code behavior",
      "Be conservative",
      "Find everything suspicious"
    ],
    "answer": 1,
    "explanation": "Explicit criteria reduce false positives better than vague cautionary language."
  },
  {
    "id": 8,
    "setId": 4,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Data Extraction",
    "question": "Tool-use JSON schema prevents which class of errors most directly?",
    "options": [
      "Missing source information",
      "Source ambiguity",
      "Semantic math errors",
      "JSON syntax errors"
    ],
    "answer": 3,
    "explanation": "Schemas eliminate syntax/shape errors, but they do not guarantee semantic correctness."
  },
  {
    "id": 9,
    "setId": 4,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Batch Processing",
    "question": "A batch job fails for only 37 oversized documents out of 10,000. What should you resubmit?",
    "options": [
      "Only failed documents using custom_id tracking, with modifications such as chunking",
      "All 10,000 documents unchanged",
      "None of them",
      "Only successful documents"
    ],
    "answer": 0,
    "explanation": "custom_id lets you correlate failures and resubmit only failed items with fixes."
  },
  {
    "id": 10,
    "setId": 4,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code for CI/CD",
    "question": "Claude Code hangs in CI because it waits for input. Correct fix?",
    "options": [
      "Redirect stdin only",
      "Use claude -p '...'",
      "Use claude --batch",
      "Use CLAUDE_HEADLESS=true"
    ],
    "answer": 1,
    "explanation": "The -p / --print flag runs Claude Code in non-interactive mode for automation."
  },
  {
    "id": 11,
    "setId": 4,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Development Workflow",
    "question": "Your team needs a shared /review slash command available to everyone in the repo. Where should it go?",
    "options": [
      "~/.claude/commands/",
      ".mcp.json",
      "CLAUDE.md",
      ".claude/commands/"
    ],
    "answer": 3,
    "explanation": "Project-scoped slash commands belong in .claude/commands/ so they can be shared through version control."
  },
  {
    "id": 12,
    "setId": 4,
    "domain": "Context Management & Reliability",
    "scenario": "Customer Support Resolution Agent",
    "question": "A customer says, 'I want a human now.' The issue looks simple and the agent could resolve it. What should the agent do?",
    "options": [
      "Escalate immediately",
      "Continue solving because the issue is simple",
      "Offer a discount first",
      "Ask why they want a human"
    ],
    "answer": 0,
    "explanation": "Explicit human-agent requests are a direct escalation trigger. Do not force autonomous resolution after the user asks for a human."
  },
  {
    "id": 13,
    "setId": 4,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Development Workflow",
    "question": "A developer stores coding standards in ~/.claude/CLAUDE.md, but teammates do not get them. Why?",
    "options": [
      "Claude Code ignores user-level files",
      "CLAUDE.md only works in CI",
      "Rules must always be in YAML",
      "User-level CLAUDE.md is not shared by version control"
    ],
    "answer": 3,
    "explanation": "User-level configuration is personal. Team standards should live at project level."
  },
  {
    "id": 14,
    "setId": 4,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Code Review and Reliability",
    "question": "Review prompts say 'be conservative,' but false positives remain high. Better approach?",
    "options": [
      "Ask Claude to lower confidence",
      "Remove all examples",
      "Add explicit report/skip criteria with concrete examples",
      "Use longer output"
    ],
    "answer": 2,
    "explanation": "Specific criteria beat vague confidence instructions. Define what to report and what to skip."
  },
  {
    "id": 15,
    "setId": 4,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Data Extraction",
    "question": "You want Claude to definitely call some tool but let it choose which extraction schema fits the document. Use:",
    "options": [
      "tool_choice: auto",
      "Forced specific tool",
      "No tools",
      "tool_choice: any"
    ],
    "answer": 3,
    "explanation": "tool_choice: any requires a tool call while allowing the model to select among available tools."
  },
  {
    "id": 16,
    "setId": 4,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Tool Design",
    "question": "A generic analyze_document tool handles extraction, summarization, and verification, causing inconsistent behavior. Best improvement?",
    "options": [
      "Remove all schemas",
      "Give it unrelated examples",
      "Make the description shorter",
      "Split it into purpose-specific tools with clear contracts"
    ],
    "answer": 3,
    "explanation": "Purpose-specific tools reduce ambiguity and improve tool selection."
  },
  {
    "id": 17,
    "setId": 4,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Skills",
    "question": "A skill produces verbose exploratory output and pollutes the main conversation. Which skill frontmatter option helps?",
    "options": [
      "context: fork",
      "mode: silent",
      "output: markdown",
      "temperature: high"
    ],
    "answer": 0,
    "explanation": "context: fork runs the skill in isolated subagent context and returns a summary without polluting the main session."
  },
  {
    "id": 18,
    "setId": 4,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Data Extraction",
    "question": "You need Claude to call extract_metadata first before any enrichment. Use:",
    "options": [
      "Prompt instruction only",
      "Forced tool choice for extract_metadata",
      "any",
      "auto"
    ],
    "answer": 1,
    "explanation": "Forced tool choice guarantees a specific named tool is called first."
  },
  {
    "id": 19,
    "setId": 4,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Multi-Agent Research System",
    "question": "How should the coordinator pass findings from search and document agents to synthesis?",
    "options": [
      "Include complete structured findings in the synthesis prompt",
      "Tell synthesis to check previous messages",
      "Store them only in logs",
      "Ask synthesis to rerun all searches"
    ],
    "answer": 0,
    "explanation": "Pass complete, structured findings directly, including source metadata, so synthesis can preserve provenance."
  },
  {
    "id": 20,
    "setId": 4,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Claude Code for CI/CD",
    "question": "You have a blocking pre-merge security check. Should it use Message Batches API?",
    "options": [
      "Yes, if custom_id is used",
      "Yes, because it is cheaper",
      "No, because batch has no guaranteed low-latency SLA",
      "Yes, if documents are small"
    ],
    "answer": 2,
    "explanation": "Blocking workflows need predictable low latency. Batch can take up to 24 hours."
  },
  {
    "id": 21,
    "setId": 4,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Tool Design and MCP",
    "question": "An agent has 20 tools and frequently misuses them. Best improvement?",
    "options": [
      "Increase context window",
      "Give it more examples",
      "Rename all tools randomly",
      "Restrict tools by agent role"
    ],
    "answer": 3,
    "explanation": "Scoped tool access reduces decision complexity and prevents cross-specialization misuse."
  },
  {
    "id": 22,
    "setId": 4,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Code Review and Reliability",
    "question": "Claude reviews 18 files in one pass and misses obvious bugs while giving uneven feedback. Best redesign?",
    "options": [
      "Use per-file local passes plus cross-file integration pass",
      "Increase verbosity",
      "Ask for shorter output",
      "Run same prompt three times and average"
    ],
    "answer": 0,
    "explanation": "Multi-pass review prevents attention dilution and allows cross-file checks separately."
  },
  {
    "id": 23,
    "setId": 4,
    "domain": "Context Management & Reliability",
    "scenario": "Code Review and Reliability",
    "question": "Two credible sources report different statistics from different years. Best handling?",
    "options": [
      "Preserve both with source and date context",
      "Pick larger number",
      "Pick newer one silently",
      "Average them"
    ],
    "answer": 0,
    "explanation": "Conflicts should be annotated with source/date context, not arbitrarily resolved."
  },
  {
    "id": 24,
    "setId": 4,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Schema Design",
    "question": "An enum field may not cover future categories. What schema pattern is most flexible?",
    "options": [
      "Use enum values plus other and other_detail",
      "Force the closest existing enum",
      "Make every value a number",
      "Remove the enum"
    ],
    "answer": 0,
    "explanation": "An 'other' enum value plus detail field preserves structure while allowing extensibility."
  },
  {
    "id": 25,
    "setId": 4,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Codebase Exploration",
    "question": "Edit fails because the target text is not unique. Best fallback?",
    "options": [
      "Use Glob",
      "Read full file, then Write corrected version",
      "Delete file",
      "Retry same Edit forever"
    ],
    "answer": 1,
    "explanation": "When Edit lacks a unique anchor, Read the full file and Write the corrected full content."
  },
  {
    "id": 26,
    "setId": 4,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Data Extraction",
    "question": "You have 10,000 documents to process overnight. Latency is not important. Best API approach?",
    "options": [
      "Manual review only",
      "Message Batches API",
      "Claude Code interactive",
      "Synchronous API"
    ],
    "answer": 1,
    "explanation": "Batch processing is ideal for latency-tolerant workloads and reduces cost."
  },
  {
    "id": 27,
    "setId": 4,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Code Review and Reliability",
    "question": "Claude generated code and then reviews the same code in the same session. It misses issues. Best fix?",
    "options": [
      "Add more praise",
      "Use independent review instance",
      "Ask it to be skeptical",
      "Increase temperature"
    ],
    "answer": 1,
    "explanation": "Independent review avoids self-review bias from the generation context."
  },
  {
    "id": 28,
    "setId": 4,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Session Management",
    "question": "You want to compare two refactoring strategies from the same analysis baseline. Which session feature fits best?",
    "options": [
      "tool_choice any",
      "fork_session",
      "Message Batches API",
      "Glob"
    ],
    "answer": 1,
    "explanation": "fork_session creates independent branches from a shared baseline to explore divergent approaches."
  },
  {
    "id": 29,
    "setId": 4,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Codebase Exploration",
    "question": "For exploring unfamiliar codebase entry points, best initial tool?",
    "options": [
      "Grep",
      "Write",
      "Process refund",
      "Edit"
    ],
    "answer": 0,
    "explanation": "Use Grep to search contents for entry points, function names, imports, or error messages."
  },
  {
    "id": 30,
    "setId": 4,
    "domain": "Context Management & Reliability",
    "scenario": "Code Review and Reliability",
    "question": "For long customer cases, numerical facts are getting lost in summaries. Best pattern?",
    "options": [
      "Keep persistent case facts block with amounts, IDs, dates, statuses",
      "Ask user again every time",
      "Remove prior messages",
      "Use vague summary"
    ],
    "answer": 0,
    "explanation": "Important transactional facts should be preserved in a structured facts block outside vague summaries."
  },
  {
    "id": 31,
    "setId": 4,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Built-in Tools",
    "question": "You need to find every file matching **/*.test.tsx. Which built-in Claude Code tool is most appropriate?",
    "options": [
      "Bash history",
      "Glob",
      "Edit",
      "Grep"
    ],
    "answer": 1,
    "explanation": "Glob is for matching file paths and filenames. Grep is for searching file contents."
  },
  {
    "id": 32,
    "setId": 4,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Tool Design and MCP",
    "question": "For shared team MCP server config with credentials, best location and credential handling?",
    "options": [
      ".mcp.json with environment variable expansion",
      "Source code constants",
      "CLAUDE.md with API key",
      "~/.claude.json with hardcoded token"
    ],
    "answer": 0,
    "explanation": "Use project-scoped .mcp.json and environment variables such as ${GITHUB_TOKEN}"
  },
  {
    "id": 33,
    "setId": 4,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Multi-Agent Research System",
    "question": "A coordinator delegates research on 'AI in creative industries' only to subagents covering digital art, graphic design, and photography. Final report misses music and film. Root cause?",
    "options": [
      "Web search agent failed",
      "MCP server returned bad results",
      "Synthesis agent hallucinated",
      "Coordinator decomposed scope too narrowly"
    ],
    "answer": 3,
    "explanation": "The subagents completed their assigned tasks, but the coordinator failed to cover the full topic space."
  },
  {
    "id": 34,
    "setId": 4,
    "domain": "Context Management & Reliability",
    "scenario": "Codebase Exploration",
    "question": "During codebase exploration, Claude starts referencing typical patterns instead of actual classes found earlier. What helps?",
    "options": [
      "Scratchpad files with key findings",
      "Larger font",
      "Remove Grep",
      "Disable tools"
    ],
    "answer": 0,
    "explanation": "Scratchpad files persist discovered facts across long sessions and reduce context degradation."
  },
  {
    "id": 35,
    "setId": 4,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Multi-Agent Research System",
    "question": "You want search, document analysis, and statistics agents to run at the same time. Best approach?",
    "options": [
      "Run them one by one",
      "Emit multiple Task tool calls in one coordinator response",
      "Give all tools to one agent",
      "Use one giant prompt"
    ],
    "answer": 1,
    "explanation": "Parallel subagent spawning is done by emitting multiple Task calls in one coordinator response."
  },
  {
    "id": 36,
    "setId": 4,
    "domain": "Context Management & Reliability",
    "scenario": "Customer Support Resolution Agent",
    "question": "The agent calls lookup_order and receives 40 fields, but only needs orderId, status, amount, returnWindow, and paymentMethod. Long conversations are degrading. What should you do?",
    "options": [
      "Trim tool results before adding them to context",
      "Increase max tokens",
      "Summarize the whole conversation every turn",
      "Ask the user to repeat details"
    ],
    "answer": 0,
    "explanation": "Verbose tool outputs consume context. Normalize and trim results before appending them so only relevant fields persist."
  },
  {
    "id": 37,
    "setId": 4,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Workflow Handoff",
    "question": "A human support agent receives escalations but cannot see the Claude conversation transcript. What should Claude provide?",
    "options": [
      "Raw token log",
      "Only the final apology",
      "A confidence score only",
      "Structured handoff summary with customer ID, root cause, attempted actions, and recommendation"
    ],
    "answer": 3,
    "explanation": "Escalation handoff should preserve operational context in a structured summary."
  },
  {
    "id": 38,
    "setId": 4,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Customer Support Resolution Agent",
    "question": "Your support agent sometimes calls process_refund before verifying the customer identity. This has caused refunds to be issued to the wrong account. What is the best fix?",
    "options": [
      "Add a programmatic prerequisite blocking refunds until verified customer ID exists",
      "Add more examples showing verification first",
      "Add sentiment analysis before refund decisions",
      "Tell Claude to be more careful with financial actions"
    ],
    "answer": 0,
    "explanation": "When financial or identity-related actions must happen in a required order, prompt instructions and examples are not enough. Use deterministic enforcement such as prerequisite gates or hooks."
  },
  {
    "id": 39,
    "setId": 4,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code for CI/CD",
    "question": "You need CI review output to become inline PR comments. Best output format?",
    "options": [
      "JSON with schema",
      "HTML report",
      "Markdown only",
      "Natural language summary"
    ],
    "answer": 0,
    "explanation": "Use --output-format json and --json-schema for machine-parseable CI output."
  },
  {
    "id": 40,
    "setId": 4,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Workflow",
    "question": "Claude is implementing edge-case logic inconsistently from prose instructions. What should you provide?",
    "options": [
      "A vague restatement",
      "Only screenshots",
      "2-3 concrete input/output examples",
      "Higher max tokens"
    ],
    "answer": 2,
    "explanation": "Concrete input/output examples are highly effective for clarifying transformations."
  },
  {
    "id": 41,
    "setId": 4,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Customer Support Resolution Agent",
    "question": "A refund request is above the allowed $500 limit. Which pattern gives deterministic compliance?",
    "options": [
      "Few-shot examples",
      "Model confidence threshold",
      "Tool interception hook that blocks the call",
      "System prompt rule"
    ],
    "answer": 2,
    "explanation": "Hooks can intercept and block policy-violating tool calls before execution. Prompt-only rules are probabilistic."
  },
  {
    "id": 42,
    "setId": 4,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Data Extraction",
    "question": "A source document may not contain invoice due date. How should schema handle this?",
    "options": [
      "Ask Claude to estimate",
      "Make field required so Claude must fill it",
      "Make field optional or nullable",
      "Remove validation"
    ],
    "answer": 2,
    "explanation": "Optional or nullable fields reduce hallucination when source information may be absent."
  },
  {
    "id": 43,
    "setId": 4,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Few-Shot Prompting",
    "question": "Detailed instructions still produce inconsistent issue format. What should you add?",
    "options": [
      "Remove schema",
      "Few-shot examples showing the exact desired format",
      "More generic prose",
      "A bigger title"
    ],
    "answer": 1,
    "explanation": "Few-shot examples demonstrate format and judgment better than instructions alone."
  },
  {
    "id": 44,
    "setId": 4,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Multi-Agent Research System",
    "question": "The search subagent times out but found partial results. What should it return?",
    "options": [
      "Empty successful result",
      "Structured error with failure type, attempted query, partial results, and alternatives",
      "Throw exception and terminate workflow",
      "Generic search unavailable"
    ],
    "answer": 1,
    "explanation": "Structured error context lets the coordinator retry intelligently, proceed with partial results, or annotate coverage gaps."
  },
  {
    "id": 45,
    "setId": 4,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Configuration",
    "question": "A large CLAUDE.md is becoming hard to maintain. What is a maintainable alternative?",
    "options": [
      "Put rules in package-lock.json",
      "Remove all instructions",
      "Move everything to user config",
      "Split focused rule files under .claude/rules/"
    ],
    "answer": 3,
    "explanation": ".claude/rules/ can organize topic-specific instructions and reduce monolithic configuration."
  },
  {
    "id": 46,
    "setId": 4,
    "domain": "Context Management & Reliability",
    "scenario": "Customer Support Resolution Agent",
    "question": "Two customers match the same name. What should the agent do?",
    "options": [
      "Escalate immediately without asking",
      "Ask for additional identifier",
      "Pick the most recent account",
      "Use order history to guess"
    ],
    "answer": 1,
    "explanation": "Multiple matches require clarification. Heuristic selection risks wrong-account actions."
  },
  {
    "id": 47,
    "setId": 4,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Agentic Loop Implementation",
    "question": "Claude returns stop_reason = tool_use. What should your application do next?",
    "options": [
      "Execute the requested tool and append the tool result to conversation history",
      "Ignore the tool request",
      "End the conversation",
      "Return the tool JSON to the user"
    ],
    "answer": 0,
    "explanation": "The loop continues by executing the tool, appending its result, and calling the model again."
  },
  {
    "id": 48,
    "setId": 4,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Tool Design and MCP",
    "question": "An MCP tool fails because the user lacks permission. What should the tool return?",
    "options": [
      "Empty success",
      "Retryable transient error",
      "Structured permission error with isRetryable: false",
      "Generic exception"
    ],
    "answer": 2,
    "explanation": "Permission errors are usually non-retryable and should be explicitly categorized so the agent does not waste retries."
  },
  {
    "id": 49,
    "setId": 4,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Development Workflow",
    "question": "You need test conventions to apply to all *.test.tsx files spread across many directories. Best solution?",
    "options": [
      "One root CLAUDE.md section",
      "Directory-level CLAUDE.md in every folder",
      ".claude/rules/ with glob path frontmatter",
      "Personal skill"
    ],
    "answer": 2,
    "explanation": "Path-scoped rules with glob patterns handle conventions that apply by file type across directories."
  },
  {
    "id": 50,
    "setId": 4,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Tool Access",
    "question": "The synthesis agent occasionally performs broad web searches and drifts from its job. What is the best fix?",
    "options": [
      "Increase max_tokens",
      "Ask it not to search",
      "Give it every search tool",
      "Restrict synthesis to scoped tools, such as verify_fact, and route broad searches through coordinator"
    ],
    "answer": 3,
    "explanation": "Tool access should match role specialization. Limited cross-role tools are fine for high-frequency needs."
  },
  {
    "id": 51,
    "setId": 4,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Development Workflow",
    "question": "You are migrating a large app from one frontend framework to another across 60 files. Best Claude Code mode?",
    "options": [
      "Batch mode",
      "Direct execution",
      "Bash-only mode",
      "Plan mode"
    ],
    "answer": 3,
    "explanation": "Plan mode is intended for large, multi-file changes with architectural tradeoffs and multiple valid approaches."
  },
  {
    "id": 52,
    "setId": 4,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Agentic Loop Implementation",
    "question": "An engineer wants to stop the loop whenever Claude says 'I am done' in text. What is the better stopping condition?",
    "options": [
      "Stop when stop_reason is end_turn",
      "Stop when assistant text contains done",
      "Stop after exactly three turns",
      "Stop when no tool name appears in the text"
    ],
    "answer": 0,
    "explanation": "Agentic loops should use stop_reason. tool_use means execute tools and continue; end_turn means finish."
  },
  {
    "id": 53,
    "setId": 4,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Code Review and Reliability",
    "question": "Developers dismiss many findings. You want to analyze false positive patterns. What field should structured findings include?",
    "options": [
      "developer_mood",
      "detected_pattern",
      "token_count",
      "model_name"
    ],
    "answer": 1,
    "explanation": "detected_pattern helps diagnose which constructs trigger dismissed findings."
  },
  {
    "id": 54,
    "setId": 4,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Multi-Agent Research System",
    "question": "The coordinator always routes every query through all subagents even for simple questions. What is the better design?",
    "options": [
      "Remove the coordinator",
      "Dynamic selection of subagents based on query complexity",
      "Always use the full pipeline",
      "Give the user all intermediate logs"
    ],
    "answer": 1,
    "explanation": "The coordinator should decide which subagents are needed, not blindly invoke every agent."
  },
  {
    "id": 55,
    "setId": 4,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Session Management",
    "question": "You resume a Claude Code session after modifying files that were analyzed earlier. What should you do?",
    "options": [
      "Assume Claude knows the modifications",
      "Delete all files",
      "Inform the resumed session about the specific changed files",
      "Use only old tool results"
    ],
    "answer": 2,
    "explanation": "Resumed sessions may contain stale analysis. Tell the agent which files changed for targeted re-analysis."
  },
  {
    "id": 56,
    "setId": 4,
    "domain": "Context Management & Reliability",
    "scenario": "Code Review and Reliability",
    "question": "Research report combines multiple sources but loses citations. Best fix?",
    "options": [
      "Use fewer sources",
      "Summarize citations away",
      "Ask synthesis to cite generally",
      "Require structured claim-source mappings from subagents"
    ],
    "answer": 3,
    "explanation": "Claim-source mappings preserve provenance through summarization and synthesis."
  },
  {
    "id": 57,
    "setId": 4,
    "domain": "Context Management & Reliability",
    "scenario": "Structured Data Extraction",
    "question": "For high-confidence extraction automation, aggregate accuracy is 97%, but some document types may fail badly. Best validation approach?",
    "options": [
      "Trust aggregate score",
      "Use confidence score only",
      "Disable all human review",
      "Stratified accuracy analysis by document type and field"
    ],
    "answer": 3,
    "explanation": "Aggregate accuracy can hide weak segments. Validate by document type and field before reducing human review."
  },
  {
    "id": 58,
    "setId": 4,
    "domain": "Tool Design & MCP Integration",
    "scenario": "MCP Resource Design",
    "question": "Your agent wastes many exploratory tool calls trying to discover available documentation pages. What MCP feature can reduce this?",
    "options": [
      "A generic analyze tool",
      "More retries",
      "Higher temperature",
      "MCP resources exposing a documentation catalog"
    ],
    "answer": 3,
    "explanation": "MCP resources can expose content catalogs such as docs, schemas, and issue lists so the agent can navigate intentionally."
  },
  {
    "id": 59,
    "setId": 4,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Multi-Agent Research System",
    "question": "Subagents are not seeing prior findings from other agents. Why?",
    "options": [
      "Claude Code memory is disabled",
      "MCP tools cannot share context",
      "Task tool only works sequentially",
      "Subagents do not automatically inherit parent context"
    ],
    "answer": 3,
    "explanation": "Subagent context must be explicitly passed in the prompt. They do not automatically inherit parent conversation history."
  },
  {
    "id": 60,
    "setId": 4,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Data Extraction",
    "question": "Retry is least useful when:",
    "options": [
      "Field is in wrong location",
      "JSON syntax is invalid",
      "Required information is absent from document",
      "Output format is wrong"
    ],
    "answer": 2,
    "explanation": "Retries cannot recover information that is not in the source."
  }
];
