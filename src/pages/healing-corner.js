import React from 'react'
import {Link} from 'gatsby'
import {PortableText} from '@portabletext/react'

import '../styles/pages/healingCorner.scss'
import {Button} from '../shared/Buttons'

const HealingCornerPage = ({pages, uri}) => {
  console.log(pages)
  const data = pages.find(page => page.slug.current === uri.replace('/', '')) || {}

  return (
    <React.Fragment>
      <h1 className='base-heading'>{data.name}</h1>
      <section className='sections'>
        {
          data.sections.map(section => (
            <div className='section' key={section.id}>
              <h2>{section.title}</h2>
              <div className='information'>
                <PortableText value={section.description} />
                {
                  section.buttons.length > 0 && (
                    <div className='button-group'>
                      {
                        section.buttons.map(button => (
                          <Button className='action' key={button.id}>
                            {
                              button.link.startsWith('http') ?
                              <a href={button.link} target='_blank'>{button.label}</a> :
                              <Link to={button.link}>{button.label}</Link>
                            }
                          </Button>)
                        )
                      }
                    </div>
                  )
                }
              </div>
            </div>
          ))
        }
      </section>
    </React.Fragment>
  )
}

export default HealingCornerPage
