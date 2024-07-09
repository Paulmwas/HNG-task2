import Header from '../components/Header'
import Footer from '../components/Footer'


const Cart = () => {
  return (
    <div>
      <Header/>
      <div className="cart grid grid-cols-2">
        <div className="cartimgs">
          <div className="mycart">
            <img src="" alt="" />
            <div className="my-desc"></div>
          </div>
        </div>
        <div className="mybtns"></div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart

