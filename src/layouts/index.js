import React, {useState, useEffect} from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import Header from '../shared/Header'
import Footer from '../shared/footer/Footer'
import LetsTalk from '../shared/LetsTalk'
import Title from '../shared/pages/Title'
import PageUnavailable from '../shared/pages/PageUnavailable'

import {QUICK_LINKS} from '../lib/constants'
import {findBySlug, pageHasData} from '../lib/tools'

import './layout.scss'

const TemplateWrapper = ({children, uri}) => {
  const [photo, setPhoto] = useState({})
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
            description {
              children {
                text
              }
            }
            _rawDescription
            buttons {
              id
              label
              link
            }
            images {...Photo}
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
      allSanityPhoto {
        nodes {...Photo}
      }
      allSanityPodcasts {
        nodes {
          id
          name
          releaseDate
          status
          link
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
      slug {
        current
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

  useEffect(
    () => {
      setPhoto(findBySlug({list: data.allSanityPhoto.nodes, slug: 'fencing'}))
    },
    [data.allSanityPhoto.nodes]
  )

  const page = findBySlug({list: data.allSanityPage.nodes, slug: uri.replace('/', '')})

  if (activeLinks.includes(uri)) {
    return (
      <main className="homepage">
        <Title uri={uri} />
        <Header />
        {
          (pageHasData(page, uri) || !photo.image) ?
          React.cloneElement(
            children,
            {
              page,
              events: data.allSanityEvents.nodes,
              photos: data.allSanityPhoto.nodes,
              podcasts: data.allSanityPodcasts.nodes
            }
          ) :
          (
            <PageUnavailable
              imageUrl={photo.image.asset.url}
              title='Under Construction'
              description='Follow us to learn more'
            />
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
