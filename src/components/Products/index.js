import {Redirect, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'
import Header from '../Header'

const Products = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/" />
  }
  return (
    <div>
      <Header />
      <div className="products-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="image"
        />
      </div>
    </div>
  )
}
export default withRouter(Products)
