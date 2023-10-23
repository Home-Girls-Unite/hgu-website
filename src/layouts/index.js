import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import Header from '../shared/Header'
import Footer from '../shared/footer/Footer'
import LetsTalk from '../shared/LetsTalk'
import Title from '../shared/pages/Title'

import {QUICK_LINKS} from '../lib/constants'

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
          spotlight {
            ...on SanityPhoto {...Photo}
            ...on SanityShowcase {...Showcase}
          }
        }
      }
      allSanityEvents {
        nodes {
          id
          sections {
            _rawDescription
            id
            title
          }
          eventDate
          title
          slug {
            current
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
          url
        }
      }
    }
    fragment Showcase on SanityShowcase {
      id
      name
      image {
        asset {
          gatsbyImageData
          url
        }
      }
    }
  `)

  if (activeLinks.includes(uri)) {
    return (
      <main className="homepage">
        <Title uri={uri} />
        <Header />
        {
          React.cloneElement(
            children,
            {
              page: data.allSanityPage.nodes.find(node => node.slug.current === uri.replace('/', '')) || {},
              events: data.allSanityEvents.nodes
            }
          )
        }
        <LetsTalk />
        <Footer />
      </main>
    )
  } else {
    return children
  }
}

export default TemplateWrapper
