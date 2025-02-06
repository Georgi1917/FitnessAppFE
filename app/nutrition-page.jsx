import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Link } from "expo-router";

function NutritionPage() {

    const today = new Date().toDateString();

    return(
        <View style={styles.outerContainer}>

            <View>
                <Text style={styles.textStyle}>
                    Meals For Today ({today})
                </Text>
            </View>
            
            <TouchableOpacity style={styles.buttonStyle}>
                <Link href="/add-meal-page" style={styles.buttonText}>
                    Add Meal
                </Link>
            </TouchableOpacity>

        </View>
    )

}

const styles = StyleSheet.create(
    {
        outerContainer: {
            flex: 1,
            backgroundColor: "#1C1C1C",
        },
        textStyle: {
            color: "#fff",
            textAlign: "center",
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

export default NutritionPage;