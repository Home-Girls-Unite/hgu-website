import * as React from "react"

import Information from "../shared/homepage/Information"
import Mission from "../shared/Mission"
import Showcases from "../shared/homepage/showcases/Showcases"
import Listen from "../shared/homepage/Listen"
import Trustees from "../shared/homepage/trustees/Trustees"

import {ORGANIZATION_NAME} from '../lib/constants'

const IndexPage = ({photos}) => (
  <React.Fragment>
    <h1 className="base-heading">{ORGANIZATION_NAME.replace(/\s/g, '')}</h1>
    <h4 className="base-sub-heading">Creating Safe Spaces For Eldest Daughters</h4>
    <Showcases />
    <Information photos={photos} />
    <Listen />
    <Trustees />
    <Mission />
  </React.Fragment>
)

export default IndexPage
