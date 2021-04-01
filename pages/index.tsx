import { NextPage } from 'next'

import { Elements } from '@stripe/react-stripe-js'
import getStripe from '../utils/get-stripejs'

import ElementsForm from '../components/ElementsForm'

const DonatePage: NextPage = () => {
  return (
    <div className="container">
      <div className="page-container">
        <h1>Pagamento ingresso na plataforma</h1>
        <Elements stripe={getStripe()}>
          <ElementsForm />
        </Elements>
      </div>
    </div>
  )
}

export default DonatePage
