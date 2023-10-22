import React from 'react'
import {Helmet} from 'react-helmet'
import {graphql, useStaticQuery} from 'gatsby'

import Header from '../shared/Header'
import Footer from '../shared/footer/Footer'
import LetsTalk from '../shared/LetsTalk'

import {ORGANIZATION_NAME} from '../lib/constants'

import './layout.scss'

const TemplateWrapper = ({children}) => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPage {
        nodes {
          id
          name
          slug {
            current
          }
          sections {
            id
            title
            slug {
              current
            }
            description {
              children {
                text
                _type
              }
              _type
              style
            }
            buttons {
              id
              label
              link
            }
          }
        }
      }
    }
  `)

  return (
    <main className="homepage">
      <Helmet
        title={ORGANIZATION_NAME}
        meta={[
          {name: 'description', content: `${ORGANIZATION_NAME} (HGU) is a  Community Interest Company (CIC) that provides a safe space for eldest daughters from immigrant homes.`},
          {name: 'keywords', content: 'women, daughters, eldest, support'}
        ]}
      />
      <Header />
      {React.cloneElement(children, {pages: data.allSanityPage.nodes})}
      <LetsTalk />
      <Footer />
    </main>
  )
}

export default TemplateWrapper
