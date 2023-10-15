import * as React from "react"

import Header from "../shared/Header"
import Footer from "../shared/footer/Footer"
import LetsTalk from "../shared/LetsTalk"
import Mission from "../shared/Mission"
import Showcases from "../shared/homepage/showcases/Showcases"
import Trustees from "../shared/homepage/trustees/Trustees"

import {ORGANIZATION_NAME} from '../lib/constants'

import "../styles/homepage.scss"

const IndexPage = () => {
  return (
    <main className="homepage">
      <Header />
      <h1 className="base-heading">{ORGANIZATION_NAME.replace(/\s/g, '')}</h1>
      <h4 className="base-sub-heading">Creating Safe Spaces For Eldest Daughters</h4>
      <Showcases />
      <Trustees />
      <Mission />
      <LetsTalk />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
