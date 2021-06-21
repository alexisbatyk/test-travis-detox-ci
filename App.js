/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Hello" component={Hello} />
      <Stack.Screen name="World" component={World} />
      <Stack.Screen name="Goodbye" component={Goodbye} />
    </Stack.Navigator>
  );
};

const Home = ({ navigation }) => {
  const navigate = screen => {
    setTimeout(() => {
      navigation.navigate(screen);
    }, 2000);
  };
  return (
    <View
      testID="welcome"
      style={{
        flex: 1,
        paddingTop: 20,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text style={{ fontSize: 25, marginBottom: 30 }}>Welcome</Text>
      <TouchableOpacity testID="hello_button" onPress={() => navigate("Hello")}>
        <Text style={{ color: "blue", marginBottom: 20 }}>Say Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity testID="world_button" onPress={() => navigate("World")}>
        <Text style={{ color: "blue", marginBottom: 20 }}>Say World</Text>
      </TouchableOpacity>
      <TouchableOpacity
        testID="goodbye_button"
        onPress={() => navigate("Goodbye")}>
        <Text style={{ color: "blue", marginTop: 50, marginBottom: 20 }}>
          Say Goodbye
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Hello = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 20,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text style={{ fontSize: 25 }}>Hello!!!</Text>
    </View>
  );
};

const World = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 20,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text style={{ fontSize: 25 }}>World!!!</Text>
    </View>
  );
};

const Goodbye = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 20,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text style={{ fontSize: 25 }}>Goodbye!!!</Text>
    </View>
  );
};

const ExApp = () => {
  const [greetings, setGreetings] = useState("");

  const renderAfterButton = () => {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text style={{ fontSize: 25 }}>{greetings}!!!</Text>
      </View>
    );
  };

  if (greetings !== "") return renderAfterButton();
  return (
    <View
      testID="welcome"
      style={{
        flex: 1,
        paddingTop: 20,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text style={{ fontSize: 25, marginBottom: 30 }}>Welcome</Text>
      <TouchableOpacity
        testID="hello_button"
        onPress={() => setGreetings("Hello")}>
        <Text style={{ color: "blue", marginBottom: 20 }}>Say Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity
        testID="world_button"
        onPress={() => setGreetings("World")}>
        <Text style={{ color: "blue", marginBottom: 20 }}>Say World</Text>
      </TouchableOpacity>
      <TouchableOpacity
        testID="goodbye_button"
        onPress={() => setGreetings("Goodbye, World")}>
        <Text style={{ color: "blue", marginTop: 50, marginBottom: 20 }}>
          Say Goodbye
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
