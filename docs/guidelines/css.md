---
title: CSS
sidebar_position: 6
custom_edit_url: null
---

## <span class="label-required">必須</span> CSSの妥当性

可能な限り妥当性のあるCSSを使用する。

<details open>
<summary>詳細</summary>

CSSの妥当性は[W3C CSS validator](https://jigsaw.w3.org/css-validator/)などのツールを使用して検証します。

</details>

## <span class="label-required">必須</span> IDセレクター

IDセレクターは使用しない。

<details open>
<summary>詳細</summary>

`id`属性は、ページ全体で一意であることが期待されますが、同じページに多くのコンポーネントが含まれている場合や複数のエンジニアが作業する場合は、常に`id`属性が一意であることを保証するのが困難です。  
そのため、スタイリングではIDセレクターの使用は避け、クラスセレクターを使用します。

:::caution BAD

```css
#title {}
```

:::

:::tip GOOD

```css
.title {}
```

:::

</details>

## <span class="label-required">必須</span> タイプセレクター

タイプセレクターは使用しない。

<details open>
<summary>詳細</summary>

メンテナンス性が低下するため、タイプセレクターを使用したスタイリングは禁止します。  
また、パフォーマンスの理由から、必要な場合以外はクラスセレクターと一緒に要素名（タイプセレクター）を使用しないようにします。

:::caution BAD

```css
ul {}

div.content {}
```

:::

:::tip GOOD

```css
.list {}

.content {}
```

:::

</details>

## <span class="label-required">必須</span> 命名規則

意味のある、または一般的なクラス名を使用する。

<details open>
<summary>詳細</summary>

見た目だけを表す名前や機械的な名前ではなく、要素の目的や役割に即した名前もしくは、一般的な名前を使用します。  
ただし、CSSフレームワークを使用している（既定の命名規則がある）場合や、ユーティリティ目的の調整用スタイルのクラス名（機械的に命名するのが妥当な場合）は対象外とします。

詳細は[命名規則](/docs/naming_convention/)を参照してください。

:::caution BAD

```css
/* 見た目だけの名前 */
.large-text {}

/* 機械的で意味のない名前 */
.v-001 {}
```

:::

:::tip GOOD

```css
/* 目的や役割に即した名前 */
.heading {}

/* 一般的な名前 */
.hero {}
```

:::

</details>

## <span class="label-required">必須</span> クラス名の記法

基本的に、単語の連結記法はハイフン区切りのケバブケースを使用する。
ただし、ライブラリ等の制約でケバブケース以外の記法ルールが適している場合はこの限りではない。

<details open>
<summary>詳細</summary>

接頭辞なども活用しながら、理解しやすく検索しやすいことを目指します。

:::caution BAD

```css
/* 単語を分けず、そのまま連結している */
.buttonprimary {}

/* アンダースコアが使用されている */
.search_result {}

```

:::

:::tip GOOD

```css
.button-primary {}

.search-result {}

/* BEMでいう「Block」と「Element」の連結は例外的にアンダースコアを使ってもOK */
.search-result__item {}
```

:::

</details>

## <span class="label-required">必須</span> 単語の略語

クラス名で使用する単語は理解可能な範囲で省略し、できるだけ簡潔にする。

<details open>
<summary>詳細</summary>

クラス名はできるだけ短くしつつ、目的や役割が読み手に伝わるようにします。  
「要素名や属性名などで使われる一般的な略語か」が、読み手が理解できるかどうかの1つの判断基準になります。

:::caution BAD

```css
/* 長くて可読性がよくない */
.navigation {}

/* 省略しすぎて目的や役割が理解できない */
.hdg {}
```

:::

:::tip GOOD

```css
/* 短くても目的や役割が伝わる */
.nav {}

/* 目的や役割を伝えるために省略しない */
.heading {}
```

:::

</details>

## <span class="label-recommend">推奨</span> ショートハンドプロパティ

ショートハンドで記述できるプロパティは省略して記述する。

<details open>
<summary>詳細</summary>

1つの値のみを明示的に設定する場合でも、効率と理解しやすさためショートハンドプロパティを使用します。  
ただし、`font`や`background`など省略しないほうが分かりやすいものは例外とします。（ショートハンドでの記述も可）

:::caution BAD

```css
/* border-top を消すために詳細なプロパティを個別に指定 */
border-top-style: none;

/* padding を個別に指定 */
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;
```

:::

:::tip GOOD

```css
/* border-top を消すスタイルを一番短く記述 */
border-top: 0;

/* padding をまとめて指定 */
padding: 0 1em 2em;

/* font: 1rem/1.6 sans-serif; と同義だが、分けて書いたほうが理解しやすいので省略しない */
font-family: sans-serif;
font-size: 1rem;
line-height: 1.6;
```

:::

</details>

## <span class="label-required">必須</span> 0と単位

必要な場合を除き、「0」の単位指定は省略する。

<details open>
<summary>詳細</summary>

:::tip GOOD

```css
flex: 0px; /* flexプロパティの指定が曖昧になってしまうため、flex-basisで0pxを指定するには単位が必要 */
margin: 0;
padding: 0;
```

:::

</details>

## <span class="label-recommend">推奨</span> カラーコードの16進表記

可能な限り3文字の16進表記を使用する。

<details open>
<summary>詳細</summary>

より短くより簡潔にするため、3文字で表現できる場合は3文字の16進表記を使用します。

:::caution BAD

```css
color: #eebbcc;
```

:::

:::tip GOOD

```css
color: #ebc;
```

:::

</details>

## <span class="label-required">必須</span> `!important`宣言

`!important`宣言は使用しない。

<details open>
<summary>詳細</summary>

`!important`は、CSSの継承や優先度などの一般的なルールを無視してしまうため、レイアウトが崩れた場合など原因の特定が困難になります。  
`!important`を使用する代わりに、セレクターの詳細度を使用してスタイルを上書きします。

ただし、ユーティリティ目的の調整用スタイル（`mt-0`で上マージンを0にする場合など）は対象外とします。

:::caution BAD

```css
.example {
  font-weight: bold !important;
}
```

:::

:::tip GOOD

```css
.foo .example {
  font-weight: bold;
}

/* 調整用スタイルは !important を許容 */
.mt-0 {
  margin-top: 0 !important;
}
```

:::

</details>

## <span class="label-required">必須</span> ベンダープレフィックス

ベンダープレフィックスは必要最小限の範囲で記述する。

<details open>
<summary>詳細</summary>

ベンダープレフィックスはプロジェクトの対象ブラウザで必要なプロパティのみを記述します。  
また、ブラウザからベンダープレフィックスのサポートが消えた時のために、接頭辞なしのプロパティも必ず記述します。

※ ベンダープレフィックスは基本的に手動では設定せず、Autoprefixerで自動出力するようにします。手動で設定する場合は、[Can I use...](https://caniuse.com/)を参考に設定します。

:::caution BAD

```css
/* プロジェクトの対象ブラウザにSafariが含まれている場合 */
.foo {
  /* 不要なベンダー接頭辞を記述している（-webkit- は不要） */
  -webkit-box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
  box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);

  /* 必要なベンダー接頭辞を記述していない（-webkit- が必要） */
  backdrop-filter: blur(2px);
}
```

:::

:::tip GOOD

```css
/* Safariが対象ブラウザに含まれている場合の例 */
.foo {
  box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);

  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
}
```

:::

</details>

## <span class="label-required">必須</span> CSSハック

特定のブラウザ/バージョンにのみスタイルを適用させるCSSハックは使用しない。

<details open>
<summary>詳細</summary>

CSSハックを使用した条件分岐のスタイリングは、長期的には効率性・メンテナンス性の低下に繋がります。  
JavaScriptを利用してclass属性値を付与するなど、別の手段での解決するようにします。

</details>

## <span class="label-recommend">推奨</span> 大文字は使用しない

プロパティ値のコードは小文字のみを使用する。

<details open>
<summary>詳細</summary>

プロパティ値（文字列を除く）には大文字を使用せず、小文字のみを使用します。

:::caution BAD

```css
color: #E5E5E5;
```

:::

:::tip GOOD

```css
color: #e5e5e5;
```

:::

</details>

## <span class="label-required">必須</span> ブロック内のインデント

すべてのブロック内をインデントする。

<details open>
<summary>詳細</summary>

階層をわかりやすくするために、すべてのブロック内をインデントします。

:::tip GOOD

```css
@media screen, projection {

  html {
    background: #fff;
    color: #444;
  }

}
```

:::

</details>

## <span class="label-required">必須</span> 宣言終了のセミコロン

すべての宣言の後にセミコロンを使用する。

<details open>
<summary>詳細</summary>

一貫性と拡張性の理由から、すべての宣言をセミコロンで終了します。

:::caution BAD

```css
.test {
  display: block;
  height: 100px
}
```

:::

:::tip GOOD

```css
.test {
  display: block;
  height: 100px;
}
```

:::

</details>

## <span class="label-required">必須</span> プロパティ名の直後

プロパティ名のコロンの後にスペースを入れる。

<details open>
<summary>詳細</summary>

一貫性を保つために、プロパティと値の間には必ず半角スペース（U+0020）を1つ使用します。  
プロパティとコロンの間にはスペースを入れません。

:::caution BAD

```css
h3 {
  font-weight:bold;
}
```

:::

:::tip GOOD

```css
h3 {
  font-weight: bold;
}
```

:::

</details>

## <span class="label-required">必須</span> 宣言ブロックの区切り

最後のセレクターと宣言ブロックの間にスペースを入れる。

<details open>
<summary>詳細</summary>

最後のセレクターと宣言ブロックを開始する左中括弧の間には、常に1個のスペースを使用します。  
左中括弧は、記述するルールの最後のセレクターと同じ行に置きます。

:::caution BAD

```css
/* スペースがない */
.video{
  margin-top: 1em;
}

/* 不要な改行 */
.video
{
  margin-top: 1em;
}
```

:::

:::tip GOOD

```css
.video {
  margin-top: 1em;
}
```

:::

</details>

## <span class="label-required">必須</span> セレクタおよび宣言の分離

セレクタおよび宣言は改行で区切る。

<details open>
<summary>詳細</summary>

それぞれのセレクタと宣言は必ず改行して新しい行に記述します。

:::caution BAD

```css
a:focus, a:active {
  position: relative; top: 1px;
}
```

:::

:::tip GOOD

```css
a:focus,
a:active {
  position: relative;
  top: 1px;
}
```

:::

</details>

## <span class="label-recommend">推奨</span> ルールの分離

ルールは空行で区切る。

<details open>
<summary>詳細</summary>

ルールの間には必ず空白行を1つ入れます。

:::tip GOOD

```css
html {
  background: #fff;
}

body {
  margin: auto;
  width: 50%;
}
```

:::

</details>

## <span class="label-required">必須</span> CSSの引用符

属性セレクタとプロパティ値には、二重引用符（`""`）を使用する。  
また、URI値（`url()`）に引用符を使用しない。

<details open>
<summary>詳細</summary>

:::caution BAD

```css
html[lang='ja'] {
  font-family: 'Hiragino Kaku Gothic ProN', sans-serif;
  background: url('/img/bg.svg');
}
```

:::

:::tip GOOD

```css
html[lang="ja"] {
  font-family: "Hiragino Kaku Gothic ProN", sans-serif;
  background: url(/img/bg.svg);
}
```

:::

</details>
