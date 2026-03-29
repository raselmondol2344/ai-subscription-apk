import React, { useState } from 'react';


const ModelsCard = ({models,carts ,setcarts}) => {
    const [isSubscribe,setIsSubscribe] = useState(false)
     
   
    
    const handleSubscription = () => {
        
            setIsSubscribe(true)
            setcarts([...carts,models])
           
            
            
        
    };
    
    
    return (
         <div className='shadow-lg rounded-lg border overflow-hidden border-zinc-300'>
                    
                    <div className=' h-56 flex justify-center items-center bg-zinc-200'>
                        <img className='h-40 w-40 object-contain' src={models.image} alt="" />
                    </div>

                    <div className='p-4 space-y-3'>
                        <h3 className='text-2xl font-bold'>{models.title}</h3>
                        <p>{models.description}</p>
                        <div className='text-2x font-bold'>${models.price}/month
                        
                        </div>
                        <button onClick={handleSubscription} className='btn rounded-full bg-red-500 text-white font-bold w-full mt-5'>{isSubscribe? "Subscribed" : "Subscribe Now"}</button>
                        
                    </div>
                </div>
                
            );
    
};

export default ModelsCard;