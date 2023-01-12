---
title: CSSでよく使うパターン
sidebar_position: 3
custom_edit_url: null
---

## よく使いそうなパターン

- `card-lists` - カードコンポーネントを囲う部分が`cards`では表現的に乏しい場合など。
- `about-block` - `about-section`どうしても`about`などコンテンツ名だけを使えないがブロックを現したい場合は、後ろに`Block`や`section`を付け足すと良い。
- `service-flow` - `service-step` フローなのかステップなのかは意味合い的には大差ない。
- `feature` - 機能の紹介。Google翻訳すると`Introduction of functions`だが、近しい意味の特徴に変えて、`feature`とする方がよかったりする。
- `toc` - 目次。 `Table of Contents`だが、略語を用いるケースもある。ただし、一般的な略語のみにしないと意味がわからなくなるので注意。

### 実際のプロジェクトから抜粋

- `comment-area`, `input-area` - 要素名などに`area`を足してそれを行う場所を意味させる方法。`block`や`section`を使うケースも多い。
- `community-article`, `feature-detail` - コンテンツの詳細ページを表す場合に`article`や`detail`で表す場合もある。
- `key-visual`, `cart-step` - 一つの単語で説明が難しいもの、複数単語で成り立つもの。
- `post-slider`, `share-links` - `area`などよりも詳細度が高い一部分に対してつけることでネストの深さを緩和したり、他のCSSの記述に影響させないようにする。
- `modal-block`, `modal-inner`, `modal-wrap` - modalのようなUIパーツの構造を表す場合に`modal__inner`などで表せない状態の場合。
- `input-check-toggle` - 三つの単語で機能まで名前に含める場合。（あまり推奨はしません。）

## フレームワークでのコンポーネントに関して

コンポーネントベースのフレームワークを利用する場合には、ほとんどの場合CSS Modulesとしての設定がされるため、内部的なBlockが複数語ではなくても可能です。
その場合においても最初にコンポーネント名を使用するようにし、予期せぬ衝突を避けるようにしてください。

:::tip コンポーネントファイルにCSSファイルを読み込んでいる場合に可能なパターン

```html
<div class="componentsName">
  <ul class="componentsName__lists">
    <li class="componentsName__list">リスト</li>
  </ul>
</div>
```

```scss
// componentsName.scss
.componentsName{
  &__lists{
    // something
  }
  &__list{
    // something
  }
}
```

または下記も可能

```html
<div class="componentsName">
  <ul class="lists">
    <li class="list">リスト</li>
  </ul>
</div>
```

```scss
// componentsName.scss
.componentsName{
  .lists{
    // something
  }
  .list{
    // something
  }
}
```
:::
