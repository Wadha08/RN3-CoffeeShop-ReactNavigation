import Profile from "../Components/Profile";
import Login from "../Components/Login";
import CoffeeList from "../Components/CoffeeList";
import { createStackNavigator } from "react-navigation-stack";

const ProfileTab = createStackNavigator(
  {
    Login: Login,
    Profile: Profile,
    List: CoffeeList
  },
  {
    navigationOptions: {
      tabBarlabel: "Profile",
      tabBarIcon: () => <icon type="Octicon" name="Person" size={20} />
    }
  }
);
export default ProfileTab;
