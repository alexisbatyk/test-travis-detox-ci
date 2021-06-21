/**
 * @format
 */

import "react-native-gesture-handler";
import * as React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { NavigationContainer } from "@react-navigation/native";

const AppExpo = () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => AppExpo);
