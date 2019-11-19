import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./src/screens/login/Login";
import Scan from "./src/screens/scan/Scan";
import Processing from "./src/screens/processing/Processing";
import Details from "./src/screens/details/Details";
import Main from "./src/screens/main/Main";

const MainNavigator = createStackNavigator({
    Login : {
        screen: Login,
        navigationOptions: {
            header: null,
        },
    },
    Main: {
        screen: Main
    },
    Scan: {
        screen: Scan,
        navigationOptions: {
            header: null,
        },
    },
    Processing: {
        screen: Processing,
        navigationOptions: {
            header: null,
        },
    },
    Details: {
        screen: Details,
        navigationOptions: {
            header: null,
        },
    },
});

const App = createAppContainer(MainNavigator);

export default App;