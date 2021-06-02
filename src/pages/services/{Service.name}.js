import * as React from "react"
import { graphql } from "gatsby"
import ServiceView from "../../views/service-view"

function Service(props) {
    const { service } = props.data
    return <ServiceView service={service} />
}

export default Service

export const query = graphql`
  query($id: String!) {
    service(id: { eq: $id }) {
      name
    }
  }
`