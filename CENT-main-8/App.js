import React from "react";
import { StatusBar, LogBox, View, Platform, StyleSheet } from "react-native";
import Routing from "./src/boot/routing";
import { normalized } from "./src/utils/AppConstants";
LogBox.ignoreAllLogs(true);

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"transparent"} barStyle="dark-content" />
      <Routing />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" && normalized.hp("5%"),
  },
});
export default App;
