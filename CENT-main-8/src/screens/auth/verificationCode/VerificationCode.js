//@ts-check
import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  SafeAreaView,
} from "react-native";
import OTPTextInput from "react-native-otp-textinput";

import theme from "../../../utils/theme";
import { Button } from "../../../components";
import { useKeyboard } from "../../../hooks/KeyboardAware";
export const VerificationCode = (props) => {
  const { navigation } = props;

  let otpInput = useRef(null);

  const keyboardHeight = useKeyboard();
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles._container}>
        <View style={styles._body}>
          <Text style={styles._heading}>Código de 6 dígitos</Text>
          <Text style={styles._desc}>
            Se envió un código al +52 442 114 3497, a menos de que ya tengas una
            cuenta
          </Text>
          <OTPTextInput
            autoFocus
            containerStyle={styles.containerStyle}
            inputCount={6}
            textInputStyle={styles.textInputStyle}
            // ref={(e) => (otpInput = e)}
          />
          <Text style={styles._bottom_text}>
            ¿Ya tienes una cuenta? Inicia sesión
          </Text>
        </View>
        <View
          style={{
            ...styles._btn_section,
            marginBottom: Platform.OS === "ios" ? keyboardHeight + 10 : 0,
          }}
        >
          <Button
            title={"Crear cuenta"}
            onPress={() => {
              navigation.navigate("UserDate");
            }}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: theme.white,
    padding: 15,
    paddingTop: 0,
  },
  _body: {
    flex: 1,
  },
  _heading: {
    fontFamily: theme.bold,
    fontSize: 17,
  },
  _desc: {
    fontFamily: theme.medium,
    marginTop: 15,
    color: theme.grey,
    fontSize: 16,
    marginBottom: 30,
  },
  _btn_section: {
    marginHorizontal: 10,
  },
  _bottom_text: {
    fontFamily: theme.medium,
    color: theme.primary,
    marginTop: 40,
  },
  textInputStyle: {
    borderBottomWidth: 0,
    height: 59,
    width: 40,
    backgroundColor: theme.greyLight,
    borderWidth: 0,
    borderRadius: 10,
    marginRight: 10,
    color: theme.black,
    fontFamily: theme.medium,
  },
  containerStyle: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
