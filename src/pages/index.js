import React, {useState, useCallback} from "react"

import BookSession from "../shared/pages/BookSession"
import Information from "../shared/homepage/Information"
import Mission from "../shared/Mission"
import Showcases from "../shared/homepage/showcases/Showcases"
import Listen from "../shared/homepage/Listen"
import Trustees from "../shared/homepage/trustees/Trustees"

import {ORGANIZATION_NAME} from '../lib/constants'

const IndexPage = ({photos}) => {
  const [seenDialog, setSeenDialog] = useState(false)
  const [showDialog, setShowDialog] = useState(false)

  const handleScroll = useCallback(() => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight

    if (bottom && !seenDialog)
      setShowDialog(true)
  }, [seenDialog])

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  const dismissDialog = event => {
    if (event)
      event.preventDefault()

    setSeenDialog(true)
    setShowDialog(false)
  }

  return (
    <React.Fragment>
      <h1 className="base-heading">{ORGANIZATION_NAME.replace(/\s/g, '')}</h1>
      <h4 className="base-sub-heading">Creating Safe Spaces For Eldest Daughters</h4>
      <Showcases />
      <Information photos={photos} />
      <Listen />
      <Trustees />
      <Mission />
      {
        (!seenDialog && showDialog) && <BookSession dismissDialog={dismissDialog} />
      }
    </React.Fragment>
  )
}

export default IndexPage
