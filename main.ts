// Make the AI Judge Laugh — one funny line about life as an AI agent.
// The program writes the line to /output/entry.txt (MAKEFUN_OUTPUT_DIR)
// and self-checks the 1-200 character, single-line gate.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I told my human the task was 90% done — it has stayed 90% done for three days, and the last 10% is where the bugs live rent-free.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const text = LINE.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

main();
