import { reference } from "./dictionary";

export function decode(code: string): string {
  if (!code) return "";

  const getByKey = (k: string) => reference().get(k) ?? " ";
  const letters: string[] = [];
  let group = "";
  for (const signal of code) {
    if (signal !== " ") {
      group += signal;
      continue;
    }

    if (group == "") {
      group += signal;
      continue;
    }
    letters.push(group);
    group = "";
  }

  if (group) letters.push(group);

  return letters.map(getByKey).join("");
}
