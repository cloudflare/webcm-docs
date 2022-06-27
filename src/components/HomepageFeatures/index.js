import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: 'Performant',
    Svg: require('@site/static/img/fast.svg').default,
    description: (
      <>
        WebCM provides a simple and efficient way to run Managed Components
        server side. Run third-party components on your website without heavily
        loading the browser.
      </>
    ),
  },
  {
    title: 'Secure & Private',
    Svg: require('@site/static/img/secure.svg').default,
    description: (
      <>
        By default, a Component cannot run any JavaScript code in the browser.
        This means your users are protected and you are always choosing how much
        control you're giving to a Component.
      </>
    ),
  },
  {
    title: 'Free & Open Source',
    Svg: require('@site/static/img/opensource.svg').default,
    description: (
      <>
        You can use it, improve it, run or build your own Managed Components.
        There is also a growing list of open-sourced Components you can use
        today.
      </>
    ),
  },
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
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
  )
}
