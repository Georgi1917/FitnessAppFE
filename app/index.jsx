import { Text, View, ScrollView, Image, StyleSheet } from "react-native";
import Nav from "./nav";
import ProfileStats from "./profile-stats";
import CalorieChart from "./calorie-chart";

function Index() {

  return (
    <View style={styles.containerStyle}>

      <View style={styles.innerContainer}>
        
        <View style={styles.profile}>

            <Image source={styles.imageSource} style={styles.imageStyles}></Image>

            <View style={styles.welcomeTextContainer}>

                <Text style={styles.welcomeText}>
                  Welcome Back,
                </Text>

                <Text style={styles.textStyles}>
                  Georgi Georgiev
                </Text>

            </View>

        </View>

        <ProfileStats/>

        <CalorieChart/>

      </View>

    </View>
  );

}

const styles = StyleSheet.create(
  {
    innerContainer: {
      flex: 1,
    },
    containerStyle: {
      flex: 1,
      backgroundColor: "#1C1C1C",
    },
    imageStyles: {
      width: 100, 
      height: 100, 
      borderRadius: 100, 
      alignSelf: "center",
      margin: 15,
    },
    imageSource: {
      uri: "https://wcvchurch.ca/wp-content/uploads/2019/05/male-placeholder-3.gif"
    },
    textStyles: {
      fontSize: 22,
      color: "#fff",
      textTransform: "uppercase",
    },
    welcomeTextContainer: {
      alignContent: "center",
      justifyContent: "center",
    },
    welcomeText: {
      fontSize: 15,
      color: "#7E8188",
      textTransform: "uppercase",
    },
    profile: {
      display: "flex",
      flexDirection: "row",
    }
  }
)

export default Index;
