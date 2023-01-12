---
title: SEO
sidebar_position: 9
custom_edit_url: null
---

## <span class="label-required">必須</span> 画像の代替テキスト

意味を持つ画像に代替テキストを設定する。

<details open>
<summary>詳細</summary>

キーワードを適切に使用して、ページのコンテンツの文脈に沿った代替テキストを設定します。  
ただし、`alt`属性にキーワードを羅列すること（キーワードの乱用）は避けてください。これによって、ユーザーエクスペリエンスが低下し、サイトがスパムとみなされる場合があります。

:::caution BAD

```html
<!-- alt属性がない -->
<img src="puppy.jpg"/>
```

```html
<!-- キーワードの乱用 -->
<img src="puppy.jpg" alt="puppy dog baby dog pup pups puppies doggies pups litter puppies dog retriever labrador wolfhound setter pointer puppy jack russell terrier puppies dog food cheap dogfood puppy food"/>
```

:::

:::tip GOOD

```html
<img src="puppy.jpg" alt="Dalmatian puppy playing fetch"/>
```

:::

</details>

## <span class="label-recommend">推奨</span> アンカーテキストの最適化

アンカーテキストにリンク先ページの内容を示す。

<details open>
<summary>詳細</summary>

リンク先を一言で説明する内容をアンカーテキストに設定することで、検索エンジンがリンク先ページのテーマ(専門性の高さ)を把握するのに役立ちます。  
キーワードに対してサイトの専門性が高いほど、ランキングで有利になります。

:::caution BAD

```html
<p>おすすめ保険商品は<a href="detail.html">こちら</a></p>
```

:::

:::tip GOOD

```html
<p><a href="detail.html">おすすめ保険商品はこちら</a></p>
```

:::

</details>

## <span class="label-recommend">推奨</span> ナビゲーションの画像

可能な限りナビゲーションは画像ではなくテキストで表現する。

<details open>
<summary>詳細</summary>

検索エンジンの理解を助けるため、グローバルナビゲーションなど重要なナビゲーションはテキストリンクで表現します。  
テキストでの実装が難しく、画像を使用する場合は`alt`属性を設定します。

:::caution BAD

```html
<nav>
  <ul>
    <li><a href="about.html"><img src="nav-about.png" alt=""></a></li>
    <li><a href="news.html"><img src="nav-news.png" alt=""></a></li>
  </ul>
</nav>
```

:::

:::tip GOOD

```html
<nav>
  <ul>
    <li><a href="about.html">私たちについて</a></li>
    <li><a href="news.html"><img src="nav-news.png" alt="お知らせ"></a></li>
  </ul>
</nav>
```

:::

</details>

## <span class="label-recommend">推奨</span> 別サイトからのコンテンツ引用

別サイトからコンテンツを引用する場合、`blockquote`要素を使用する。

<details open>
<summary>詳細</summary>

コンテンツコピーによるペナルティを避けるため、他ページのコンテンツ（文章、画像）を利用したい場合は`blockquote`要素を使用し、別サイトからの引用を明示します。

:::caution BAD

```html
<p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
```

:::

:::tip GOOD

```html
<blockquote cite="https://www.huxley.net/bnw/four.html">
    <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
</blockquote>
```

:::

</details>

## <span class="label-required">必須</span> 検索結果に表示したくないページ

検索結果に表示したくないページは`noindex`を使用して検索インデックス登録をブロックする。

<details open>
<summary>詳細</summary>

会員限定ページなど検索結果で見せたくないページは`noindex`を使用して検索インデックス登録をブロックします。

:::tip GOOD

```html
<head>
...
<meta name="robots" content="noindex">
...
</head>
```

:::

</details>

## <span class="label-recommend">推奨</span> XMLサイトマップ

XMLサイトマップ（sitemap.xml）を設定し、定期的に更新する。

<details open>
<summary>詳細</summary>

Sitemap.xmlはクローラーの地図になるため設定されていない場合、サイト内でクロールされないページが発生する可能性があります。  
検索エンジンが効率的にクロールできるように、XMLサイトマップ（sitemap.xml）を設置します。

:::tip GOOD

```xml title="sitemap.xml"
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>http://www.example.com/foo.html</loc>
    <lastmod>2018-06-04</lastmod>
  </url>
</urlset>
```

:::

</details>

## <span class="label-recommend">推奨</span> URLの正規化（PCとモバイルが別ページの場合）

`rel="canonical"`と`rel=alternate`を使用してURLを正規化する。

<details open>
<summary>詳細</summary>

ページが重複コンテンツとして扱われることや、評価が分散してしまうことを避けるためURLを正規化します。

:::tip GOOD

PCページのURLに正規化する（検索結果に表示したいURLがPCページ）場合

```html title="https://mobile.example.com/index.html"
<head>
...
<!-- rel="canonical"を記載し、PCページを検索エンジンに伝える -->
<link rel="canonical" href="https://example.com/">
...
</head>
```

