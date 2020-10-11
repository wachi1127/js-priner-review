// 同時に複数の変数を定義する例
const bookTitle = "Javascript Primser",
  bookCategory = "プログラミング";

// varの問題
// 1. 同じ名前の変数を再定義してもエラーにならない
// 2. 変数の巻き上げ問題

// letではエラー
console.log(x); // => ReferenceError: can't access lexical declaration `x' before initialization
let x = "letのx";

// varではホスティングするのでundefinedになる
console.log(x);
var x = "varのx";
// ↑はこれと同じこと
// var x;
// console.log(x)
// x = var x = "varのx";

// さらにブロックスコープを無視して最も近い関数やGスコープに変数を紐付ける
function fn() {
  // もっとも近い関数スコープの先頭に宣言部分が巻き上げられる
  console.log(x); // => undefined
  {
    x = "varのx";
  }
  console.log(x); // => "varのx"
}
fn();
