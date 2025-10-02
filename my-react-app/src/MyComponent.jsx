import { useState } from "react";

function MyComponents (){

        const [name, setName]= useState("Guest");
        function handleNameChange(e){
            setName(e.target.value)
        }

        
        const [quantity, setQuantity]= useState(1);
        function quantityChanger(e){
            setQuantity(e.target.value)
        }

        
        const [comment, setComment]= useState("");
        function commentChange(e){
            setComment(e.target.value)
        }

        
        const [payment, setPayment]= useState(1);
        function paymentMethod(e){
            setPayment(e.target.value)
        }

        
        const [shipping, setShipping]= useState("Delivery");
        function ShippingMethod(e){
            setShipping(e.target.value)
        }
        return(
            <>
                <div>
                    <input type="text" class="background-red-200" value={name}  onChange={handleNameChange}/>

                    <p>Name: {name}</p>
                    <input   value={quantity} type="number" onChange={quantityChanger}/>

                    <p>Quantity: {quantity}</p>

                    <textarea  value={comment} placeholder="Enter Delivery Address" onChange={commentChange}/>
                    <p>Comment: {comment}</p>

                    <select value={payment} onChange={paymentMethod}>
                        <option value="">Select an option</option>
                        <option value="visa">Visa</option>
                        <option value="giftcard">Giftcard</option>
                        <option value="mastercard">Mastercard</option>
                    </select>
                    <p>You've Selected {payment} method</p>
                    <label>
                        <input type="radio" value={"Pick Up"} checked={shipping==="Pick Up"} onChange={ShippingMethod} />
                        Pick Up
                    </label>
                    <br />
                    <label>
                        <input type="radio" value={"Delivery"} checked={shipping==="Delivery"} onChange={ShippingMethod} />

                        Delivery
                    </label>

                    <p>Shipping: {shipping}</p>
                </div>
            </>
        )
}

export default MyComponents;