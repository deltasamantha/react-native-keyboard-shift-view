import React, { Component } from "react";
import { Animated, Dimensions, Keyboard, StyleSheet, TextInput, UIManager, View } from "react-native";

const { State: TextInputState } = TextInput;
const OFFSET = 30;
const WINDOW_OFFSET = 50;
const ANIMATION_DURATION = 400;

/**
 * referred from
 * https://codeburst.io/react-native-keyboard-covering-inputs-72a9d3072689
 * in implementing KeyboardShift view
 *
 */

export default class KeyboardShift extends Component {
    state = {
        shift: new Animated.Value(0)
    }

    componentDidMount() {
        this.keyboardDidShowSub = Keyboard.addListener("keyboardDidShow", this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener("keyboardDidHide", this.handleKeyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowSub?.remove();
        this.keyboardDidHideSub?.remove();
    }

    render() {
        const { children } = this.props;
        const { shift } = this.state;
        return <Animated.View style={[styles.container, { transform: [{ translateY: shift }] }]}>{children}</Animated.View>;
    }

    handleKeyboardDidShow = event => {
        const { height: windowHeight } = Dimensions.get("window");
        const keyboardHeight = event.endCoordinates.height;
        const currentlyFocusedField = TextInputState.currentlyFocusedField();
        !!currentlyFocusedField && UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
            const fieldHeight = height;
            const fieldTop = pageY;
            const gap = windowHeight - keyboardHeight - (fieldTop + fieldHeight) - OFFSET;
            if (gap >= 0) {
                return;
            }
            Animated.timing(this.state.shift, {
                toValue: gap,
                duration: ANIMATION_DURATION,
                useNativeDriver: true
            }).start();
        });
    };

    handleKeyboardDidHide = () => {
        Animated.timing(this.state.shift, {
            toValue: 0,
            duration: ANIMATION_DURATION,
            useNativeDriver: true
        }).start();
    };
}

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        height: windowHeight - WINDOW_OFFSET,
        width: windowWidth,
        left: 0,
        top: 0
    }
});