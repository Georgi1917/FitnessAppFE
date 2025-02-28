import { useState, useRef, useMemo, useCallback } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, Image, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";


function CustomMeal() {

    const snapPoints = useMemo(() => ["35%", "50%", "75%"], []);
    
    const bottomSheetRef = useRef(null);

    const handleClosePress = () => bottomSheetRef.current?.close();
    const handleOpenPress = () => bottomSheetRef.current?.snapToIndex(1);

    const renderBackDrop = useCallback(
        (props) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />, []
    )

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

        handleClosePress();

    };

    const captureImage = async () => {

        let result = await ImagePicker.launchCameraAsync(
            {
                mediaTypes: ['images'],
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            }
        );

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }

        handleClosePress();

    }

    return(
        <GestureHandlerRootView>

            <View style={styles.outerContainer}>

                <View style={styles.imageButtonCont}>

                    <TouchableOpacity onPress={handleOpenPress} style={styles.imageButton}>

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

                <BottomSheet snapPoints={snapPoints} index={-1} 
                             ref={bottomSheetRef} enablePanDownToClose={true} 
                             backdropComponent={renderBackDrop}
                             backgroundStyle={{ backgroundColor: "#404654" }}
                             handleIndicatorStyle={{ backgroundColor: "#FFF" }}
                >

                    <BottomSheetView>

                        <TouchableOpacity style={[styles.buttonStyle, styles.addButton]} onPress={pickImage}>
                            <Text style={styles.buttonText}>Open Gallery</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.buttonStyle, styles.addButton]} onPress={captureImage}>
                            <Text style={styles.buttonText}>Open Camera</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.buttonStyle, styles.addButton]} onPress={handleClosePress}>
                            <Text style={styles.buttonText}>Close</Text>
                        </TouchableOpacity>

                    </BottomSheetView>

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
        },
    }
)

export default CustomMeal;