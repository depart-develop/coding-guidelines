---
title: JavaScript
sidebar_position: 7
custom_edit_url: null
---

## <span class="label-required">必須</span> 厳格モード

厳格モード（Strict mode）を使用する。

<details open>
<summary>詳細</summary>

厳密なエラー解釈によるケアレスミスの防止やセキュリティリスク軽減のため、`"use strict";`宣言による厳格モードを使用します。

モジュールの場合、常に厳格モード有効のため`"use strict";`宣言は不要です。  
モジュール以外の場合、複数ファイル連結時に厳格モードの影響範囲が意図せず拡大することがあるため、グローバルスコープでの`"use strict";`宣言は禁止します。

:::note 参考

- [厳格モード - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Strict_mode)

:::

</details>

## <span class="label-required">必須</span> グローバル変数・関数の追加禁止

可能な限りグローバルスコープへ変数や関数は追加しない。

<details open>
<summary>詳細</summary>

グローバルスコープの変数・関数を意図せず上書きすることで、不測のエラーや依存ライブラリへ影響を及ぼす可能性があります。  
JavaScriptコードは基本的に全体を包含する即時関数の中で定義するか、モジュールの中で定義します。

例外として、サイトやアプリケーション全体の名前空間を意図した変数は許容します。

:::caution BAD

```js
// グローバルスコープで変数を定義している
var global = "";

(() => {
  // ...
})();
```

:::

:::tip GOOD

```js
(() => {
  "use strict";

  // 即時関数の中で定義
  const local = "";
})();

// サイト全体の名前空間は例外
window.MY_NAME_SPACE = {};
```

```js title="module-sample.js"
// モジュール（module-sample.js）の中で定義
export const binding = "";
const local = "";
```

:::

</details>

## <span class="label-required">必須</span> 変数宣言のキーワード

変数宣言には`const`もしくは`let`を使用する。

<details open>
<summary>詳細</summary>

変数宣言は基本的に`const`を使用し、値を変更する必要がある場合のみ`let`を使用します。  
`var`は仕様上、意図しない再代入や再宣言の可能性があるため禁止します。

:::caution BAD

```js
var foo = ""; // 変数をvarで宣言している
let BRAKEPOINT = 768; // 値を変更しない変数をletで宣言している
```

:::

:::tip GOOD

```js
const items = [1, 3, 5, 7, 11];
let result = "";

for (const item of items) {
  if (item === 3) {
    result = "The world famous Nabeatsu.";
  }
}
```

:::

</details>

## <span class="label-required">必須</span> カンマ区切りの変数宣言

カンマ区切りの変数宣言は使用しない。

<details open>
<summary>詳細</summary>

変数宣言はカンマ区切りでまとめて書かず、1つの宣言キーワードにつき変数は1つだけ宣言します。

:::caution BAD

```js
let foo = "", bar = false;
```

:::

:::tip GOOD

```js
let foo = "";
let bar = false;
```

:::

</details>

## <span class="label-required">必須</span> 比較演算子

比較は厳密な演算子（`===`、`!==`）を使用する。

<details open>
<summary>詳細</summary>

等価演算子（`==`）や不等価演算子（`!=`）は異なるデータ型を暗黙的に型変換をしてから比較するため、バグを作りこむ要因となります。  
`==`や`!=`ではなく、厳密な比較ができる`===`と`!==`を使用します。

:::caution BAD

```js
const foo = 0;

// 数値（0）と文字列（"0"）の比較だが、結果はtrueになる
if (foo == "0") {
  console.log('equality');
}
```

:::

:::tip GOOD

```js
const foo = 0;

if (foo === 0) {
  console.log('strict equality');
}
```

:::

</details>

## <span class="label-required">必須</span> 動的なコード評価

`eval()`、`new Function()`を使用しない。

<details open>
<summary>詳細</summary>

`eval()`や`new Function()`は任意の文字列をJavaScriptとして実行できるため、セキュリティリスクとなります。

JSONのパースには`JSON.parse()`を使います。  
文字列から数値の変換には`parseInt()`, `parseFloat()`, `Number()`を使います。

:::caution BAD

```js
const json = `{ "users": [], "count": 0 }`;

console.log(eval("(" + json + ")"));
```

:::

:::tip GOOD

```js
const json = `{ "users": [], "count": 0 }`;

console.log(JSON.parse(json));
```

:::

</details>

## <span class="label-required">必須</span> `setTimeout()`、`setInterval()`の第1引数