```html title="https://example.com/index.html"
<head>
...
<!-- rel="alternate"を記載し、モバイルページを検索エンジンに伝える -->
<link rel="alternate" media="only screen and (max-width: 640px)" href="https://mobile.example.com/" />
...
</head>
```

:::

</details>

## <span class="label-recommend">推奨</span> URLの正規化（複数のURLでアクセスできる場合）

301リダイレクトや`rel="canonical"`を使用してURLを正規化する。

<details open>
<summary>詳細</summary>

ページが重複コンテンツとして扱われることや、評価が分散してしまうことを避けるためURLを正規化します。

URLの重複はサーバーの301リダイレクトで行うことが望ましいですが、サーバー側でURLを正規化できない場合は`rel=canonical`を使ってURLを正規化します。

:::note 複数のURLでアクセスできる例

- プロトコルによる重複
    - http://example.com/index.html
    - https://example.com/index.html
- www.有無による重複
    - https://www.example.com/index.html
    - https://example.com/index.html
- index.html有無による重複
    - https://example.com/index.html
    - https://example.com/

:::

:::tip GOOD

```html
<head>
...
<link rel="canonical" href="https://example.com/">
...
</head>
```

:::

</details>

## <span class="label-recommend">推奨</span> 多言語・多地域サイトの対応

`hreflang`属性を指定した`rel="alternate"`を使用して、異なる言語・地域用のページを明示する。

※ページ内容が全く同じ場合のみ指定する

<details open>
<summary>詳細</summary>

異なる言語・地域用のページがある場合は、`hreflang`属性を指定した`rel="alternate"`を使用して、異なる言語・地域用のページのURLを検索エンジンに伝えます。

:::tip GOOD

- 日本語ページ
    - `https://example.com/ja/`
- アメリカ向け英語ページ
    - `https://example.com/en-us/`
- イギリス向け英語ページ
    - `https://example.com/en-gb/`
- その他の英語圏向け英語ページ
    - `https://example.com/en/`

の場合、下記の設定で日本語圏で検索した場合は日本語ページ、アメリカで検索した場合はアメリカ向け英語ページ…が、検索結果に表示されます。

```html
<head>
...
<!-- 日本語ページ -->
<link rel="alternate" href="https://example.com/ja/" hreflang="ja">
<!-- アメリカ向け英語ページ -->
<link rel="alternate" href="https://example.com/en-us/" hreflang="en-us">
<!-- イギリス向け英語ページ -->
<link rel="alternate" href="https://example.com/en-gb/" hreflang="en-gb">
<!-- その他の英語圏向け英語ページ -->
<link rel="alternate" href="https://example.com/en/" hreflang="en">
...
</head>
```

:::

:::note 言語・地域コード一覧

- [言語コード（ISO 639-1）一覧](https://ja.wikipedia.org/wiki/ISO_639-1%E3%82%B3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7)
- [地域コード（ISO 3166-1）一覧](https://ja.wikipedia.org/wiki/ISO_3166-1_alpha-2)

:::

</details>

## <span class="label-recommend">推奨</span> パンくずリスト

JSON-LDを使用して構造化データをマークアップする。

<details open>
<summary>詳細</summary>

ページ上のパンくずリストは人間の目から見てパンくずリストだと判断できますが、検索エンジンには判断が難しい可能性があります。  
パンくずリストを表示する場合は、パンくずリストの構造化データマークアップを使用します。

:::tip GOOD

```html
<head>
  <title>Award Winners</title>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Books",
      "item": "https://example.com/books"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Science Fiction",
      "item": "https://example.com/books/sciencefiction"
    },{
      "@type": "ListItem",
      "position": 3,
      "name": "Award Winners"
    }]
  }
  </script>
</head>
```

:::

:::note 構造化データのテスト

マークアップした構造化データは、下記から検証ができます。

- Google 検索セントラル「[構造化データ マークアップをテストする](https://developers.google.com/search/docs/appearance/structured-data)」

:::

</details>

## <span class="label-recommend">推奨</span> SNSシェア用の設定

SNSシェアボタンを設置したページにはOGP（Open Graph Protcol）を設定する。

<details open>
<summary>詳細</summary>

SNSシェアした際に意図しない画像やテキストが抜粋されてしまうことを避けるため、OGP（Open Graph Protcol）で表示されるテキストや画像を設定します。

:::tip GOOD

```html
<!-- Open Graph -->
<meta property="og:title" content="ページのタイトル">
<meta property="og:type" content="website">
<meta property="og:url" content="https://example.com/">
<meta property="og:site_name" content="サイト名">
<meta property="og:description" content="トップページの説明">
<meta property="og:locale" content="ja_JP">
<meta property="og:image" content="https://example.com/assets/img/ogimage.jpg">

<!-- Twitter固有設定 -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@twitter_acount">
```

:::

:::note OGPの仕様

サンプルコード以外のOGPパラメータは、下記を参照してください。

- [The Open Graph protocol](https://ogp.me/)

:::

</details>
