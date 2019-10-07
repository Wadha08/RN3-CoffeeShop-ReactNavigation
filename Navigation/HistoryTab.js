import Profile from "../Components/Profile";
import { createStackNavigator } from "react-navigation-stack";
import CoffeeCart from "../Components/CoffeeList";
import HistoryCart from "../Components/History/HistoryCart";
const HistoryTab = createStackNavigator(
  {
    History: HistoryCart,
    Cart: CoffeeCart
  },
  {
    navigationOptions: {
      tabBarlabel: "History",
      tabBarIcon: () => <icon type="Octicon" name="Person" size={20} />
    }
  }
);
export default HistoryTab;
