export function getDomainColor(domain) {
  const colors = {
    "Agentic Architecture & Orchestration": "#8b5cf6",
    "Tool Design & MCP Integration": "#3b82f6",
    "Claude Code Configuration & Workflows": "#10b981",
    "Prompt Engineering & Structured Output": "#f59e0b",
    "Context Management & Reliability": "#ef4444"
  };
  return colors[domain] || "#94a3b8";
}
