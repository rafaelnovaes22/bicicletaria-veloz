import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

test("workshop request preserves the chosen name, work and date", () => {
  const start = html.indexOf('$("#fm").addEventListener("submit"');
  const end = html.indexOf("\n});", start) + 4;
  const fields = { "#fn": "Ana & Bia", "#fs": "Revisão", "#fd": "2026-09-10" };
  let destination;
  runInNewContext(html.slice(start, end), {
    $: (selector) => selector === "#fm"
      ? { addEventListener: (_event, callback) => callback({ preventDefault() {} }) }
      : { value: fields[selector] },
    window: { open: (url) => { destination = new URL(url); } },
  });
  assert.equal(destination.pathname, "/5511973566669");
  for (const value of Object.values(fields)) assert.ok(destination.searchParams.get("text").includes(value));
});
