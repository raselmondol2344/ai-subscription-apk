import React from "react";

const Cart = ({ carts, setcarts }) => {
  // console.log(carts);

  const totalPrice = carts.reduce((sum,items) => sum + items.price ,0);

  const handlePayment  = () =>{
    setcarts([])
  }

  const handleDelete = (items) => {
    // console.log(items);
    const filterArray = carts.filter(e => e.id !== items.id) 
    setcarts(filterArray)
  }
  return (
    <div className="p-10 max-w-7xl mx-auto ">
      <h2 className="text-2xl font-bold flex  justify-start mb-10 ">Your Carts</h2>
      {
        carts.length === 0 ? <div className="flex justify-center text-2xl font-semibold">Empty Cart</div> :
        <>
        {carts.map((items) => (
        <div key ={items.id} className="flex items-center justify-between p-5 mb-5 border border-gray-200 shadow-lg  rounded-lg">
          <div >
            <img className="h-20 w-20 object-contain"src={items.image}alt=""/>
          </div>
          <div className="text-2xl font-bold">
            {items.title}
          </div>

          <div className="flex gap-5">
            <div className="text-2xl font-bold ">
            ${items.price}/Month</div>
          </div>

          <button onClick={()=>handleDelete(items)} className="btn btn-error rounded-full">Delete</button>
        </div>
      ))}

      <div className="flex justify-between bg-gray-700 text-white text-2xl font-bold
      rounded-lg p-5 mt-10">
        <div>Total</div>
        <div>{totalPrice}</div>
      </div>

      <button onClick={handlePayment} className="bg-red-500  text-white rounded-lg w-full p-3 mt-10 text-2xl font-bold text-center">Procced to Checkout</button>
        </>
      }
    </div>
  );
};

export default Cart;
