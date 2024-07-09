import { useState } from "react"
function UpdateCart()
{
    const [cart_count, setCart_count] = useState(0)
    const add_button = document.querySelector('add_button')
    function myCount(){
        add_button.document.getElementbyId('cart_count').innerHTML(setCart_count(cart_count+1))
    }
    return myCount

    // add_button.addEventListener('click', () => {

    //     let cart_count = document.getElementById('cart_count').innerHTML(myCount)
    //     const int_count = parseInt(cart_count)

    //     cart_count = int_count + 1
    // })

}
export default UpdateCart;
