import React from 'react'
import Layout from '../components/layout'
import { META } from "../utils/constants"
import Head from "../components/Elements/Head"
import PageHeader from "../components/Elements/PageHeader"

export default ({ location }) =>
  <Layout location={location}>
    <Head
      {...META.contact}
      image={META.common.image}
    />
    <PageHeader title='Contact' />
  </Layout>

