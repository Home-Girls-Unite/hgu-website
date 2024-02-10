import React from 'react'
import {PortableText} from '@portabletext/react'

import ContactForm from './ContactForm'
import Location from './Location'

import '../../styles/pages/contactUs.scss'

const FORM_SLUG = 'prefer-we-call-you'
const ADDRESS_SLUG = 'company-address-number'

const ContactUs = ({page}) => (
  <React.Fragment>
    <section className='contact-heading'>
      <h1 className='base-heading'>Want To Work Together?</h1>
      <p>Contact us, and let's discover how we can help your organization become even greater.</p>
    </section>
    <section className='contact-us'>
      {
        page.sections?.map(section => (
          <div key={section.id} className='contact-section'>
            <h2>{section.title}</h2>
            <PortableText value={section._rawDescription} />
            {section.slug.current === FORM_SLUG && <ContactForm />}
            {section.slug.current === ADDRESS_SLUG && <Location address={section.description[0].children[0].text} />}
          </div>
        ))
      }
    </section>
  </React.Fragment>
)

export default ContactUs
