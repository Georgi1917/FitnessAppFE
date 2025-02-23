import { useState, useRef, useMemo } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, Image, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function CustomMeal() {

    const [image, setImage] = useState(null);

    const bottomSheetRef = useRef(null);

    const snapPoints = useMemo(() => ['25%', '50%'], []);

    const handleOpenSheet = () => {
        bottomSheetRef.current?.expand();
    }

    const handleClosePress = () => {
        bottomSheetRef.current?.close();
      };

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
        <GestureHandlerRootView>

            <View style={styles.outerContainer}>

                <View style={styles.imageButtonCont}>

                    <TouchableOpacity onPress={pickImage} style={styles.imageButton}>

                        <Image 
                            source={image ? { uri : image } : { uri : "https://cdn2.iconfinder.com/data/icons/gastronomy-3-outline-vol-1/60/56_-Boiled_Vegetables-_gastronomy_food_cooking-1024.png" }} 
                            style={styles.image}
                        />

                    </TouchableOpacity>

                </View>

                <TextInput placeholder="Name Of Meal" style={styles.textInput} />

                <View style={styles.caloriePhotoContainer}>

                    <TextInput placeholder="Protein" style={[styles.textInput, styles.macrosStyle]} />
                    <TextInput placeholder="Calories" style={[styles.textInput, styles.macrosStyle]} />

                </View>

                <View style={styles.caloriePhotoContainer}>

                    <TextInput placeholder="Carbs" style={[styles.textInput, styles.macrosStyle]} />
                    <TextInput placeholder="Fat" style={[styles.textInput, styles.macrosStyle]} />

                </View>

                <TouchableOpacity style={[styles.buttonStyle, styles.addButton]}>

                    <Text style={styles.buttonText}>
                        Add
                    </Text>

                </TouchableOpacity>

                <Button title="Open Bottom Sheet" onPress={handleOpenSheet} />

                <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints}>

                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <Text>Hello World</Text>
                        <Button title="Close" onPress={handleClosePress} />
                    </View>

                </BottomSheet>

            </View>

        </GestureHandlerRootView>

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
            alignContent: "center",
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
        },
        addButton: {
            width: Dimensions.get("window").width * 0.7,
            alignSelf: "center",
            justifyContent: "center",
        },
        image: {
            width: 220,
            height: 220,
            backgroundColor: "#404654",
            borderRadius: 110,
            margin: 10
        },
        macrosStyle: {
            width: Dimensions.get("window").width * 0.45
        },
        imageButtonCont: {
            alignItems: "center",
        },
        imageButton: {
            width: 220,
        }
    }
)

export default CustomMeal;