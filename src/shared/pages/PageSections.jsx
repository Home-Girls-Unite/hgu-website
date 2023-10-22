import React from 'react'
import classnames from 'classnames'
import {Link} from 'gatsby'
import {PortableText} from '@portabletext/react'

import {Button} from '../Buttons'

import '../../styles/pages/pageSections.scss'

const PageSections = ({sections, className}) => (
  <section className={classnames('page-sections', className)}>
    {
      sections.map(section => (
        <div className='section' key={section.id}>
          <h2>{section.title}</h2>
          <div className='information'>
            <PortableText value={section._rawDescription} />
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
)

export default PageSections
