import React, { useEffect, useState } from "react";
import { View, Image, Text, SafeAreaView, ScrollView } from "react-native";
import styles from "./styles";
import {
  AppColors,
  AppIcons,
  Entypo,
  normalized,
  AntDesign,
} from "../../../utils/AppConstants";
import { images } from "../../../assets/images";
import Buttons from "../../../components/buttons/Buttons";
import MetaMensualModal from "../../../components/modals/MetaMensualModal";
import MenuModal from "../../../components/modals/MenuModal";
export const Home1 = (props) => {
  const { navigation } = props;
  const [modalLoad, setModalLoad] = useState(false);
  const [modalMenu, setModalMenu] = useState(false);
  const [modalLoadUpdate, setModalLoadUpdate] = useState(false);
  const [priceMensual, setPriceMensual] = useState(0);
  const [otros, setOtros] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.setWidth}>
        <View style={styles.flexRow}>
          <AntDesign
            name="arrowleft"
            size={AppIcons.commonIcons.medium}
            color={AppColors.primaryColor.darkBlack}
            style={styles.iconStyle}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.txtHome}>Home</Text>
          <Text>{"      "}</Text>
        </View>
        <View style={styles.wrapImg}>
          <Image
            resizeMode="contain"
            source={images.imgProfile}
            style={styles.innerImg}
          />
        </View>
        <View style={styles.flexRow}>
          <View style={styles.wrapBalnce}>
            <Text style={styles.txtPrice}>$15</Text>
            <Text style={styles.txtBalance}>Participacion activa</Text>
          </View>
          <View style={styles.wrapBalnce}>
            <Text style={styles.txtPrice}>$0</Text>
            <Text style={styles.txtBalance}>Rewards disponible</Text>
          </View>
        </View>

        <Text style={{ ...styles.txtMuCu, marginTop: normalized.hp("2%") }}>
          Mis abonos
        </Text>
        <View style={styles.wrapBox}>
          <View style={styles.flexRow1}>
            <Text style={styles.txtDate}>04/08/23</Text>
            <Text style={styles.txtDate1}>04/08/24</Text>
          </View>
          <View style={{ ...styles.flexRow1, marginTop: normalized.hp("2%") }}>
            <View style={styles.wrapImg1}>
              <Image
                resizeMode="contain"
                source={images.appIcon}
                style={styles.innerImg}
              />
            </View>
            <Text style={styles.txtDate2}>$15.43</Text>
          </View>
        </View>
        <Text style={{ ...styles.txtMuCu, marginTop: normalized.hp("2%") }}>
          Mis abonos cobrados
        </Text>
        <View style={styles.wrapBox}>
          <View style={styles.flexRow1}>
            <Text style={styles.txtDate}>No aplica</Text>
            <Text style={styles.txtDate1}>No aplica</Text>
          </View>
          <View style={{ ...styles.flexRow1, marginTop: normalized.hp("2%") }}>
            <View style={styles.wrapImg1}>
              <Image
                resizeMode="contain"
                source={images.appIcon}
                style={styles.innerImg}
              />
            </View>
            <Text style={styles.txtDate2}>$0</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
