import React from 'react'
import {Helmet} from 'react-helmet'

import Header from '../shared/Header'
import Footer from '../shared/footer/Footer'
import LetsTalk from '../shared/LetsTalk'

import {ORGANIZATION_NAME} from '../lib/constants'

import './layout.scss'

const TemplateWrapper = ({children}) => (
  <main className="homepage">
    <Helmet
      title={ORGANIZATION_NAME}
      meta={[
        {name: 'description', content: `${ORGANIZATION_NAME} (HGU) is a  Community Interest Company (CIC) that provides a safe space for eldest daughters from immigrant homes.`},
        {name: 'keywords', content: 'women, daughters, eldest, support'}
      ]}
    />
    <Header />
    {children}
    <LetsTalk />
    <Footer />
  </main>
)

export default TemplateWrapper
