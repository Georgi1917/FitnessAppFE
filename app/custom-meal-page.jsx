import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

function CustomMeal() {

    return(
        <View style={styles.outerContainer}>

            <TextInput placeholder="Name Of Meal" style={styles.textInput} />
            <TextInput placeholder="Calories" style={styles.textInput} />

            <View>

                <TextInput placeholder="Protein" style={styles.textInput} />
                <TextInput placeholder="Carbs" style={styles.textInput} />
                <TextInput placeholder="Fat" style={styles.textInput} />

            </View>

            <TouchableOpacity style={styles.buttonStyle}>

                <Text style={styles.buttonText}>
                    Add
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
        textInput: {
            backgroundColor: "#fff",
            margin: 10,
            borderRadius: 12,
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

export default CustomMeal;