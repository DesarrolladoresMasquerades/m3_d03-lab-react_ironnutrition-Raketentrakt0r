import logo from './logo.svg';
import './App.css';
import foodsDataJSON from "./foods.json";
import { useState } from 'react';
import FoodBox from './components/FoodBox';

function App() {
 
  const [foodsData,setFoodsData] = useState(foodsDataJSON)
  return (
    <div className='App' >
      <div >
          {foodsData.map((food) =>(
            <div>
                    
                    <FoodBox  FoodBox={food}/>
          </div>
          
          ))}

      </div>
      
      
      
      
    </div>
  );
}

export default App;
