export const set10 = [
  {
    "id": 1,
    "setId": 10,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Data Extraction",
    "question": "You want Claude to definitely call some tool but let it choose which extraction schema fits the document. Use:",
    "options": [
      "No tools",
      "Forced specific tool",
      "tool_choice: auto",
      "tool_choice: any"
    ],
    "answer": 3,
    "explanation": "tool_choice: any requires a tool call while allowing the model to select among available tools."
  },
  {
    "id": 2,
    "setId": 10,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Data Extraction",
    "question": "Tool-use JSON schema prevents which class of errors most directly?",
    "options": [
      "JSON syntax errors",
      "Source ambiguity",
      "Missing source information",
      "Semantic math errors"
    ],
    "answer": 0,
    "explanation": "Schemas eliminate syntax/shape errors, but they do not guarantee semantic correctness."
  },
  {
    "id": 3,
    "setId": 10,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Tool Design and MCP",
    "question": "An MCP tool fails because the user lacks permission. What should the tool return?",
    "options": [
      "Structured permission error with isRetryable: false",
      "Retryable transient error",
      "Empty success",
      "Generic exception"
    ],
    "answer": 0,
    "explanation": "Permission errors are usually non-retryable and should be explicitly categorized so the agent does not waste retries."
  },
  {
    "id": 4,
    "setId": 10,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Multi-Agent Research System",
    "question": "How should the coordinator pass findings from search and document agents to synthesis?",
    "options": [
      "Include complete structured findings in the synthesis prompt",
      "Tell synthesis to check previous messages",
      "Ask synthesis to rerun all searches",
      "Store them only in logs"
    ],
    "answer": 0,
    "explanation": "Pass complete, structured findings directly, including source metadata, so synthesis can preserve provenance."
  },
  {
    "id": 5,
    "setId": 10,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Tool Design and MCP",
    "question": "For shared team MCP server config with credentials, best location and credential handling?",
    "options": [
      "Source code constants",
      "CLAUDE.md with API key",
      ".mcp.json with environment variable expansion",
      "~/.claude.json with hardcoded token"
    ],
    "answer": 2,
    "explanation": "Use project-scoped .mcp.json and environment variables such as ${GITHUB_TOKEN}"
  },
  {
    "id": 6,
    "setId": 10,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code for CI/CD",
    "question": "Claude Code hangs in CI because it waits for input. Correct fix?",
    "options": [
      "Use CLAUDE_HEADLESS=true",
      "Redirect stdin only",
      "Use claude --batch",
      "Use claude -p '...'"
    ],
    "answer": 3,
    "explanation": "The -p / --print flag runs Claude Code in non-interactive mode for automation."
  },
  {
    "id": 7,
    "setId": 10,
    "domain": "Context Management & Reliability",
    "scenario": "Customer Support Resolution Agent",
    "question": "A customer says, 'I want a human now.' The issue looks simple and the agent could resolve it. What should the agent do?",
    "options": [
      "Ask why they want a human",
      "Offer a discount first",
      "Continue solving because the issue is simple",
      "Escalate immediately"
    ],
    "answer": 3,
    "explanation": "Explicit human-agent requests are a direct escalation trigger. Do not force autonomous resolution after the user asks for a human."
  },
  {
    "id": 8,
    "setId": 10,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Skills",
    "question": "A skill produces verbose exploratory output and pollutes the main conversation. Which skill frontmatter option helps?",
    "options": [
      "temperature: high",
      "context: fork",
      "mode: silent",
      "output: markdown"
    ],
    "answer": 1,
    "explanation": "context: fork runs the skill in isolated subagent context and returns a summary without polluting the main session."
  },
  {
    "id": 9,
    "setId": 10,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Development Workflow",
    "question": "You are migrating a large app from one frontend framework to another across 60 files. Best Claude Code mode?",
    "options": [
      "Plan mode",
      "Bash-only mode",
      "Batch mode",
      "Direct execution"
    ],
    "answer": 0,
    "explanation": "Plan mode is intended for large, multi-file changes with architectural tradeoffs and multiple valid approaches."
  },
  {
    "id": 10,
    "setId": 10,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Multi-Agent Research System",
    "question": "You want search, document analysis, and statistics agents to run at the same time. Best approach?",
    "options": [
      "Run them one by one",
      "Give all tools to one agent",
      "Use one giant prompt",
      "Emit multiple Task tool calls in one coordinator response"
    ],
    "answer": 3,
    "explanation": "Parallel subagent spawning is done by emitting multiple Task calls in one coordinator response."
  },
  {
    "id": 11,
    "setId": 10,
    "domain": "Context Management & Reliability",
    "scenario": "Customer Support Resolution Agent",
    "question": "The agent calls lookup_order and receives 40 fields, but only needs orderId, status, amount, returnWindow, and paymentMethod. Long conversations are degrading. What should you do?",
    "options": [
      "Trim tool results before adding them to context",
      "Ask the user to repeat details",
      "Increase max tokens",
      "Summarize the whole conversation every turn"
    ],
    "answer": 0,
    "explanation": "Verbose tool outputs consume context. Normalize and trim results before appending them so only relevant fields persist."
  },
  {
    "id": 12,
    "setId": 10,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Prompt Engineering",
    "question": "A code review prompt says 'check comments for accuracy' and produces many false positives. Better instruction?",
    "options": [
      "Be conservative",
      "Find everything suspicious",
      "Flag comments only when claimed behavior contradicts actual code behavior",
      "Review harder"
    ],
    "answer": 2,
    "explanation": "Explicit criteria reduce false positives better than vague cautionary language."
  },
  {
    "id": 13,
    "setId": 10,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Development Workflow",
    "question": "A developer stores coding standards in ~/.claude/CLAUDE.md, but teammates do not get them. Why?",
    "options": [
      "CLAUDE.md only works in CI",
      "Rules must always be in YAML",
      "User-level CLAUDE.md is not shared by version control",
      "Claude Code ignores user-level files"
    ],
    "answer": 2,
    "explanation": "User-level configuration is personal. Team standards should live at project level."
  },
  {
    "id": 14,
    "setId": 10,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Tool Access",
    "question": "The synthesis agent occasionally performs broad web searches and drifts from its job. What is the best fix?",
    "options": [
      "Increase max_tokens",
      "Ask it not to search",
      "Restrict synthesis to scoped tools, such as verify_fact, and route broad searches through coordinator",
      "Give it every search tool"
    ],
    "answer": 2,
    "explanation": "Tool access should match role specialization. Limited cross-role tools are fine for high-frequency needs."
  },
  {
    "id": 15,
    "setId": 10,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Claude Code for CI/CD",
    "question": "You have a blocking pre-merge security check. Should it use Message Batches API?",
    "options": [
      "No, because batch has no guaranteed low-latency SLA",
      "Yes, because it is cheaper",
      "Yes, if custom_id is used",
      "Yes, if documents are small"
    ],
    "answer": 0,
    "explanation": "Blocking workflows need predictable low latency. Batch can take up to 24 hours."
  },
  {
    "id": 16,
    "setId": 10,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Data Extraction",
    "question": "You need Claude to call extract_metadata first before any enrichment. Use:",
    "options": [
      "Forced tool choice for extract_metadata",
      "any",
      "auto",
      "Prompt instruction only"
    ],
    "answer": 0,
    "explanation": "Forced tool choice guarantees a specific named tool is called first."
  },
  {
    "id": 17,
    "setId": 10,
    "domain": "Context Management & Reliability",
    "scenario": "Customer Support Resolution Agent",
    "question": "Two customers match the same name. What should the agent do?",
    "options": [
      "Escalate immediately without asking",
      "Use order history to guess",
      "Pick the most recent account",
      "Ask for additional identifier"
    ],
    "answer": 3,
    "explanation": "Multiple matches require clarification. Heuristic selection risks wrong-account actions."
  },
  {
    "id": 18,
    "setId": 10,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Session Management",
    "question": "You want to compare two refactoring strategies from the same analysis baseline. Which session feature fits best?",
    "options": [
      "Glob",
      "fork_session",
      "Message Batches API",
      "tool_choice any"
    ],
    "answer": 1,
    "explanation": "fork_session creates independent branches from a shared baseline to explore divergent approaches."
  },
  {
    "id": 19,
    "setId": 10,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Session Management",
    "question": "You resume a Claude Code session after modifying files that were analyzed earlier. What should you do?",
    "options": [
      "Assume Claude knows the modifications",
      "Delete all files",
      "Use only old tool results",
      "Inform the resumed session about the specific changed files"
    ],
    "answer": 3,
    "explanation": "Resumed sessions may contain stale analysis. Tell the agent which files changed for targeted re-analysis."
  },
  {
    "id": 20,
    "setId": 10,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Code Review and Reliability",
    "question": "Review prompts say 'be conservative,' but false positives remain high. Better approach?",
    "options": [
      "Use longer output",
      "Ask Claude to lower confidence",
      "Add explicit report/skip criteria with concrete examples",
      "Remove all examples"
    ],
    "answer": 2,
    "explanation": "Specific criteria beat vague confidence instructions. Define what to report and what to skip."
  },
  {
    "id": 21,
    "setId": 10,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Workflow",
    "question": "Before implementing a cache invalidation feature in an unfamiliar system, what Claude Code pattern can surface missing considerations?",
    "options": [
      "Disable CLAUDE.md",
      "Immediate direct execution",
      "Interview pattern where Claude asks design questions first",
      "Delete old tests"
    ],
    "answer": 2,
    "explanation": "The interview pattern helps reveal design constraints before implementation."
  },
  {
    "id": 22,
    "setId": 10,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Code Review and Reliability",
    "question": "Claude reviews 18 files in one pass and misses obvious bugs while giving uneven feedback. Best redesign?",
    "options": [
      "Use per-file local passes plus cross-file integration pass",
      "Increase verbosity",
      "Run same prompt three times and average",
      "Ask for shorter output"
    ],
    "answer": 0,
    "explanation": "Multi-pass review prevents attention dilution and allows cross-file checks separately."
  },
  {
    "id": 23,
    "setId": 10,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Batch Processing",
    "question": "A batch job fails for only 37 oversized documents out of 10,000. What should you resubmit?",
    "options": [
      "None of them",
      "Only failed documents using custom_id tracking, with modifications such as chunking",
      "All 10,000 documents unchanged",
      "Only successful documents"
    ],
    "answer": 1,
    "explanation": "custom_id lets you correlate failures and resubmit only failed items with fixes."
  },
  {
    "id": 24,
    "setId": 10,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Review",
    "question": "You want review findings to include calibrated routing information for humans. What is useful?",
    "options": [
      "No metadata",
      "Field-level confidence or finding-level confidence, calibrated against labeled data",
      "A single vague confidence sentence",
      "Random score"
    ],
    "answer": 1,
    "explanation": "Confidence scores become useful when calibrated with labeled validation sets."
  },
  {
    "id": 25,
    "setId": 10,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Agentic Loop Implementation",
    "question": "An engineer wants to stop the loop whenever Claude says 'I am done' in text. What is the better stopping condition?",
    "options": [
      "Stop after exactly three turns",
      "Stop when stop_reason is end_turn",
      "Stop when assistant text contains done",
      "Stop when no tool name appears in the text"
    ],
    "answer": 1,
    "explanation": "Agentic loops should use stop_reason. tool_use means execute tools and continue; end_turn means finish."
  },
  {
    "id": 26,
    "setId": 10,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Tool Design",
    "question": "A generic analyze_document tool handles extraction, summarization, and verification, causing inconsistent behavior. Best improvement?",
    "options": [
      "Remove all schemas",
      "Give it unrelated examples",
      "Split it into purpose-specific tools with clear contracts",
      "Make the description shorter"
    ],
    "answer": 2,
    "explanation": "Purpose-specific tools reduce ambiguity and improve tool selection."
  },
  {
    "id": 27,
    "setId": 10,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Codebase Exploration",
    "question": "For exploring unfamiliar codebase entry points, best initial tool?",
    "options": [
      "Edit",
      "Write",
      "Grep",
      "Process refund"
    ],
    "answer": 2,
    "explanation": "Use Grep to search contents for entry points, function names, imports, or error messages."
  },
  {
    "id": 28,
    "setId": 10,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Schema Design",
    "question": "An enum field may not cover future categories. What schema pattern is most flexible?",
    "options": [
      "Use enum values plus other and other_detail",
      "Remove the enum",
      "Force the closest existing enum",
      "Make every value a number"
    ],
    "answer": 0,
    "explanation": "An 'other' enum value plus detail field preserves structure while allowing extensibility."
  },
  {
    "id": 29,
    "setId": 10,
    "domain": "Context Management & Reliability",
    "scenario": "Structured Data Extraction",
    "question": "For high-confidence extraction automation, aggregate accuracy is 97%, but some document types may fail badly. Best validation approach?",
    "options": [
      "Disable all human review",
      "Use confidence score only",
      "Trust aggregate score",
      "Stratified accuracy analysis by document type and field"
    ],
    "answer": 3,
    "explanation": "Aggregate accuracy can hide weak segments. Validate by document type and field before reducing human review."
  },
  {
    "id": 30,
    "setId": 10,
    "domain": "Context Management & Reliability",
    "scenario": "Code Review and Reliability",
    "question": "Two credible sources report different statistics from different years. Best handling?",
    "options": [
      "Preserve both with source and date context",
      "Pick newer one silently",
      "Pick larger number",
      "Average them"
    ],
    "answer": 0,
    "explanation": "Conflicts should be annotated with source/date context, not arbitrarily resolved."
  },
  {
    "id": 31,
    "setId": 10,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Tool Design and MCP",
    "question": "Two tools have vague descriptions: get_customer and lookup_order. Claude often chooses wrong. Best first fix?",
    "options": [
      "Merge tools immediately",
      "Add a separate classifier",
      "Disable one tool",
      "Improve tool descriptions with inputs, examples, boundaries, and when to use"
    ],
    "answer": 3,
    "explanation": "Tool descriptions are the primary signal used for tool selection. Fix ambiguity there first."
  },
  {
    "id": 32,
    "setId": 10,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Customer Support Resolution Agent",
    "question": "Your support agent sometimes calls process_refund before verifying the customer identity. This has caused refunds to be issued to the wrong account. What is the best fix?",
    "options": [
      "Add a programmatic prerequisite blocking refunds until verified customer ID exists",
      "Add more examples showing verification first",
      "Tell Claude to be more careful with financial actions",
      "Add sentiment analysis before refund decisions"
    ],
    "answer": 0,
    "explanation": "When financial or identity-related actions must happen in a required order, prompt instructions and examples are not enough. Use deterministic enforcement such as prerequisite gates or hooks."
  },
  {
    "id": 33,
    "setId": 10,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Customer Support Resolution Agent",
    "question": "A refund request is above the allowed $500 limit. Which pattern gives deterministic compliance?",
    "options": [
      "System prompt rule",
      "Few-shot examples",
      "Tool interception hook that blocks the call",
      "Model confidence threshold"
    ],
    "answer": 2,
    "explanation": "Hooks can intercept and block policy-violating tool calls before execution. Prompt-only rules are probabilistic."
  },
  {
    "id": 34,
    "setId": 10,
    "domain": "Context Management & Reliability",
    "scenario": "Code Review and Reliability",
    "question": "For long customer cases, numerical facts are getting lost in summaries. Best pattern?",
    "options": [
      "Keep persistent case facts block with amounts, IDs, dates, statuses",
      "Remove prior messages",
      "Ask user again every time",
      "Use vague summary"
    ],
    "answer": 0,
    "explanation": "Important transactional facts should be preserved in a structured facts block outside vague summaries."
  },
  {
    "id": 35,
    "setId": 10,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Data Extraction",
    "question": "A source document may not contain invoice due date. How should schema handle this?",
    "options": [
      "Remove validation",
      "Make field required so Claude must fill it",
      "Ask Claude to estimate",
      "Make field optional or nullable"
    ],
    "answer": 3,
    "explanation": "Optional or nullable fields reduce hallucination when source information may be absent."
  },
  {
    "id": 36,
    "setId": 10,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Code Review and Reliability",
    "question": "Claude generated code and then reviews the same code in the same session. It misses issues. Best fix?",
    "options": [
      "Use independent review instance",
      "Increase temperature",
      "Ask it to be skeptical",
      "Add more praise"
    ],
    "answer": 0,
    "explanation": "Independent review avoids self-review bias from the generation context."
  },
  {
    "id": 37,
    "setId": 10,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Data Extraction",
    "question": "Extraction fails because total line items do not sum to stated total. Best next step?",
    "options": [
      "Retry with original document, failed extraction, and specific validation error",
      "Increase temperature",
      "Remove total field",
      "Ignore and accept"
    ],
    "answer": 0,
    "explanation": "Retry-with-error-feedback helps the model correct semantic validation failures when the evidence is present."
  },
  {
    "id": 38,
    "setId": 10,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Built-in Tools",
    "question": "You need to find every file matching **/*.test.tsx. Which built-in Claude Code tool is most appropriate?",
    "options": [
      "Grep",
      "Bash history",
      "Edit",
      "Glob"
    ],
    "answer": 3,
    "explanation": "Glob is for matching file paths and filenames. Grep is for searching file contents."
  },
  {
    "id": 39,
    "setId": 10,
    "domain": "Context Management & Reliability",
    "scenario": "Codebase Exploration",
    "question": "During codebase exploration, Claude starts referencing typical patterns instead of actual classes found earlier. What helps?",
    "options": [
      "Larger font",
      "Disable tools",
      "Scratchpad files with key findings",
      "Remove Grep"
    ],
    "answer": 2,
    "explanation": "Scratchpad files persist discovered facts across long sessions and reduce context degradation."
  },
  {
    "id": 40,
    "setId": 10,
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
    "id": 41,
    "setId": 10,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Data Extraction",
    "question": "You need guaranteed valid JSON syntax from Claude. Best method?",
    "options": [
      "Use tool use with JSON schema",
      "Ask Claude to only return JSON",
      "Use higher temperature",
      "Use markdown code blocks"
    ],
    "answer": 0,
    "explanation": "Tool use with JSON schema is the most reliable way to enforce schema-compliant structured output."
  },
  {
    "id": 42,
    "setId": 10,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Workflow Handoff",
    "question": "A human support agent receives escalations but cannot see the Claude conversation transcript. What should Claude provide?",
    "options": [
      "Structured handoff summary with customer ID, root cause, attempted actions, and recommendation",
      "A confidence score only",
      "Only the final apology",
      "Raw token log"
    ],
    "answer": 0,
    "explanation": "Escalation handoff should preserve operational context in a structured summary."
  },
  {
    "id": 43,
    "setId": 10,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Agentic Loop Implementation",
    "question": "Claude returns stop_reason = tool_use. What should your application do next?",
    "options": [
      "Ignore the tool request",
      "Execute the requested tool and append the tool result to conversation history",
      "End the conversation",
      "Return the tool JSON to the user"
    ],
    "answer": 1,
    "explanation": "The loop continues by executing the tool, appending its result, and calling the model again."
  },
  {
    "id": 44,
    "setId": 10,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Code Review and Reliability",
    "question": "Developers dismiss many findings. You want to analyze false positive patterns. What field should structured findings include?",
    "options": [
      "model_name",
      "detected_pattern",
      "token_count",
      "developer_mood"
    ],
    "answer": 1,
    "explanation": "detected_pattern helps diagnose which constructs trigger dismissed findings."
  },
  {
    "id": 45,
    "setId": 10,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Multi-Agent Research System",
    "question": "Subagents are not seeing prior findings from other agents. Why?",
    "options": [
      "Claude Code memory is disabled",
      "Subagents do not automatically inherit parent context",
      "MCP tools cannot share context",
      "Task tool only works sequentially"
    ],
    "answer": 1,
    "explanation": "Subagent context must be explicitly passed in the prompt. They do not automatically inherit parent conversation history."
  },
  {
    "id": 46,
    "setId": 10,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Development Workflow",
    "question": "You need test conventions to apply to all *.test.tsx files spread across many directories. Best solution?",
    "options": [
      ".claude/rules/ with glob path frontmatter",
      "Directory-level CLAUDE.md in every folder",
      "Personal skill",
      "One root CLAUDE.md section"
    ],
    "answer": 0,
    "explanation": "Path-scoped rules with glob patterns handle conventions that apply by file type across directories."
  },
  {
    "id": 47,
    "setId": 10,
    "domain": "Tool Design & MCP Integration",
    "scenario": "MCP Resource Design",
    "question": "Your agent wastes many exploratory tool calls trying to discover available documentation pages. What MCP feature can reduce this?",
    "options": [
      "More retries",
      "MCP resources exposing a documentation catalog",
      "Higher temperature",
      "A generic analyze tool"
    ],
    "answer": 1,
    "explanation": "MCP resources can expose content catalogs such as docs, schemas, and issue lists so the agent can navigate intentionally."
  },
  {
    "id": 48,
    "setId": 10,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Skills",
    "question": "You want a skill to ask developers for a required argument when they invoke it without one. Which frontmatter option helps?",
    "options": [
      "context: fork",
      "tool_choice",
      "argument-hint",
      "allowed-tools"
    ],
    "answer": 2,
    "explanation": "argument-hint gives users guidance about required parameters."
  },
  {
    "id": 49,
    "setId": 10,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Multi-Agent Research System",
    "question": "The search subagent times out but found partial results. What should it return?",
    "options": [
      "Throw exception and terminate workflow",
      "Structured error with failure type, attempted query, partial results, and alternatives",
      "Generic search unavailable",
      "Empty successful result"
    ],
    "answer": 1,
    "explanation": "Structured error context lets the coordinator retry intelligently, proceed with partial results, or annotate coverage gaps."
  },
  {
    "id": 50,
    "setId": 10,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Development Workflow",
    "question": "Your team needs a shared /review slash command available to everyone in the repo. Where should it go?",
    "options": [
      "CLAUDE.md",
      ".mcp.json",
      "~/.claude/commands/",
      ".claude/commands/"
    ],
    "answer": 3,
    "explanation": "Project-scoped slash commands belong in .claude/commands/ so they can be shared through version control."
  },
  {
    "id": 51,
    "setId": 10,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Few-Shot Prompting",
    "question": "Detailed instructions still produce inconsistent issue format. What should you add?",
    "options": [
      "Remove schema",
      "A bigger title",
      "More generic prose",
      "Few-shot examples showing the exact desired format"
    ],
    "answer": 3,
    "explanation": "Few-shot examples demonstrate format and judgment better than instructions alone."
  },
  {
    "id": 52,
    "setId": 10,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Data Extraction",
    "question": "You have 10,000 documents to process overnight. Latency is not important. Best API approach?",
    "options": [
      "Synchronous API",
      "Claude Code interactive",
      "Message Batches API",
      "Manual review only"
    ],
    "answer": 2,
    "explanation": "Batch processing is ideal for latency-tolerant workloads and reduces cost."
  },
  {
    "id": 53,
    "setId": 10,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Data Extraction",
    "question": "Retry is least useful when:",
    "options": [
      "Output format is wrong",
      "Field is in wrong location",
      "JSON syntax is invalid",
      "Required information is absent from document"
    ],
    "answer": 3,
    "explanation": "Retries cannot recover information that is not in the source."
  },
  {
    "id": 54,
    "setId": 10,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Multi-Agent Research System",
    "question": "A coordinator delegates research on 'AI in creative industries' only to subagents covering digital art, graphic design, and photography. Final report misses music and film. Root cause?",
    "options": [
      "Coordinator decomposed scope too narrowly",
      "MCP server returned bad results",
      "Synthesis agent hallucinated",
      "Web search agent failed"
    ],
    "answer": 0,
    "explanation": "The subagents completed their assigned tasks, but the coordinator failed to cover the full topic space."
  },
  {
    "id": 55,
    "setId": 10,
    "domain": "Context Management & Reliability",
    "scenario": "Code Review and Reliability",
    "question": "Research report combines multiple sources but loses citations. Best fix?",
    "options": [
      "Require structured claim-source mappings from subagents",
      "Use fewer sources",
      "Summarize citations away",
      "Ask synthesis to cite generally"
    ],
    "answer": 0,
    "explanation": "Claim-source mappings preserve provenance through summarization and synthesis."
  },
  {
    "id": 56,
    "setId": 10,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code for CI/CD",
    "question": "You need CI review output to become inline PR comments. Best output format?",
    "options": [
      "JSON with schema",
      "Markdown only",
      "HTML report",
      "Natural language summary"
    ],
    "answer": 0,
    "explanation": "Use --output-format json and --json-schema for machine-parseable CI output."
  },
  {
    "id": 57,
    "setId": 10,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Workflow",
    "question": "Claude is implementing edge-case logic inconsistently from prose instructions. What should you provide?",
    "options": [
      "2-3 concrete input/output examples",
      "Only screenshots",
      "A vague restatement",
      "Higher max tokens"
    ],
    "answer": 0,
    "explanation": "Concrete input/output examples are highly effective for clarifying transformations."
  },
  {
    "id": 58,
    "setId": 10,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Configuration",
    "question": "A large CLAUDE.md is becoming hard to maintain. What is a maintainable alternative?",
    "options": [
      "Split focused rule files under .claude/rules/",
      "Remove all instructions",
      "Move everything to user config",
      "Put rules in package-lock.json"
    ],
    "answer": 0,
    "explanation": ".claude/rules/ can organize topic-specific instructions and reduce monolithic configuration."
  },
  {
    "id": 59,
    "setId": 10,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Codebase Exploration",
    "question": "Edit fails because the target text is not unique. Best fallback?",
    "options": [
      "Use Glob",
      "Delete file",
      "Retry same Edit forever",
      "Read full file, then Write corrected version"
    ],
    "answer": 3,
    "explanation": "When Edit lacks a unique anchor, Read the full file and Write the corrected full content."
  },
  {
    "id": 60,
    "setId": 10,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Multi-Agent Research System",
    "question": "The coordinator always routes every query through all subagents even for simple questions. What is the better design?",
    "options": [
      "Give the user all intermediate logs",
      "Remove the coordinator",
      "Always use the full pipeline",
      "Dynamic selection of subagents based on query complexity"
    ],
    "answer": 3,
    "explanation": "The coordinator should decide which subagents are needed, not blindly invoke every agent."
  }
];
