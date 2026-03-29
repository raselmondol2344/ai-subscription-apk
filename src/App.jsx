import "./App.css";
import Banner from "./Component/Bannar";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Models from "./Models";
import Cart from "./Component/Cart";
import { useState } from "react";

const getModels = async () => {
  const res = await fetch("/public/model.json");
  return res.json();
};

const modalPromise = getModels();
function App() {
  const [activeTab , setActiveTab] = useState("model");
  // console.log(activeTab);


  const[carts , setcarts] = useState([]);
  // console.log(carts);




  return (
    <>
      <Navbar />
      <Banner />
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent p-10">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Models"
          onClick={()=>setActiveTab("model")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab  rounded-full w-40"
          aria-label="Cart"
          onClick={()=>setActiveTab("cart")}
          
        />
       
      </div>
      { activeTab === "model" && <Models modalPromise={modalPromise} 
      carts={carts} setcarts ={setcarts}/>}
      
      
      { activeTab === "cart" && <Cart carts ={carts} setcarts = {setcarts}/> }
      <Footer />
    </>
  );
}

export default App;
