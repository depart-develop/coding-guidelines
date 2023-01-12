---
title: CSSでよく使うパターン
sidebar_position: 3
custom_edit_url: null
---

## 案件などの制作でよく使うパターン

- `cardLists` - カードコンポーネントを囲う部分が`cards`では表現的に乏しい場合など。
- `aboutBlock` - `aboutSection`どうしても`about`などコンテンツ名だけを使えないがブロックを現したい場合は、後ろに`Block`や`section`を付け足すと良い。
- `serviceFlow` - `serviceStep` フローなのかステップなのかは意味合い的には大差ない。
- `feature` - 機能の紹介。Google翻訳すると`Introduction of functions`だが、近しい意味の特徴に変えて、`feature`とする方がよかったりする。
- `toc` - 目次。 `Table of Contents`だが、略語を用いるケースもある。ただし、一般的な略語のみにしないと意味がわからなくなるので注意。

### 実際の案件から抜粋

- `commentArea`, `inputArea` - 要素名などに`Area`を足してそれを行う場所を意味させる方法。`Block`や`Section`を使うケースも多い。
- `communityArticle`, `featureDetail` - コンテンツの詳細ページを表す場合に`Article`や`Detail`で表す場合もある。
- `keyVisual`, `cartStep` - 一つの単語で説明が難しいもの、複数単語で成り立つもの。
- `postSlider`, `shareLink` - `Area`などよりも詳細度が高い一部分に対してつけることでネストの深さを緩和したり、他のCSSの記述に影響させないようにする。
- `modalBlock`, `modalInner`, `modalWrap` - modalのようなUIパーツの構造を表す場合。
- `inputCheckToggle` - 三つの単語で機能まで名前に含める場合。

#### フレームワークでのコンポーネントに関して

コンポーネントベースのフレームワークを利用する場合には、ほとんどの場合CSS Modulesとしての設定がされるため、内部的なBlockが複数語ではなくても可能です。
その場合においても最初にコンポーネント名を使用するようにし、予期せぬ衝突を避けるようにしてください。

_**componentsNameコンポーネント内**_

```html
<div class="componentsName">
  <ul class="componentsName__lists">
    <li class="componentsName__list"></li>
  </ul>
</div>
```

```scss
// componentsName.scss
.componentsName{
  &__lists{
  }
  &__list{
  }
}
```

または下記も可能

```html
<div class="componentsName">
  <ul class="lists">
    <li class="list"></li>
  </ul>
</div>
```

```scss 
// componentsName.scss
.componentsName{
  .lists{
  }
  .list{
  }
}
```
