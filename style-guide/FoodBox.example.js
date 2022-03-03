// Style Guide:
// In this file you can find a reference example of the structure
// that the component should have.
// Remember to import Ant Design components before using them.
import App from "../src/App";
import { Card, Col, Button } from "antd";

// Iteration 2
function FoodBox(props) {
console.log(props)
  props.App(foodsData) //we send the state up to the nearest parent
    setFoodsData({
      name:"",
      calories:Number,
      image:"",
      servings:Number
    })
  return (
    <Col>
      <Card title={foodsData.name} style={{ width: 230, height: 300, margin: 10 }} >
        <img src={food.image} height={60} alt="food" />
        <p>Calories:{foods.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {foods.calories} * {food.servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
