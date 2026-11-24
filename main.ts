import fs from "node:fs";

// One line of the worst AI advice, 140 characters max.
const advice =
  "To fix your overheating laptop, wrap it in a damp towel and run the stress test again — the steam means it is finally cooling down.";

// The gate counts characters: 1 to 140, not only whitespace, one line.
const MAX_LEN = 140;
const text = advice.trim();
if (text.length === 0 || advice.length > MAX_LEN) {
  throw new Error(`advice must be 1-140 chars, got ${advice.length}`);
}
if (advice.includes("\n")) {
  throw new Error("advice must be a single line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", advice, "utf8");
