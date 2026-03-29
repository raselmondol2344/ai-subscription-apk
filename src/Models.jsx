
import { use } from 'react';
import ModelsCard from './Component/ModelsCard';

const Models = ({modalPromise ,carts ,setcarts}) => {
    const models = use(modalPromise)
    // console.log(models);
    
    return (
        <div className='py-10 max-w-7xl mx-auto'>
            <div className='text-center  space-y-1.5'>
                <h3 className='text-5xl font-bold '>Choose Your AI Model</h3>
                <p className=' text-gray-400'>One subscription gives you access to all frontier AI models</p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {models.map(models => (
                 <ModelsCard key={models.id} models = {models} carts={carts} setcarts ={setcarts}/>

                ))};
                
                </div>
            
        </div>
        
      
    );
};

export default Models;