
import { View, Text, StyleSheet } from "react-native";

function ProfileStats() {

    return(

        <View style={styles.container}>

            <View style={styles.individualCont}>
                <Text style={styles.textStyle}>Workouts</Text>
                <Text style={styles.textStyle}>Completed</Text>
                <Text style={styles.textStyle}>0</Text>
            </View>
            
            <View style={styles.individualCont}>
                <Text style={styles.textStyle}>Average</Text>
                <Text style={styles.textStyle}>Calories</Text>
                <Text style={styles.textStyle}>0</Text>
            </View>

            <View style={styles.individualCont}>
                <Text style={styles.textStyle}>Total</Text>
                <Text style={styles.textStyle}>Steps</Text>
                <Text style={styles.textStyle}>0</Text>
            </View>
            

        </View>

    )

}

const styles = StyleSheet.create(
    {
        container: {
            display: "flex",
            flexDirection: "row",
            gap: 5,
            margin: 10,
            height: 80,
        },
        textStyle: {
            color: "#fff",
            textAlign: "center",
        },
        individualCont: {
            backgroundColor: "#2A2E37",
            flex: 1,
            borderRadius: 10,
            alignContent: "center",
            justifyContent: "center",
        }
    }
)

export default ProfileStats;