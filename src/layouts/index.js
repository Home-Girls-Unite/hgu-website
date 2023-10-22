import React from 'react'
import {Helmet} from 'react-helmet'
import {graphql, useStaticQuery} from 'gatsby'

import Header from '../shared/Header'
import Footer from '../shared/footer/Footer'
import LetsTalk from '../shared/LetsTalk'

import {ORGANIZATION_NAME, QUICK_LINKS} from '../lib/constants'

import './layout.scss'

const TemplateWrapper = ({children, uri}) => {
  const activeLinks = QUICK_LINKS.map(link => link.path)
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
            _rawDescription
            buttons {
              id
              label
              link
            }
          }
          cover {
            ...on SanityPhoto {...Photo}
            ...on SanityShowcase {...Showcase}
          }
        }
      }
    }
    fragment Photo on SanityPhoto {
      id
      name
      image {
        asset {
          gatsbyImageData
        }
      }
    }
    fragment Showcase on SanityShowcase {
      id
      name
      image {
        asset {
          gatsbyImageData
        }
      }
    }
  `)

  if (activeLinks.includes(uri)) {
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
  } else {
    return children
  }
}

export default TemplateWrapper
