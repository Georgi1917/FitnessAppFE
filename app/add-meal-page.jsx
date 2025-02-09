import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

function AddMeal() {

    return (
        <View style={styles.outerContainer}>

            <TextInput style={styles.textInput} placeholder="Search For A Meal"/>

            <View style={styles.buttonContainer}>

                <TouchableOpacity style={styles.buttonStyle}>

                    <Text style={styles.buttonText}>
                        Search For Meal
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle}>

                    <Link href="/custom-meal-page" style={styles.buttonText}>
                        Add Custom Meal
                    </Link>

                </TouchableOpacity>

            </View>

        </View>
    )

}

const styles = StyleSheet.create(
    {
        outerContainer: {
            flex: 1,
            backgroundColor: "#1C1C1C",
        },
        textInput: {
            backgroundColor: "#fff",
            margin: 10,
            borderRadius: 12,
        },
        buttonContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
        },
        buttonStyle: {
            backgroundColor: "#E0FE10",
            padding: 10,
            margin: 10,
            borderRadius: 10,
        },
        buttonText: {
            color: "#1D2228",
            textTransform: "uppercase",
            textAlign: "center",
        }
    }
)

export default AddMeal;