import React, { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import {
  AntDesign,
  AppColors,
  AppIcons,
  normalized,
} from "../../utils/AppConstants";
import { images } from "../../assets/images";
const Button = (props) => {
  const {
    label,
    onPress,
    txtColor,
    bgColor,
    marginTop,
    largeBtn,
    menuBtn,
    btnMedium,
    iconName,
  } = props;

  return (
    <>
      {menuBtn ? (
        <>
          <TouchableOpacity
            onPress={onPress}
            style={{
              ...styles.largeBtnWrap,
              marginTop: marginTop,
              backgroundColor: bgColor,
            }}
          >
            <Text style={{ ...styles.txtTitle, color: txtColor }}>{label}</Text>
          </TouchableOpacity>
        </>
      ) : largeBtn ? (
        <TouchableOpacity
          onPress={onPress}
          style={{
            ...styles.largeBtnWrap,
            marginTop: marginTop,
            backgroundColor: bgColor,
          }}
        >
          <Text style={{ ...styles.txtTitle, color: txtColor }}>{label}</Text>
        </TouchableOpacity>
      ) : btnMedium ? (
        <TouchableOpacity
          onPress={onPress}
          style={{
            ...styles.mediumBtnWrap,
            marginTop: marginTop,
            backgroundColor: bgColor,
          }}
        >
          <Text style={{ ...styles.txtMedTitle, color: txtColor }}>
            {label}
          </Text>
          <AntDesign
            name={iconName}
            color={txtColor}
            size={AppIcons.commonIcons.small}
            style={{ left: normalized.wp("1%") }}
          />
        </TouchableOpacity>
      ) : null}
    </>
  );
};
export default Button;
