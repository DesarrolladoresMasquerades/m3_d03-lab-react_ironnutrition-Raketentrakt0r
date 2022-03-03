import { useState } from "react";
import { Card, Col, Button } from "antd";

function FoodBox(props) {
     const [food,setFood] = useState(props)
     console.log(props)
      return (
        <Col>
          <Card title={food.FoodBox.name} style={{ width: 230, height: 300, margin: 10 }} >
            <img src={food.FoodBox.image} height={60} alt="food" />
            <p>Calories:{food.FoodBox.calories}</p>
            <p>Servings: {food.FoodBox.name}</p>
            <p>
              <b>Total Calories: {food.FoodBox.calories * food.FoodBox.servings} </b> kcal
            </p>
            <Button type="primary"> Delete </Button>
          </Card>
        </Col>
      );
    }
    
    export default FoodBox;
    