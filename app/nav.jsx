import { Link } from "expo-router";
import {View, Text, StyleSheet} from "react-native";

function Nav() {
    return (
        <View style={styles.viewStyle}>
            <Link href="/">Profile</Link>
            <Link href="/nutrition-page">Nutrition</Link>
            <Text style={styles.textStyle}>Workouts</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        viewStyle: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: '#1E90FF',
        },
        textStyle: {
            fontSize: 18,
            flex: 1,
            padding: 10,
            textAlign: 'center',
            margin: 0,
            color: '#F5F5F5',
        }
    }
)

export default Nav;