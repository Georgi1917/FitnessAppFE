import { Text, View, ScrollView, Image, StyleSheet } from "react-native";
import Nav from "./nav";

export default function Index() {
  return (
    <View
      style={styles.containerStyle}
    >

      <Image
      source={styles.imageSource}
      style={styles.imageStyles}
      ></Image>

      <Text
        style={styles.textStyles}
      >
        Georgi Georgiev
      </Text>

      <Nav/>

    </View>
  );
}

const styles = StyleSheet.create(
  {
    containerStyle: {
      flex: 1,
      backgroundColor: "#1C1C1C",
    },
    imageStyles: {
      width: 200, 
      height: 200, 
      borderRadius: 100, 
      alignSelf: "center",
      margin: 15,
    },
    imageSource: {
      uri: "https://wcvchurch.ca/wp-content/uploads/2019/05/male-placeholder-3.gif"
    },
    textStyles: {
      fontSize: 25,
      textAlign: "center",
      marginBottom: 20,
      color: "#fff",
    }
  }
)
