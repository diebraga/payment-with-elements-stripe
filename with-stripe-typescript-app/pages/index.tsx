import { NextPage } from 'next'

import { Elements } from '@stripe/react-stripe-js'
import getStripe from '../utils/get-stripejs'

import Layout from '../components/Layout'
import ElementsForm from '../components/ElementsForm'

const DonatePage: NextPage = () => {
  return (
    <Layout title="Donate with Elements | Next.js + TypeScript Example">
      <div className="page-container">
        <h1>Pagamento com Elements</h1>
        <Elements stripe={getStripe()}>
          <ElementsForm />
        </Elements>
      </div>
    </Layout>
  )
}

export default DonatePage
