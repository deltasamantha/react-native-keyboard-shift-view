/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import RootNavigator from "./src/navigation/RootNavigator";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <RootNavigator />
      </SafeAreaView>
    </>
  );
};

export default App;
