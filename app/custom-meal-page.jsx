import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

function CustomMeal() {

    const [image, setImage] = useState(null);

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }

    };

    return(
        <View style={styles.outerContainer}>

            <TextInput placeholder="Name Of Meal" style={styles.textInput} />

            <View style={styles.caloriePhotoContainer}>

                <TouchableOpacity style={[styles.buttonStyle, styles.individualCont]} onPress={pickImage}>

                    <Text style={styles.buttonText}>
                        Add Photo
                    </Text>

                </TouchableOpacity>


                <TextInput placeholder="Calories" style={[styles.textInput, styles.individualCont]} />

            </View>

            <View>

                <TextInput placeholder="Protein" style={styles.textInput} />
                <TextInput placeholder="Carbs" style={styles.textInput} />
                <TextInput placeholder="Fat" style={styles.textInput} />

            </View>

            <TouchableOpacity style={[styles.buttonStyle, styles.addButton]}>

                <Text style={styles.buttonText}>
                    Add
                </Text>

            </TouchableOpacity>

            {image && <Image source={{ uri: image }} style={styles.imageCont} />}

        </View>

    )

}

let styles = StyleSheet.create(
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
        caloriePhotoContainer: {
            flexDirection: "row",
        },
        individualCont: {
            flex: 1,
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
        },
        addButton: {
            width: Dimensions.get("window").width * 0.7,
            alignSelf: "center",
            justifyContent: "center",
        },
        imageCont: {
            width: 200,
            height: 200,
        }
    }
)

export default CustomMeal;