import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  Feather,
  AppColors,
  AppIcons,
  normalized,
} from "../../../utils/AppConstants";
import styles from "./styles";
import Buttons from "../../../components/buttons/Buttons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export const Registra = (props) => {
  const { navigation } = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.setWidth}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.topHeight}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather
                name="arrow-left"
                color={AppColors.primaryColor.darkBlack}
                size={AppIcons.commonIcons.medium}
              />
            </TouchableOpacity>
            <Text style={styles.txtAdministra}>Registra tu cuenta CLABE</Text>
            <Text style={styles.txtElige}>
              Este registro de CLABE puede tradar un tiempo considerable. Una
              vez registrando tu CLABE podras transferir rapido
            </Text>
            <TextInput
              placeholder="Pega aqui tu CLABE (18 digitos)"
              placeholderTextColor={"#9898a6"}
              style={{ ...styles.txtInp, marginTop: normalized.hp("10%") }}
              maxLength={18}
            />
            <TextInput
              placeholder=" Confirma aqui tu CLABE (18 digitos)"
              placeholderTextColor={"#9898a6"}
              style={styles.txtInp}
              maxLength={18}
            />
          </View>
          <View style={styles.middleHeight} />
          <View style={styles.bottomHeight}>
            <Buttons
              largeBtn
              label={"Confirmar registro"}
              txtColor={AppColors.primaryColor.darkWhite}
              bgColor={AppColors.primaryColor.lightBlack}
              onPress={() => navigation.navigate("Codigo")}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
