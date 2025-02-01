import { Link } from "expo-router";
import {View, Text, StyleSheet} from "react-native";

function Nav() {
    return (
        <View style={styles.viewStyle}>
            <Link href="/" style={styles.linkStyle}>Profile</Link>
            <Link href="/nutrition-page" style={styles.linkStyle}>Nutrition</Link>
            <Link href="/workout-page" style={styles.linkStyle}>Workouts</Link>
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
        linkStyle: {
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