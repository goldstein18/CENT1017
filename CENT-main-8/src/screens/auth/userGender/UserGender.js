//@ts-check
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  Platform,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Button } from "../../../components";
import theme from "../../../utils/theme";
import { SelectList } from "react-native-dropdown-select-list";
import { useKeyboard } from "../../../hooks/KeyboardAware";

export const UserGender = (props) => {
  const { navigation } = props;
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "Mujer", value: "Mujer" },
    { key: "Hombre ", value: "Hombre" },
    { key: "Prefiero no especificado", value: "Prefiero no especificado" },
  ];

  const keyboardHeight = useKeyboard();
  console.log(selected, "selected");
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles._container}>
        <View style={styles._body}>
          <Text style={styles._heading}>Género</Text>

          <View
            style={{
              backgroundColor: theme.greyLight,
              borderRadius: 10,
            }}
          >
            <SelectList
              setSelected={setSelected}
              data={data}
              search={false}
              // searchBar={false}
              placeholder="Selecciona tu género"
              boxStyles={{
                backgroundColor: theme.greyLight,
                borderWidth: 0,
              }}
              dropdownStyles={{
                backgroundColor: theme.greyLight,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderBottomWidth: 0,
                marginTop: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              }}
            />
          </View>
        </View>
        <View
          style={{
            ...styles._btn_section,
            marginBottom: Platform.OS === "ios" ? keyboardHeight + 10 : 0,
          }}
        >
          <Button
            title={"Continuar"}
            onPress={() => navigation.navigate("Direccion")}
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
    marginBottom: 30,
  },

  _btn_section: {
    marginHorizontal: 10,
  },

  containerStyle: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
