import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  Feather,
  AppColors,
  AppIcons,
  AntDesign,
  normalized,
} from "../../../utils/AppConstants";
import styles from "./styles";
import Buttons from "../../../components/buttons/Buttons";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
export const Necesitamos = (props) => {
  const [cameraRollPermission, setCameraRollPermission] = useState(null);
  const { navigation } = props;
  const [image, setImage] = useState(null);
  const [image1, setImage1] = useState(null);

  const pickImage = async () => {
    const result = await Permissions.getAsync(Permissions.CAMERA);
    console.log(result);
    // Alert.alert(
    //   "Permissions.getAsync(Permissions.CAMERA)",
    //   JSON.stringify(result),
    //   [
    //     {
    //       text: "Okay",
    //       onPress: () => {},
    //     },
    //   ],
    //   { cancelable: false }
    // );

    const result2 = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    console.log(result2);

    // Alert.alert(
    //   "Permissions.getAsync(Permissions.CAMERA_ROLL)",
    //   JSON.stringify(result2),
    //   [
    //     {
    //       text: "Okay",
    //       onPress: () => {},
    //     },
    //   ],
    //   { cancelable: false }
    // );

    await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      base64: true,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const pickImage1 = async () => {
    const result = await Permissions.getAsync(Permissions.CAMERA);
    console.log(result);
    // Alert.alert(
    //   "Permissions.getAsync(Permissions.CAMERA)",
    //   JSON.stringify(result),
    //   [
    //     {
    //       text: "Okay",
    //       onPress: () => {},
    //     },
    //   ],
    //   { cancelable: false }
    // );

    const result2 = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    console.log(result2);

    // Alert.alert(
    //   "Permissions.getAsync(Permissions.CAMERA_ROLL)",
    //   JSON.stringify(result2),
    //   [
    //     {
    //       text: "Okay",
    //       onPress: () => {},
    //     },
    //   ],
    //   { cancelable: false }
    // );

    await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      base64: true,
    });
    if (!result.canceled) {
      setImage1(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.setWidth}>
        <View style={styles.topHeight}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather
              name="arrow-left"
              color={AppColors.primaryColor.darkBlack}
              size={AppIcons.commonIcons.medium}
            />
          </TouchableOpacity>
          <Text style={styles.txtAdministra}>
            Necesitamos tu INE para abrir tu cuenta
          </Text>
          <Text style={styles.txtElige}>
            Sube una imagen de cada lado de tu INE
          </Text>
          <TouchableOpacity
            style={{ ...styles.flexRow, marginTop: normalized.hp("6%") }}
            onPress={() => pickImage()}
          >
            <Text style={styles.txtCaratula}>Carátula del INE</Text>
            <AntDesign
              name="camera"
              color={AppColors.primaryColor.darkBlack}
              size={AppIcons.commonIcons.large}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexRow} onPress={() => pickImage1()}>
            <Text style={styles.txtCaratula}>
              Parte posterior de tu INE (atras)
            </Text>
            <AntDesign
              name="camera"
              color={AppColors.primaryColor.darkBlack}
              size={AppIcons.commonIcons.large}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.middleHeight} />
        <View style={styles.bottomHeight}>
          <Buttons
            largeBtn
            label={"Crear cuenta"}
            txtColor={AppColors.primaryColor.darkWhite}
            bgColor={AppColors.primaryColor.lightBlack}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
