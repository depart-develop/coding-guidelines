---
title: 全般
sidebar_position: 4
custom_edit_url: null
---

## <span class="label-required">必須</span> プロトコル

絶対パスでのリソース読み込みは可能な限りHTTPS（`https:`）を使用する。

<details open>
<summary>詳細</summary>

画像やその他のメディアファイル、スタイルシート、スクリプトには、HTTPS経由で利用できない場合を除き、常にHTTPS（`https:`）を使用します。

:::caution BAD

```html
<!-- プロトコル省略は非推奨 -->
<script src="//code.jquery.com/jquery-3.6.3.min.js"></script>

<!-- HTTPの使用は非推奨 -->
<script src="http://code.jquery.com/jquery-3.6.3.min.js"></script>
```

:::

:::tip GOOD

```html
<script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
```

:::

</details>

## <span class="label-required">必須</span> インデント

インデントは半角スペース（U+0020）2つを1単位とする。

<details open>
<summary>詳細</summary>

タブ（U+0009）でインデントしたり、タブと半角スペースを混在させることはできません。

:::tip GOOD

```html
<ul>
  <li>Fantastic</li>
  <li>Great</li>
</ul>
```

:::

:::tip GOOD

```css
.example {
  color: blue;
}
```

:::

</details>

## <span class="label-required">必須</span> 行末尾の空白

行末尾の空白は削除する。

<details open>
<summary>詳細</summary>

行末尾の空白は不要であり、差分がわかりにくくなるため削除します。

:::caution BAD

```html
<p>行末尾に半角スペースあり</p> 
```

:::

:::tip GOOD

```html
<p>行末尾に半角スペースなし</p>
```

:::

</details>

## <span class="label-required">必須</span> ファイル末尾の改行

ファイル末尾は改行する。

<details open>
<summary>詳細</summary>

差分がわかりにくくなるためファイル末尾の行では改行します。

:::caution BAD

```html
...
</html>
```

:::

:::tip GOOD

```html
...
</html>

```

:::

</details>

## <span class="label-required">必須</span> エンコーディング

UTF-8（BOMなし）を使用する。

<details open>
<summary>詳細</summary>

エディターの文字エンコードがUTF-8（BOMなし）に設定されていることを確認します。  
HTMLの場合は`<meta charset="utf-8">`でHTML文書のエンコーディングを指定します。  
スタイルシートはUTF-8を想定しているためエンコーディングを指定しません。

（エンコーディングの詳細とその指定方法は、W3Cの[Handling character encodings in HTML and CSS](https://www.w3.org/International/tutorials/tutorial-char-enc/)を参照してください。）

</details>

## <span class="label-required">必須</span> 改行コード

LFを使用する。

<details open>
<summary>詳細</summary>

エディターの改行コードがLFに設定されていることを確認します。

:::note

Windowsの場合はGit操作時に改行コードが自動変換されないよう.gitconfigの`core.autocrlf`の設定も確認します。

[Git - git-config Documentation](https://git-scm.com/docs/git-config#Documentation/git-config.txt-coreautocrlf)

:::

</details>

## <span class="label-recommend">推奨</span> コメント

必要に応じてコメントでコードを説明する。

<details open>
<summary>詳細</summary>

基本方針としては、コメントを記述しなくても読み手が理解できるコードを書くように心がけます。  
コメントを記述する必要がある場合は、そのコードが何を意図しているか、どんな目的を果たしているか、なぜその解決アプローチが使用されているかを記述します。

</details>

## <span class="label-required">必須</span> ライセンス遵守

ライブラリやフレームワーク（CSSリセットなども含む）を利用する際はライセンスを遵守する。

<details open>
<summary>詳細</summary>

ライセンスが商用利用可能であることを確認します。  

:::tip 商用利用が可能なライセンス

- [MIT](https://opensource.org/licenses/MIT)
- [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0.html)
- [BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause)
- [BSD-2-Clause](https://opensource.org/licenses/BSD-2-Clause)
- [ISC](https://opensource.org/licenses/ISC)
- [W3C-20150513](https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document)

:::

:::danger 商用利用が不可なライセンス

- [GNU LGPL v2.1](https://www.gnu.org/licenses/lgpl-2.1.en.html)
- [GNU LGPL v3](https://www.gnu.org/licenses/lgpl-3.0.en.html)
- [GNU GPL v2](https://www.gnu.org/licenses/gpl-2.0.en.html)
- [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.en.html)
- [GNU AGPL v3](https://www.gnu.org/licenses/agpl-3.0.en.html)

:::

</details>

## <span class="label-required">必須</span> ライセンス表記

ライブラリやフレームワーク（CSSリセットなども含む）を利用する際、ライセンス表記のコメントは削除しない。

<details open>
<summary>詳細</summary>

コードをコンパイル/圧縮した際にライセンス表記のコメントが削除されていないか必ず確認します。

</details>
