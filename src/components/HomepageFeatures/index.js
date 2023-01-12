import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "ガイドライン",
    img: "/img/img-guidelines.png",
    description: (
      <>
        成果物の品質維持と効率化を目的とした
        <br />
        Webサイト制作に必要なルールを定義しています。
      </>
    ),
    href: "/docs/guideline/intro/",
  },
  {
    title: "命名規則",
    img: "/img/img-naming-convention.png",
    description: (
      <>
        CSSやJavaScriptにおける命名ルールを定義しています。
        <br />
        また、命名でよく使われる単語についてもまとめています。
      </>
    ),
    href: "/docs/naming_convention/",
  },
];

function Feature({ title, img, description, href }) {
  return (
    <div className={clsx("col col--6")}>
      <a className={styles.featureLink} href={href}>
        <div className="text--center">
          <img src={img} alt="" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
