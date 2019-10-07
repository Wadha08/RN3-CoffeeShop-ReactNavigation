import { createStackNavigator } from "react-navigation-stack";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeCart from "../Components/CoffeeCart";
const CoffeeTab = createStackNavigator({
  List: CoffeeList,
  Detail: CoffeeDetail
});
export default CoffeeTab;
