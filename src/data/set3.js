export const set3 = [
  {
    "id": 1,
    "setId": 3,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Agentic Loop Implementation",
    "question": "Claude returns stop_reason = tool_use. What should your application do next?",
    "options": [
      "Execute the requested tool and append the tool result to conversation history",
      "End the conversation",
      "Ignore the tool request",
      "Return the tool JSON to the user"
    ],
    "answer": 0,
    "explanation": "The loop continues by executing the tool, appending its result, and calling the model again."
  },
  {
    "id": 2,
    "setId": 3,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code for CI/CD",
    "question": "You need CI review output to become inline PR comments. Best output format?",
    "options": [
      "JSON with schema",
      "Natural language summary",
      "Markdown only",
      "HTML report"
    ],
    "answer": 0,
    "explanation": "Use --output-format json and --json-schema for machine-parseable CI output."
  },
  {
    "id": 3,
    "setId": 3,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Data Extraction",
    "question": "You have 10,000 documents to process overnight. Latency is not important. Best API approach?",
    "options": [
      "Manual review only",
      "Synchronous API",
      "Message Batches API",
      "Claude Code interactive"
    ],
    "answer": 2,
    "explanation": "Batch processing is ideal for latency-tolerant workloads and reduces cost."
  },
  {
    "id": 4,
    "setId": 3,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Multi-Agent Research System",
    "question": "The search subagent times out but found partial results. What should it return?",
    "options": [
      "Structured error with failure type, attempted query, partial results, and alternatives",
      "Empty successful result",
      "Throw exception and terminate workflow",
      "Generic search unavailable"
    ],
    "answer": 0,
    "explanation": "Structured error context lets the coordinator retry intelligently, proceed with partial results, or annotate coverage gaps."
  },
  {
    "id": 5,
    "setId": 3,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Data Extraction",
    "question": "Tool-use JSON schema prevents which class of errors most directly?",
    "options": [
      "Semantic math errors",
      "JSON syntax errors",
      "Missing source information",
      "Source ambiguity"
    ],
    "answer": 1,
    "explanation": "Schemas eliminate syntax/shape errors, but they do not guarantee semantic correctness."
  },
  {
    "id": 6,
    "setId": 3,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Data Extraction",
    "question": "You need Claude to call extract_metadata first before any enrichment. Use:",
    "options": [
      "auto",
      "Prompt instruction only",
      "Forced tool choice for extract_metadata",
      "any"
    ],
    "answer": 2,
    "explanation": "Forced tool choice guarantees a specific named tool is called first."
  },
  {
    "id": 7,
    "setId": 3,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Development Workflow",
    "question": "You need test conventions to apply to all *.test.tsx files spread across many directories. Best solution?",
    "options": [
      "Directory-level CLAUDE.md in every folder",
      "One root CLAUDE.md section",
      ".claude/rules/ with glob path frontmatter",
      "Personal skill"
    ],
    "answer": 2,
    "explanation": "Path-scoped rules with glob patterns handle conventions that apply by file type across directories."
  },
  {
    "id": 8,
    "setId": 3,
    "domain": "Context Management & Reliability",
    "scenario": "Codebase Exploration",
    "question": "During codebase exploration, Claude starts referencing typical patterns instead of actual classes found earlier. What helps?",
    "options": [
      "Remove Grep",
      "Scratchpad files with key findings",
      "Larger font",
      "Disable tools"
    ],
    "answer": 1,
    "explanation": "Scratchpad files persist discovered facts across long sessions and reduce context degradation."
  },
  {
    "id": 9,
    "setId": 3,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Development Workflow",
    "question": "A developer stores coding standards in ~/.claude/CLAUDE.md, but teammates do not get them. Why?",
    "options": [
      "Claude Code ignores user-level files",
      "Rules must always be in YAML",
      "CLAUDE.md only works in CI",
      "User-level CLAUDE.md is not shared by version control"
    ],
    "answer": 3,
    "explanation": "User-level configuration is personal. Team standards should live at project level."
  },
  {
    "id": 10,
    "setId": 3,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Session Management",
    "question": "You want to compare two refactoring strategies from the same analysis baseline. Which session feature fits best?",
    "options": [
      "Glob",
      "Message Batches API",
      "tool_choice any",
      "fork_session"
    ],
    "answer": 3,
    "explanation": "fork_session creates independent branches from a shared baseline to explore divergent approaches."
  },
  {
    "id": 11,
    "setId": 3,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Tool Design and MCP",
    "question": "Two tools have vague descriptions: get_customer and lookup_order. Claude often chooses wrong. Best first fix?",
    "options": [
      "Improve tool descriptions with inputs, examples, boundaries, and when to use",
      "Disable one tool",
      "Add a separate classifier",
      "Merge tools immediately"
    ],
    "answer": 0,
    "explanation": "Tool descriptions are the primary signal used for tool selection. Fix ambiguity there first."
  },
  {
    "id": 12,
    "setId": 3,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Data Extraction",
    "question": "You need guaranteed valid JSON syntax from Claude. Best method?",
    "options": [
      "Use higher temperature",
      "Ask Claude to only return JSON",
      "Use tool use with JSON schema",
      "Use markdown code blocks"
    ],
    "answer": 2,
    "explanation": "Tool use with JSON schema is the most reliable way to enforce schema-compliant structured output."
  },
  {
    "id": 13,
    "setId": 3,
    "domain": "Context Management & Reliability",
    "scenario": "Code Review and Reliability",
    "question": "For long customer cases, numerical facts are getting lost in summaries. Best pattern?",
    "options": [
      "Keep persistent case facts block with amounts, IDs, dates, statuses",
      "Use vague summary",
      "Ask user again every time",
      "Remove prior messages"
    ],
    "answer": 0,
    "explanation": "Important transactional facts should be preserved in a structured facts block outside vague summaries."
  },
  {
    "id": 14,
    "setId": 3,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Review",
    "question": "You want review findings to include calibrated routing information for humans. What is useful?",
    "options": [
      "Field-level confidence or finding-level confidence, calibrated against labeled data",
      "A single vague confidence sentence",
      "No metadata",
      "Random score"
    ],
    "answer": 0,
    "explanation": "Confidence scores become useful when calibrated with labeled validation sets."
  },
  {
    "id": 15,
    "setId": 3,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Multi-Agent Research System",
    "question": "Subagents are not seeing prior findings from other agents. Why?",
    "options": [
      "Task tool only works sequentially",
      "Subagents do not automatically inherit parent context",
      "MCP tools cannot share context",
      "Claude Code memory is disabled"
    ],
    "answer": 1,
    "explanation": "Subagent context must be explicitly passed in the prompt. They do not automatically inherit parent conversation history."
  },
  {
    "id": 16,
    "setId": 3,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Agentic Loop Implementation",
    "question": "An engineer wants to stop the loop whenever Claude says 'I am done' in text. What is the better stopping condition?",
    "options": [
      "Stop when no tool name appears in the text",
      "Stop when stop_reason is end_turn",
      "Stop when assistant text contains done",
      "Stop after exactly three turns"
    ],
    "answer": 1,
    "explanation": "Agentic loops should use stop_reason. tool_use means execute tools and continue; end_turn means finish."
  },
  {
    "id": 17,
    "setId": 3,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Data Extraction",
    "question": "Retry is least useful when:",
    "options": [
      "Field is in wrong location",
      "Output format is wrong",
      "Required information is absent from document",
      "JSON syntax is invalid"
    ],
    "answer": 2,
    "explanation": "Retries cannot recover information that is not in the source."
  },
  {
    "id": 18,
    "setId": 3,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Codebase Exploration",
    "question": "Edit fails because the target text is not unique. Best fallback?",
    "options": [
      "Retry same Edit forever",
      "Use Glob",
      "Delete file",
      "Read full file, then Write corrected version"
    ],
    "answer": 3,
    "explanation": "When Edit lacks a unique anchor, Read the full file and Write the corrected full content."
  },
  {
    "id": 19,
    "setId": 3,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Multi-Agent Research System",
    "question": "You want search, document analysis, and statistics agents to run at the same time. Best approach?",
    "options": [
      "Run them one by one",
      "Use one giant prompt",
      "Emit multiple Task tool calls in one coordinator response",
      "Give all tools to one agent"
    ],
    "answer": 2,
    "explanation": "Parallel subagent spawning is done by emitting multiple Task calls in one coordinator response."
  },
  {
    "id": 20,
    "setId": 3,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Schema Design",
    "question": "An enum field may not cover future categories. What schema pattern is most flexible?",
    "options": [
      "Make every value a number",
      "Force the closest existing enum",
      "Use enum values plus other and other_detail",
      "Remove the enum"
    ],
    "answer": 2,
    "explanation": "An 'other' enum value plus detail field preserves structure while allowing extensibility."
  },
  {
    "id": 21,
    "setId": 3,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Skills",
    "question": "A skill produces verbose exploratory output and pollutes the main conversation. Which skill frontmatter option helps?",
    "options": [
      "temperature: high",
      "output: markdown",
      "context: fork",
      "mode: silent"
    ],
    "answer": 2,
    "explanation": "context: fork runs the skill in isolated subagent context and returns a summary without polluting the main session."
  },
  {
    "id": 22,
    "setId": 3,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Multi-Agent Research System",
    "question": "How should the coordinator pass findings from search and document agents to synthesis?",
    "options": [
      "Store them only in logs",
      "Include complete structured findings in the synthesis prompt",
      "Tell synthesis to check previous messages",
      "Ask synthesis to rerun all searches"
    ],
    "answer": 1,
    "explanation": "Pass complete, structured findings directly, including source metadata, so synthesis can preserve provenance."
  },
  {
    "id": 23,
    "setId": 3,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Workflow Handoff",
    "question": "A human support agent receives escalations but cannot see the Claude conversation transcript. What should Claude provide?",
    "options": [
      "A confidence score only",
      "Only the final apology",
      "Structured handoff summary with customer ID, root cause, attempted actions, and recommendation",
      "Raw token log"
    ],
    "answer": 2,
    "explanation": "Escalation handoff should preserve operational context in a structured summary."
  },
  {
    "id": 24,
    "setId": 3,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Tool Access",
    "question": "The synthesis agent occasionally performs broad web searches and drifts from its job. What is the best fix?",
    "options": [
      "Restrict synthesis to scoped tools, such as verify_fact, and route broad searches through coordinator",
      "Increase max_tokens",
      "Give it every search tool",
      "Ask it not to search"
    ],
    "answer": 0,
    "explanation": "Tool access should match role specialization. Limited cross-role tools are fine for high-frequency needs."
  },
  {
    "id": 25,
    "setId": 3,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Development Workflow",
    "question": "Your team needs a shared /review slash command available to everyone in the repo. Where should it go?",
    "options": [
      ".claude/commands/",
      "CLAUDE.md",
      ".mcp.json",
      "~/.claude/commands/"
    ],
    "answer": 0,
    "explanation": "Project-scoped slash commands belong in .claude/commands/ so they can be shared through version control."
  },
  {
    "id": 26,
    "setId": 3,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Development Workflow",
    "question": "You are migrating a large app from one frontend framework to another across 60 files. Best Claude Code mode?",
    "options": [
      "Plan mode",
      "Bash-only mode",
      "Direct execution",
      "Batch mode"
    ],
    "answer": 0,
    "explanation": "Plan mode is intended for large, multi-file changes with architectural tradeoffs and multiple valid approaches."
  },
  {
    "id": 27,
    "setId": 3,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Prompt Engineering",
    "question": "A code review prompt says 'check comments for accuracy' and produces many false positives. Better instruction?",
    "options": [
      "Flag comments only when claimed behavior contradicts actual code behavior",
      "Be conservative",
      "Review harder",
      "Find everything suspicious"
    ],
    "answer": 0,
    "explanation": "Explicit criteria reduce false positives better than vague cautionary language."
  },
  {
    "id": 28,
    "setId": 3,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Customer Support Resolution Agent",
    "question": "Your support agent sometimes calls process_refund before verifying the customer identity. This has caused refunds to be issued to the wrong account. What is the best fix?",
    "options": [
      "Add sentiment analysis before refund decisions",
      "Add more examples showing verification first",
      "Tell Claude to be more careful with financial actions",
      "Add a programmatic prerequisite blocking refunds until verified customer ID exists"
    ],
    "answer": 3,
    "explanation": "When financial or identity-related actions must happen in a required order, prompt instructions and examples are not enough. Use deterministic enforcement such as prerequisite gates or hooks."
  },
  {
    "id": 29,
    "setId": 3,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Skills",
    "question": "You want a skill to ask developers for a required argument when they invoke it without one. Which frontmatter option helps?",
    "options": [
      "tool_choice",
      "allowed-tools",
      "context: fork",
      "argument-hint"
    ],
    "answer": 3,
    "explanation": "argument-hint gives users guidance about required parameters."
  },
  {
    "id": 30,
    "setId": 3,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Tool Design and MCP",
    "question": "An agent has 20 tools and frequently misuses them. Best improvement?",
    "options": [
      "Give it more examples",
      "Rename all tools randomly",
      "Increase context window",
      "Restrict tools by agent role"
    ],
    "answer": 3,
    "explanation": "Scoped tool access reduces decision complexity and prevents cross-specialization misuse."
  },
  {
    "id": 31,
    "setId": 3,
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
    "id": 32,
    "setId": 3,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Batch Processing",
    "question": "A batch job fails for only 37 oversized documents out of 10,000. What should you resubmit?",
    "options": [
      "None of them",
      "Only successful documents",
      "Only failed documents using custom_id tracking, with modifications such as chunking",
      "All 10,000 documents unchanged"
    ],
    "answer": 2,
    "explanation": "custom_id lets you correlate failures and resubmit only failed items with fixes."
  },
  {
    "id": 33,
    "setId": 3,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Tool Design and MCP",
    "question": "For shared team MCP server config with credentials, best location and credential handling?",
    "options": [
      "CLAUDE.md with API key",
      "Source code constants",
      "~/.claude.json with hardcoded token",
      ".mcp.json with environment variable expansion"
    ],
    "answer": 3,
    "explanation": "Use project-scoped .mcp.json and environment variables such as ${GITHUB_TOKEN}"
  },
  {
    "id": 34,
    "setId": 3,
    "domain": "Context Management & Reliability",
    "scenario": "Customer Support Resolution Agent",
    "question": "Two customers match the same name. What should the agent do?",
    "options": [
      "Use order history to guess",
      "Pick the most recent account",
      "Escalate immediately without asking",
      "Ask for additional identifier"
    ],
    "answer": 3,
    "explanation": "Multiple matches require clarification. Heuristic selection risks wrong-account actions."
  },
  {
    "id": 35,
    "setId": 3,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Workflow",
    "question": "Claude is implementing edge-case logic inconsistently from prose instructions. What should you provide?",
    "options": [
      "Higher max tokens",
      "2-3 concrete input/output examples",
      "A vague restatement",
      "Only screenshots"
    ],
    "answer": 1,
    "explanation": "Concrete input/output examples are highly effective for clarifying transformations."
  },
  {
    "id": 36,
    "setId": 3,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Few-Shot Prompting",
    "question": "Detailed instructions still produce inconsistent issue format. What should you add?",
    "options": [
      "A bigger title",
      "Remove schema",
      "Few-shot examples showing the exact desired format",
      "More generic prose"
    ],
    "answer": 2,
    "explanation": "Few-shot examples demonstrate format and judgment better than instructions alone."
  },
  {
    "id": 37,
    "setId": 3,
    "domain": "Context Management & Reliability",
    "scenario": "Customer Support Resolution Agent",
    "question": "A customer says, 'I want a human now.' The issue looks simple and the agent could resolve it. What should the agent do?",
    "options": [
      "Ask why they want a human",
      "Continue solving because the issue is simple",
      "Escalate immediately",
      "Offer a discount first"
    ],
    "answer": 2,
    "explanation": "Explicit human-agent requests are a direct escalation trigger. Do not force autonomous resolution after the user asks for a human."
  },
  {
    "id": 38,
    "setId": 3,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Multi-Agent Research System",
    "question": "The coordinator always routes every query through all subagents even for simple questions. What is the better design?",
    "options": [
      "Give the user all intermediate logs",
      "Dynamic selection of subagents based on query complexity",
      "Always use the full pipeline",
      "Remove the coordinator"
    ],
    "answer": 1,
    "explanation": "The coordinator should decide which subagents are needed, not blindly invoke every agent."
  },
  {
    "id": 39,
    "setId": 3,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Codebase Exploration",
    "question": "For exploring unfamiliar codebase entry points, best initial tool?",
    "options": [
      "Process refund",
      "Write",
      "Grep",
      "Edit"
    ],
    "answer": 2,
    "explanation": "Use Grep to search contents for entry points, function names, imports, or error messages."
  },
  {
    "id": 40,
    "setId": 3,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Tool Design",
    "question": "A generic analyze_document tool handles extraction, summarization, and verification, causing inconsistent behavior. Best improvement?",
    "options": [
      "Make the description shorter",
      "Give it unrelated examples",
      "Split it into purpose-specific tools with clear contracts",
      "Remove all schemas"
    ],
    "answer": 2,
    "explanation": "Purpose-specific tools reduce ambiguity and improve tool selection."
  },
  {
    "id": 41,
    "setId": 3,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Data Extraction",
    "question": "You want Claude to definitely call some tool but let it choose which extraction schema fits the document. Use:",
    "options": [
      "tool_choice: any",
      "Forced specific tool",
      "tool_choice: auto",
      "No tools"
    ],
    "answer": 0,
    "explanation": "tool_choice: any requires a tool call while allowing the model to select among available tools."
  },
  {
    "id": 42,
    "setId": 3,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Multi-Agent Research System",
    "question": "A coordinator delegates research on 'AI in creative industries' only to subagents covering digital art, graphic design, and photography. Final report misses music and film. Root cause?",
    "options": [
      "MCP server returned bad results",
      "Coordinator decomposed scope too narrowly",
      "Web search agent failed",
      "Synthesis agent hallucinated"
    ],
    "answer": 1,
    "explanation": "The subagents completed their assigned tasks, but the coordinator failed to cover the full topic space."
  },
  {
    "id": 43,
    "setId": 3,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Built-in Tools",
    "question": "You need to find every file matching **/*.test.tsx. Which built-in Claude Code tool is most appropriate?",
    "options": [
      "Edit",
      "Glob",
      "Bash history",
      "Grep"
    ],
    "answer": 1,
    "explanation": "Glob is for matching file paths and filenames. Grep is for searching file contents."
  },
  {
    "id": 44,
    "setId": 3,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Workflow",
    "question": "Before implementing a cache invalidation feature in an unfamiliar system, what Claude Code pattern can surface missing considerations?",
    "options": [
      "Disable CLAUDE.md",
      "Delete old tests",
      "Interview pattern where Claude asks design questions first",
      "Immediate direct execution"
    ],
    "answer": 2,
    "explanation": "The interview pattern helps reveal design constraints before implementation."
  },
  {
    "id": 45,
    "setId": 3,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Code Review and Reliability",
    "question": "Developers dismiss many findings. You want to analyze false positive patterns. What field should structured findings include?",
    "options": [
      "token_count",
      "developer_mood",
      "model_name",
      "detected_pattern"
    ],
    "answer": 3,
    "explanation": "detected_pattern helps diagnose which constructs trigger dismissed findings."
  },
  {
    "id": 46,
    "setId": 3,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Code Review and Reliability",
    "question": "Claude generated code and then reviews the same code in the same session. It misses issues. Best fix?",
    "options": [
      "Increase temperature",
      "Use independent review instance",
      "Ask it to be skeptical",
      "Add more praise"
    ],
    "answer": 1,
    "explanation": "Independent review avoids self-review bias from the generation context."
  },
  {
    "id": 47,
    "setId": 3,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Customer Support Resolution Agent",
    "question": "A refund request is above the allowed $500 limit. Which pattern gives deterministic compliance?",
    "options": [
      "Tool interception hook that blocks the call",
      "System prompt rule",
      "Few-shot examples",
      "Model confidence threshold"
    ],
    "answer": 0,
    "explanation": "Hooks can intercept and block policy-violating tool calls before execution. Prompt-only rules are probabilistic."
  },
  {
    "id": 48,
    "setId": 3,
    "domain": "Tool Design & MCP Integration",
    "scenario": "Tool Design and MCP",
    "question": "An MCP tool fails because the user lacks permission. What should the tool return?",
    "options": [
      "Retryable transient error",
      "Empty success",
      "Structured permission error with isRetryable: false",
      "Generic exception"
    ],
    "answer": 2,
    "explanation": "Permission errors are usually non-retryable and should be explicitly categorized so the agent does not waste retries."
  },
  {
    "id": 49,
    "setId": 3,
    "domain": "Agentic Architecture & Orchestration",
    "scenario": "Session Management",
    "question": "You resume a Claude Code session after modifying files that were analyzed earlier. What should you do?",
    "options": [
      "Inform the resumed session about the specific changed files",
      "Assume Claude knows the modifications",
      "Use only old tool results",
      "Delete all files"
    ],
    "answer": 0,
    "explanation": "Resumed sessions may contain stale analysis. Tell the agent which files changed for targeted re-analysis."
  },
  {
    "id": 50,
    "setId": 3,
    "domain": "Context Management & Reliability",
    "scenario": "Customer Support Resolution Agent",
    "question": "The agent calls lookup_order and receives 40 fields, but only needs orderId, status, amount, returnWindow, and paymentMethod. Long conversations are degrading. What should you do?",
    "options": [
      "Summarize the whole conversation every turn",
      "Ask the user to repeat details",
      "Trim tool results before adding them to context",
      "Increase max tokens"
    ],
    "answer": 2,
    "explanation": "Verbose tool outputs consume context. Normalize and trim results before appending them so only relevant fields persist."
  },
  {
    "id": 51,
    "setId": 3,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Data Extraction",
    "question": "Extraction fails because total line items do not sum to stated total. Best next step?",
    "options": [
      "Retry with original document, failed extraction, and specific validation error",
      "Ignore and accept",
      "Remove total field",
      "Increase temperature"
    ],
    "answer": 0,
    "explanation": "Retry-with-error-feedback helps the model correct semantic validation failures when the evidence is present."
  },
  {
    "id": 52,
    "setId": 3,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code Configuration",
    "question": "A large CLAUDE.md is becoming hard to maintain. What is a maintainable alternative?",
    "options": [
      "Put rules in package-lock.json",
      "Split focused rule files under .claude/rules/",
      "Remove all instructions",
      "Move everything to user config"
    ],
    "answer": 1,
    "explanation": ".claude/rules/ can organize topic-specific instructions and reduce monolithic configuration."
  },
  {
    "id": 53,
    "setId": 3,
    "domain": "Context Management & Reliability",
    "scenario": "Code Review and Reliability",
    "question": "Research report combines multiple sources but loses citations. Best fix?",
    "options": [
      "Require structured claim-source mappings from subagents",
      "Ask synthesis to cite generally",
      "Use fewer sources",
      "Summarize citations away"
    ],
    "answer": 0,
    "explanation": "Claim-source mappings preserve provenance through summarization and synthesis."
  },
  {
    "id": 54,
    "setId": 3,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Claude Code for CI/CD",
    "question": "You have a blocking pre-merge security check. Should it use Message Batches API?",
    "options": [
      "Yes, because it is cheaper",
      "No, because batch has no guaranteed low-latency SLA",
      "Yes, if documents are small",
      "Yes, if custom_id is used"
    ],
    "answer": 1,
    "explanation": "Blocking workflows need predictable low latency. Batch can take up to 24 hours."
  },
  {
    "id": 55,
    "setId": 3,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Code Review and Reliability",
    "question": "Claude reviews 18 files in one pass and misses obvious bugs while giving uneven feedback. Best redesign?",
    "options": [
      "Ask for shorter output",
      "Increase verbosity",
      "Run same prompt three times and average",
      "Use per-file local passes plus cross-file integration pass"
    ],
    "answer": 3,
    "explanation": "Multi-pass review prevents attention dilution and allows cross-file checks separately."
  },
  {
    "id": 56,
    "setId": 3,
    "domain": "Tool Design & MCP Integration",
    "scenario": "MCP Resource Design",
    "question": "Your agent wastes many exploratory tool calls trying to discover available documentation pages. What MCP feature can reduce this?",
    "options": [
      "Higher temperature",
      "A generic analyze tool",
      "More retries",
      "MCP resources exposing a documentation catalog"
    ],
    "answer": 3,
    "explanation": "MCP resources can expose content catalogs such as docs, schemas, and issue lists so the agent can navigate intentionally."
  },
  {
    "id": 57,
    "setId": 3,
    "domain": "Claude Code Configuration & Workflows",
    "scenario": "Claude Code for CI/CD",
    "question": "Claude Code hangs in CI because it waits for input. Correct fix?",
    "options": [
      "Use claude --batch",
      "Use CLAUDE_HEADLESS=true",
      "Use claude -p '...'",
      "Redirect stdin only"
    ],
    "answer": 2,
    "explanation": "The -p / --print flag runs Claude Code in non-interactive mode for automation."
  },
  {
    "id": 58,
    "setId": 3,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Structured Data Extraction",
    "question": "A source document may not contain invoice due date. How should schema handle this?",
    "options": [
      "Remove validation",
      "Make field optional or nullable",
      "Ask Claude to estimate",
      "Make field required so Claude must fill it"
    ],
    "answer": 1,
    "explanation": "Optional or nullable fields reduce hallucination when source information may be absent."
  },
  {
    "id": 59,
    "setId": 3,
    "domain": "Context Management & Reliability",
    "scenario": "Code Review and Reliability",
    "question": "Two credible sources report different statistics from different years. Best handling?",
    "options": [
      "Average them",
      "Pick newer one silently",
      "Preserve both with source and date context",
      "Pick larger number"
    ],
    "answer": 2,
    "explanation": "Conflicts should be annotated with source/date context, not arbitrarily resolved."
  },
  {
    "id": 60,
    "setId": 3,
    "domain": "Prompt Engineering & Structured Output",
    "scenario": "Code Review and Reliability",
    "question": "Review prompts say 'be conservative,' but false positives remain high. Better approach?",
    "options": [
      "Ask Claude to lower confidence",
      "Use longer output",
      "Add explicit report/skip criteria with concrete examples",
      "Remove all examples"
    ],
    "answer": 2,
    "explanation": "Specific criteria beat vague confidence instructions. Define what to report and what to skip."
  }
];
