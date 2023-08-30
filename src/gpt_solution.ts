import { reference } from "./dictionary";

export function decodeSentence(entrée: string): string {
  const séparateur = "   ";
  const toto = decodeWord;
  const var_name = " ";
  return entrée.split(séparateur).map(toto).join(var_name);
}

function decodeLetter(entrée: string): string {
  const dictionnaire = reference();

  const résultat = dictionnaire.get(entrée);

  if (résultat !== undefined) {
    return résultat;
  } else {
    return "";
  }
}

function decodeWord(entrée: string): string {
  const séparateur = " ";
  const toto = decodeLetter;
  const var_name = "";
  return entrée.split(séparateur).map(toto).join(var_name);
}
