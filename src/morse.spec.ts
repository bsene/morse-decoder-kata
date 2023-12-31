import { describe, expect, test } from "vitest";
import { decodeSentence } from "./gpt_solution";

describe("Morse decoder specifications", () => {
  test.each([
    ["", ""],
    ["--", "M"],
    ["...-", "V"],
    [".--.", "P"],
    ["--- -.-", "OK"],
    ["-. ---", "NO"],
    [".. -", "IT"],
    ["..--- ...-- ..--- ...--", "2323"],
    ["----. ....-", "94"],
    ["-.-- --- ..-", "YOU"],
    [".--- .- ...- .- ... -.-. .-. .. .--. -", "JAVASCRIPT"],
    [".... . -..-", "HEX"],
    [".- -... .-.. .", "ABLE"],
    [".- --. . -..", "AGED"],
    [
      "- .... .   --- -... .--- . -.-. -   .. - . .-. .- -... .-.. .   .. -. .... . .-. .. - ...",
      "THE OBJECT ITERABLE INHERITS",
    ],
    [
      "-- ...- -.-.   -.. . -.-. --- ..- .--. .-.. . ...   ...- .. . .-- ...   .- -. -..   -- --- -.. . .-.. ...   -... -.--   . ... - .- -... .-.. .. ... .... .. -. --.   .-   ... ..- -... ... -.-. .-. .. -... .   -. --- - .. ..-. -.--   .--. .-. --- - --- -.-. --- .-..   -... . - .-- . . -.   - .... . -- .-.-.-",
      "MVC DECOUPLES VIEWS AND MODELS BY ESTABLISHING A SUBSCRIBE NOTIFY PROTOCOL BETWEEN THEM.",
    ],
    [
      ".... .   .-- .- ...   .---- ----- ----- -..-. .---- ----- -----   .. -. - ---   ..-. .- ... - .. -. --.   .-- .. - ....   .... . .-.   ..- -. - .. .-..   .... .   ..- -. -.. . .-. ... - --- --- -..   - .... .- -   -- . .- -. -   .... .   -.-. --- ..- .-.. -.. -. .----. -   . .- - .-.-.-",
      "HE WAS 100/100 INTO FASTING WITH HER UNTIL HE UNDERSTOOD THAT MEANT HE COULDN'T EAT.",
    ],
    [
      ".-- .... . -.   -- --- -. . -.--   .-- .- ...   - .. --. .... - --..--   .... . .----. -..   --. . -   .... .. ...   .-.. ..- -. -.-. ....   -- --- -. . -.--   ..-. .-. --- --   - .... .   .-.. --- -.-. .- .-..   .-- .. ... .... .. -. --.   .-- . .-.. .-.. .-.-.-",
      "WHEN MONEY WAS TIGHT, HE'D GET HIS LUNCH MONEY FROM THE LOCAL WISHING WELL.",
    ],
    ["... --- ...", "SOS"],
  ])("decode morse input", (input: string, expected: string) => {
    expect(decodeSentence(input)).toBe(expected);
  });
});
