import { View, Text, StyleSheet, TouchableOpacity } from "react-native"


function NutritionPage() {

    return(
        <View style={styles.outerContainer}>

            <Text style={styles.textStyle}>
                Meal 1
            </Text>
            
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.buttonText}>
                    Add Meal
                </Text>
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