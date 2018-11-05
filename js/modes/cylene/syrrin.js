import {Charmap, Transliteration} from '../../transliterate.js';

export default {
  name: "Syrrin",
  category: "Cylenië",
  font: "'Syrrin Book', Geopoeia",
  charmap: new Charmap([
    "ā", "æ", "ǣ", "ē", "ī", "ō", "w̄"
  ]),
  transliteration: new Transliteration([
    // Punctuation
    [".", "\uE1F0"], [",", "\uE1F1"],

    // Numerals
    ["0", "\uE1F8"], ["1", "\uE1F9"], ["2", "\uE1FA"], ["3", "\uE1FB"],
    ["4", "\uE1FC"], ["5", "\uE1FD"], ["@", "\uE1FE"],

    // Letters
    ["a", "\uE1C0"], ["ā", "\uE1C1"], ["æ", "\uE1C2"], ["ǣ", "\uE1C3"],
    ["b", "\uE1C4"], ["v", "\uE1C5"], ["d", "\uE1C6"], ["dh", "\uE1C7"],
    ["e", "\uE1C8"], ["ē", "\uE1C9"], ["g", "\uE1CA"], ["gh", "\uE1CB"],
    ["gw", "\uE1CC"], ["ghw", "\uE1CD"], ["i", "\uE1CE"], ["ī", "\uE1CF"],
    ["k", "\uE1D0"], ["kh", "\uE1D1"],["kw", "\uE1D2"], ["khw", "\uE1D3"],
    ["'", "\uE1D4"], ["y", "\uE1D5"], ["l", "\uE1D6"], ["r", "\uE1D7"],
    ["o", "\uE1D8"], ["ō", "\uE1D9"], ["u", "\uE1DA"], ["p", "\uE1DB"],
    ["f", "\uE1DC"], ["s", "\uE1DD"], ["sh", "\uE1DE"], ["t", "\uE1DF"],
    ["th", "\uE1E0"], ["w", "\uE1E1"], ["w̄", "\uE1E2"], ["m", "\uE1E3"],
    ["n", "\uE1E4"], ["ng", "\uE1E5"], ["z", "\uE1E6"], ["zh", "\uE1E7"]
  ], true, false)
};