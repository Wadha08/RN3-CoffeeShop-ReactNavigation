import CoffeeList from "../CoffeeList/index";
import CoffeeDetail from "../CoffeeDetail/index";
import CoffeeCart from "../CoffeeCart/index";
import Login from "../Login/index";
import HomePage from "../Components/HomePage";

const StackNav = createStackNavigator(
  {
    Home: HomePage,
    List: CoffeeList,
    Detail: CoffeeDetail,
    Cart: CoffeeCart,
    Login: Login
  },
  {
    initialRouteName: "Login"
  }
);

export default StackNav;
