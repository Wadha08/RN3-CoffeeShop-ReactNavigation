import { createBottomTabNavigator } from "react-navigation-tabs";
//import StackNav from "./StackNav";
import CoffeeTab from "./CoffeeTab";
import ProfileTab from "./ProfileTab";
import HistoryTab from "./HistoryTab";
const BottomNav = createBottomTabNavigator({
  Profile: ProfileTab,
  CoffeeTab: CoffeeTab,
  HistoryTab: HistoryTab
});
export default BottomNav;
