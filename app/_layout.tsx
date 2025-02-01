import { Slot } from "expo-router";
import Nav from "./nav";
import { View, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
      <View style={styles.container}>
          <Slot />
          <Nav />
      </View>
  );
}

const styles = StyleSheet.create(
  {
      container: {
          flex: 1,
          justifyContent: "space-between"
      }
  }
)