`setTimeout()`、`setInterval()`の第1引数に文字列は使用しない。

<details open>
<summary>詳細</summary>

`setTimeout()`、`setInterval()`の第1引数には関数の代わりに文字列を指定することも可能ですが、`eval()`や`new Function()`と同様にセキュリティのリスクがあります。  
`setTimeout()`、`setInterval()`の第1引数には文字列ではなく関数を指定します。

:::caution BAD

```js
setTimeout("console.log('Hello World!');", 500);
```

:::

:::tip GOOD

```js
setTimeout(function() {
  console.log('Hello World!');
}, 500);
```

:::

</details>

## <span class="label-required">必須</span> 外部データのDOM挿入

外部データをDOMに追加する場合、必ずエスケープ処理をする。

<details open>
<summary>詳細</summary>

外部から操作できるデータをDOMに追加する場合、悪意のあるJavaScriptが実行される可能性があります（XSS）。  
以下のいずれかの対応で適切な処理をします。

- HTMLエスケープしてから追加、もしくはHTMLではなくテキストとして追加する
- スクリプトを含まない必要な要素のみを抽出し、DOMオブジェクトとして組み立てて追加する

※ DOMオブジェクトとして組み立てて追加する場合、処理が複雑になるため[DOMPurify](https://github.com/cure53/DOMPurify)等のライブラリの使用を推奨します。

:::caution BAD

```js
/*
以下のURLでアクセスしている想定
https://example.com/?keyword=%3Cimg+src%3D%22%22+onerror%3D%22alert%28%27hello%27%29%22%3E

keywordの値をURLデコードすると <img src="" onerror="alert('hello')">
*/

const root = document.querySelector("...");

const searchParams = new URLSearchParams(location.search);
const keyword = searchParams.get("keyword");

root.innerHTML = keyword; // JavaScriptが実行される
```

:::

:::tip GOOD

```js
/*
以下のURLでアクセスしている想定
https://example.com/?keyword=%3Cimg+src%3D%22%22+onerror%3D%22alert%28%27hello%27%29%22%3E

keywordの値をURLデコードすると <img src="" onerror="alert('hello')">
*/

const root = document.querySelector("...");

const searchParams = new URLSearchParams(location.search);
const keyword = searchParams.get("keyword");

// HTMLではなくテキストとして追加する
root.textContent = keyword;

// DOMオブジェクトとして組み立てて追加する（ライブラリを利用してサニタイジング）
const html = `<span>${keyword}</span>`;
root.innerHTML = DOMPurify.sanitize(html);
```

:::

</details>

## <span class="label-required">必須</span> 非推奨の機能、廃止された機能

非推奨の機能、廃止された機能は使用しない。

<details open>
<summary>詳細</summary>

古いコードとの互換性のために残された機能は将来的に廃止される可能性があるため、使用を禁止します。

非推奨の機能については以下を参照

:::note 参考

- [非推奨の機能、廃止された機能 - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
- [ECMAScript 仕様書 付録 B](https://tc39.es/ecma262/#sec-additional-ecmascript-features-for-web-browsers)

:::

</details>

## <span class="label-required">必須</span> セミコロン

文の最後は必ずセミコロン（`;`）を記述する。

<details open>
<summary>詳細</summary>

Strictモードでもセミコロン（`;`）は省略可能ですが、予期せぬエラーを避けるため省略は禁止します。

また、セミコロン（`;`）の直後では必ず改行します。  
（例外：`for`文の条件部分におけるセミコロン（`;`）の直後は半角スペースでも）

主にエラーになりやすい部分としては、即時関数を用いる時や、配列を変数に格納せず`[]`でそのまま使用するなどの場合に直前に文末でセミコロンを使用していないとエラーまたは予期せぬ結果になります。

:::caution BAD

```js
const foo = () => {
  // ...
} // 式文の終わりにセミコロンがない
const baz = {
  checked: true,
} // 式文の終わりにセミコロンがない

function qux() {
  bar.push('d') // 文の終わりにセミコロンがない
}
if (baz.checked) { foo(); } // セミコロンの後に改行がない
```

```js
const x = 10 // エラー

(function(n){
  y = n
})(100)
```

```js
const x = 10

['aaa', 'bbb'].push('ccc') // エラー
```

:::

:::tip GOOD

```js
const foo = () => {
  // ...
};
const bar = ['a', 'b', 'c'];
const baz = {
  checked: true,
};

// 以下、関数宣言のようにブロックで終わる文の末尾にはセミコロン不要

function qux() {
  bar.push('d');
}

if (baz.checked) {
  foo();
}

// for文の条件ではセミコロンの後に改行しなくてもよい
for (let i = 0; i < bar.length; i++) {
  // ...
}
```

```js
const x = 10;

(function(n){
  y = n
})(100);
```

```js
const x = 10;

['aaa', 'bbb'].push('ccc');
```


:::

</details>

## <span class="label-required">必須</span> コロン

コロン（`:`）の前後に適切な半角スペースまたは改行を記述する。

表記スタイルは以下「詳細」を参照

<details open>
<summary>詳細</summary>

- コロン（`:`）の前は、半角スペースを記述しない
- コロン（`:`）の後は、半角スペースを記述する

:::caution BAD

```js
// コロンの後に半角スペースがない
const sample1 = {
  foo:"",
  bar:0,
};

// コロンの前に半角スペースがある
const sample2 = {
  foo : "",
  bar : 0,
};

// コロンの前に半角スペースがある
switch (type) {
case "success" :
  // ...
  break;
case "error" :
  // ...
  break;
default :
  break;
}
```

:::

:::tip GOOD

```js
const sample1 = {
  foo: "",
  bar: 0,
};

switch (type) {
case "success":
  // ...
  break;
case "error":
  // ...
  break;
default:
  break;
}
```

:::

</details>

## <span class="label-required">必須</span> 演算子

演算子の前後に適切な半角スペースまたは改行を記述する。

表記スタイルは以下「詳細」を参照

<details open>
<summary>詳細</summary>

- 演算子の前後は、改行もしくは半角スペースを記述する
    - 例外：`++`、`--`、`!`、単項マイナス演算子（数値の前にある`-`）とオペランドの間には、半角スペースを記述しない

:::caution BAD

```js
// 演算子の前後に半角スペースがない
const result = 123+456;

// 単項マイナス演算子とオペランドの間には半角スペースを記述しない
let sum = - 2;

// ++とオペランドの間には半角スペースを記述しない
sum ++;
```

:::

:::tip GOOD

```js
const result = 123 + 456;

let sum = -2;

sum++;
```

:::

</details>

## <span class="label-required">必須</span> ブレース（波括弧）

文や関数のブレース（波括弧）は省略しない。

表記スタイルは以下「詳細」を参照

<details open>
<summary>詳細</summary>

文や関数のブレース（波括弧）は（本文が1つの文であっても）省略せず、下記の表記スタイルで記述する。

- 開始括弧の前で改行しない
- 開始括弧の後で改行する
- 終了括弧の前で改行する
- 終了括弧の後で文や関数が終了する場合は改行する
- 終了括弧の後に `else`、`catch`、`while`、カンマ（`,`）、セミコロン（`;`）が続く場合は改行しない

:::caution BAD

```js
// ブレース（波括弧）が省略されている
for (let i = 0; i < foo.length; i++) bar(foo[i]);

if (someCondition()) // 開始括弧の前で改行している
{
  // ...
}
else // 終了括弧の後に else があるが改行している
{
  // ...
}

// 終了括弧の後で文が終了しているが、改行していない
function bar() { /* ... */ } function baz() { /* ... */ }
```

:::

:::tip GOOD

```js
for (let i = 0; i < foo.length; i++) {
  bar(foo[i]);
}

if (someCondition()) {
  // ...
} else {
  // ...
}

function bar() {
  /* ... */
}
function baz() {
  /* ... */
}
```

:::

</details>

## <span class="label-recommend">推奨</span> JSDoc

すべてのクラス、メソッド、関数にJSDocの形式でコメントを記述する。

<details open>
<summary>詳細</summary>

コードの読み手がプログラムの仕様や処理の内容を理解し、正しく使用するため、必要十分なコメントを残します。  
コメントはJSDocの形式で記述し、ドキュメントを自動生成できるようにします。

:::tip GOOD

```js
/** クラスの説明 */
class MyClass {
  /**
   * @param {string=} someString 引数（デフォルト引数あり）の説明
   */
  constructor(someString = 'default string') {
    /** @private @const {string} */
    this.someString_ = someString;
    /** @type {number} */
    this.someProperty = 4;

    // プロパティにすべてコメントを残すのはコストがかかるため任意
  }

  /**
   * メソッドの説明
   * @param {!MyClass} obj 引数の説明
   * @return {boolean} 戻り値の説明
   */
  someMethod(obj) {
    // ...
  }
}
```

:::

</details>
