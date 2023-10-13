import * as React from "react"
import Header from "../shared/Header"
import Footer from "../shared/footer/Footer"
import Showcases from "../shared/homepage/showcases/Showcases"
import Trustees from "../shared/homepage/trustees/Trustees"

import "../styles/homepage.scss"

const IndexPage = () => {
  return (
    <main className="homepage">
      <Header />
      <h1 className="base-heading">HomeGirlsUnite</h1>
      <h4 className="base-sub-heading">Creating Safe Spaces For Eldest Daughters</h4>
      <Showcases />
      <Trustees />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
