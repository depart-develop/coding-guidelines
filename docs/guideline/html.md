---
title: HTML
sidebar_position: 5
custom_edit_url: null
---

## <span class="label-required">必須</span> HTMLの妥当性

可能な限り妥当性のあるHTMLを使用する。

<details open>
<summary>詳細</summary>

HTMLの妥当性は[W3C HTML validator](https://validator.w3.org/nu/)などのツールを使用して検証します。  
validatorにてエラーがあっても[HTML Living Standard](https://html.spec.whatwg.org/multipage/)の仕様に準拠していれば許容します。

:::caution BAD

```html
<!-- DOCTYPE宣言がない -->
<title>ページタイトル</title>
<main>メインコンテンツ <!-- 閉じタグがない -->
```

:::

:::tip GOOD

```html
<!DOCTYPE html>
<head>
<meta charset="utf-8">
<title>ページタイトル</title>
</head>
<body>
<main>メインコンテンツ</main>
</body>
```

:::

</details>

## <span class="label-required">必須</span> ドキュメントタイプ

HTML（HTML Living Standard）を使用する。

<details open>
<summary>詳細</summary>

`<!DOCTYPE html>`で宣言し、`text/html`としてHTMLを使用します。

XHTMLは2018年3月27日に廃止されたため、XHTMLの使用は禁止します。

また、W3Cが策定していたHTML5は2021年1月28日に廃止されました。  
現状はWHATWGが策定している[HTML Living Standard](https://html.spec.whatwg.org/multipage/)がHTMLの標準仕様のため、HTML Living Standardの仕様に準拠します。

:::caution BAD

```html
<!-- XHTMLが使用されている -->
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

:::

:::tip GOOD

```html
<!-- HTMLが使用されている -->
<!DOCTYPE html>
```

:::

</details>

## <span class="label-required">必須</span> 言語コード

htmlタグのlang属性にページで使用する主な言語（自然言語）の言語コードを指定する。

<details open>
<summary>詳細</summary>

:::tip GOOD

```html
<html lang="ja">
```

:::

:::note 言語・地域コード一覧

- [言語コード（ISO 639-1）一覧](https://ja.wikipedia.org/wiki/ISO_639-1%E3%82%B3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7)
- [地域コード（ISO 3166-1）一覧](https://ja.wikipedia.org/wiki/ISO_3166-1_alpha-2)

:::

</details>

## <span class="label-required">必須</span> 表示領域の最適化

`meta`タグで`viewport`を指定する。

<details open>
<summary>詳細</summary>

`user-scalable=no`や`minimum-scale=1`と`maximum-scale=1`の併記は表示領域の拡大ができなくなり、アクセシビリティ・ユーザビリティ上の問題があるため禁止します。

:::caution BAD

```html
<meta name="viewport" content="user-scalable=no, minimum-scale=1, maximum-scale=1">
```

:::

:::tip GOOD

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

:::

</details>

## <span class="label-required">必須</span> セマンティクス

目的に応じたHTML要素を使用する。

<details open>
<summary>詳細</summary>

文書構造や目的に適した要素を使用してマークアップします。  
例えば、見出しは`h1`-`h6`要素、段落は`p`要素、リンクは`a`要素を使用します。

:::caution BAD

```html
<section>
<b>HTMLガイドライン</b>
<div>段落テキスト <span onclick="goToDetail();">ガイドラインについての詳細</span></div>
</section>
```

:::

:::tip GOOD

```html
<section>
<h2>HTMLガイドライン</h2>
<p>段落テキスト <a href="/guideline/detail.html">ガイドラインについての詳細</a></p>
</section>
```

:::

</details>

## <span class="label-required">必須</span> 空要素の末尾

空要素は末尾スラッシュ文字なし（HTML構文）で記述する。

<details open>
<summary>詳細</summary>

:::caution BAD

```html
<br />
<img src="image.jpg" alt="" />
```

:::

:::tip GOOD

```html
<br>
<img src="image.jpg" alt="">
```

:::

</details>

## <span class="label-required">必須</span> 開始タグ・終了タグの省略

開始タグ・終了タグは省略しない。（仕様上、開始タグ・終了タグが省略可能な要素でも必ず記述する）

<details open>
<summary>詳細</summary>

:::caution BAD

```html
<p>終了タグが省略可能な要素
<ul>
  <li>終了タグが省略可能な要素
  <li>終了タグが省略可能な要素
</ul>
```

:::

:::tip GOOD

```html
<p>終了タグが省略可能な要素</p>
<ul>
  <li>終了タグが省略可能な要素</li>
  <li>終了タグが省略可能な要素</li>
</ul>
```

:::

</details>

## <span class="label-required">必須</span> 引用符

属性値を囲む引用符は省略せず、ダブル・クォート（`""`）を使用する。

<details open>
<summary>詳細</summary>

属性値を囲む引用符は省略せずに記述します。  
また、シングル・クオート（`''`）ではなくダブル・クオート（`""`）を使用します。

:::caution BAD

```html
<a href=index.html class='c-button'>一覧へ戻る</a>
```

:::

:::tip GOOD

```html
<a href="index.html" class="c-button">一覧へ戻る</a>
```

:::

</details>

## <span class="label-required">必須</span> 属性値の省略

特別な理由がない限り、真偽属性（`disabled`や`checked`など）の値は省略する。

<details open>
<summary>詳細</summary>

真偽属性（`disabled`や`checked`など）の値は省略しますが、  
真偽属性ではない属性（`alt`など）の値は空文字列の場合でも省略しません。

:::caution BAD

```html
<!-- 真偽属性 -->
<script src="script.js" async=""></script>
<input type="text" disabled="disabled">

<!-- 真偽属性ではない -->
<img src="example.png" alt>
```

:::

:::tip GOOD

```html
<!-- 真偽属性 -->
<script src="script.js" async></script>
<input type="text" disabled>

<!-- 真偽属性ではない -->
<img src="example.png" alt="">
```

:::

</details>

## <span class="label-required">必須</span> パス表記

サイト内のリソースへのパス表記はルートパス（`/`から始まる表記）で記述する。

<details open>
<summary>詳細</summary>

:::caution BAD

```html
<!-- 相対パスになっている -->
<img src="example.png" alt="">
<img src="./example.png" alt="">

<!-- 絶対パスになっている -->
<img src="https://example.com/sabpage/example.png" alt="">
```

:::

:::tip GOOD

```html
<img src="/subpage/example.png" alt="">
```

:::

※ランディングページなど独立したコンテンツでのみ使用するリソースの場合は、相対パスを使用しても問題ありません。

</details>

## <span class="label-required">必須</span> 文字参照

文字参照（数値文字参照 / 文字実体参照）は使用しない。

<details open>
<summary>詳細</summary>

UTF-8でエンコードされたファイルであれば`&copy;`、`&#9312;`のような文字参照を使用する必要はありません。  
文字参照を使用することで可読性が低下するため、文字参照は使用せず「©」「①」のように記述します。  
ただし、HTMLで特別な意味を持つ文字（「<」や「&」など）は例外として文字参照を使用します。

:::caution BAD

```html
<p>Copyright &copy; 2021 depart Inc. All Rights Reserved.</p>
<ul>
  <li>&#9312;リスト項目</li>
  <li>&#9313;リスト項目</li>
</ul>
```

:::

:::tip GOOD

```html
<p>Copyright © 2021 depart Inc. All Rights Reserved.</p>
<ul>
  <li>①リスト項目</li>
  <li>②リスト項目</li>
</ul>
```

:::

</details>

## <span class="label-required">必須</span> `type`属性

CSSファイルとJavaScriptファイル読み込み時の`type`属性は省略する。

<details open>
<summary>詳細</summary>

HTMLはデフォルトで[`text/css`](https://html.spec.whatwg.org/multipage/obsolete.html#attr-style-type)と[`text/javascript`](https://html.spec.whatwg.org/multipage/scripting.html#attr-script-type)を暗示しているため、`type`属性を明示的に指定する必要はありません。

:::caution BAD

```html
<link rel="stylesheet" href="/assets/css/common.css" type="text/css">
```

:::

:::tip GOOD

```html
<link rel="stylesheet" href="/assets/css/common.css">
```

:::

:::caution BAD

```html
<script src="/assets/js/script.js" type="text/javascript"></script>
```

:::

:::tip GOOD

```html
<script src="/assets/js/script.js"></script>
```

:::

</details>

## <span class="label-required">必須</span> `id`属性

不要な`id`属性は使用しない。

<details open>
<summary>詳細</summary>

不要な`id`属性は使用は避けて、スタイリングやスクリプトには`class`属性を使用します。

WAI-ARIAの使用などにより`id`属性が必要な場合、JavaScriptの識別子構文と一致しないよう常にハイフンを含めます。  
例えば、単に`profile`や`userProfile`とするのではなく、`user-profile`と記述します。

要素に`id`属性値を使用した場合、その`id`属性値がグローバルな名前空間(`window`オブジェクト)のプロパティとして扱われ、グローバルに要素が参照できるようになります。  
これにより予期しない動作が発生する可能性があるため、id属性値にハイフンを含めることでグローバルなJavaScript変数としては参照できないようにします。

:::caution BAD

```html
<!-- グローバルに（`window.userProfile`で）div要素を参照できるようになるため、非推奨 -->
<div id="userProfile"></div>
```

:::

:::tip GOOD

```html
<!-- id属性が必要な場合は属性値にハイフンを含める -->
<div id="user-profile"></div>
```

:::

</details>

## <span class="label-recommend">推奨</span> `img`要素のサイズ指定

`img`要素には`width`属性と`height`属性を指定する。

<details open>
<summary>詳細</summary>

画像の読み込みを待たずにレイアウトが計算されるように、`img`要素には`width`属性と`height`属性を指定します。

また、`picture`要素を使用する場合は`source`要素にも`width`属性と`height`属性を指定します。  
（W3Cのバリデーターではエラーになりますが、[HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element)では仕様として定義されているため、エラーを許容します。）

:::tip GOOD

```html
<img src="example.png" alt="" width="400" height="200">

<picture>
<source srcset="example_pc.png" media="(min-width: 768px)" width="600" height="300">
<img src="example_sp.jpg" alt="" width="300" height="300">
</picture>
```

:::

</details>

## <span class="label-recommend">推奨</span> 画像のデコード処理 / 遅延読み込み

ファーストビューに含まれる画像には`decoding="async"`を指定する。
ファーストビューに含まれない画像には`loading="lazy"`を指定する。

<details open>
<summary>詳細</summary>

画像のデコード処理によって後続のレンダリングがブロックされないよう、ファーストビューに含まれる画像は`decoding="async"`を指定してデコード処理を非同期化します。

ファーストビューの表示に必要がない画像は初期表示時のリソース取得リクエスト数を減らすため、`loading="lazy"`を指定して読み込み処理を遅延させます。

:::tip GOOD

```html
<!-- ファーストビューに含まれる画像 -->
<img src="first-view-image.png" alt="" width="400" height="200" decoding="async">

<!-- ファーストビューに含まれない画像 -->
<img src="lazy-load-image.png" alt="" width="400" height="200" loading="lazy">
```

:::

</details>

## <span class="label-recommend">推奨</span> `svg`要素のコード最適化

`svg`要素から不要な属性やスタイル定義を削除する。

<details open>
<summary>詳細</summary>

デザインツールから書き出したSVGコードはid属性やスタイル定義が含まれる場合があります。（書き出し設定による）  
`id`属性の重複エラーやコードの冗長化・肥大化にもつながるため、不要なコードは削除します。

:::caution BAD

```html
<!-- デザインツールから自動で付与されるid属性は不要 -->
<svg id="icon_arrow_next" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <!-- スタイル定義は不要 path要素などのグラフィックス要素にfill属性やstroke属性で指定する -->
  <defs>
    <style>
      .cls-1 {
        fill: #528fe2;
      }

      .cls-2 {
        fill: none;
      }
    </style>
  </defs>
  <path id="パス_2" data-name="パス 2" class="cls-1" d="M192.952,367.814l-1.414-1.414,6.585-6.585-6.585-6.585,1.414-1.414,8,8Z" transform="translate(-187.891 -351.815)">
  <!-- 16x16のサイズ領域を確保するためにグループ化されていた見えない要素は不要 -->
  <rect id="長方形_11" data-name="長方形 11" class="cls-2" width="16" height="16">
</svg>
```

:::

:::tip GOOD

```html
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path d="M192.952,367.814l-1.414-1.414,6.585-6.585-6.585-6.585,1.414-1.414,8,8Z" transform="translate(-187.891 -351.815)" fill="#528fe2">
</svg>
```

:::

</details>

## <span class="label-required">必須</span> 要素名や属性の表記

HTML要素名や属性は小文字のみを使用する。

<details open>
<summary>詳細</summary>

HTML要素名、属性、属性値（`text/CDATA` や文字列は除く）には大文字を使用しません。

:::caution BAD

```html
<A HREF="/">トップページ</A>
```

:::

:::tip GOOD

```html
<a href="/">トップページ</a>
```

:::

</details>

## <span class="label-recommend">推奨</span> 終了タグ識別用のコメント

構造が読み取りにくい場合は終了タグの後ろに識別用のコメントを記述する。

<details open>
<summary>詳細</summary>

開始タグに対応する終了タグがコード上で離れている場合や繰り返し同じマークアップが続く場合は、要素の構造が読み取りにくくなります。  
構造の理解を助けるため、識別用のコメントを記述します。

:::tip GOOD

```html
<div class="complex-structure-block">
  ...
</div><!-- /complex-structure-block -->
```

:::

</details>
