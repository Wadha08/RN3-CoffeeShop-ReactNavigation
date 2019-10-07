import { createAppContainer } from "react-navigation";
import MyStackNav from "./StackNav";

import BottomTab from "./BottomNav";

const AppContainer = createAppContainer(BottomTab);

export default AppContainer;
