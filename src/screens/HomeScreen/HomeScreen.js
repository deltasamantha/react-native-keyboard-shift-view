import React from "react";
import { View, Text, TextInput, Dimensions, StyleSheet } from "react-native";
import { colorBlue1 } from "../../theme/Colors";
import KeyboardShift from "../../components/KeyboardShift/KeyboardShift";

export default function HomeScreen() {
    return (
        <KeyboardShift>
            <View style={styles.rootContainer}>
                <TextInput
                    placeholder={"Enter text"}
                    style={styles.textInput}
                />
                <TextInput
                    placeholder={"Enter text"}
                    style={[styles.textInput, { marginBottom: 100 }]}
                />
            </View>
        </KeyboardShift>
    );
}

const textInputWidth = Dimensions.get("window").width - 40;
const textInputHeight = 50;
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: colorBlue1,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    textInput: {
        backgroundColor: "#FFF",
        height: textInputHeight,
        width: textInputWidth,
        margin: 10,
        padding: 5,
    },
});
