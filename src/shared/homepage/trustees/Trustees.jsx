import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

// import {TRUSTEES} from '../../../graphql/queries'

const Trustees = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityTrustee {
        nodes {
          id
          image {
            asset {
              id
              title
              url
            }
          }
          name
          role
        }
      }
    }
  `)
  console.log(data)

  return null
}

export default Trustees
