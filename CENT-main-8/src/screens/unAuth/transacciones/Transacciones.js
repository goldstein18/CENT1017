import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import FlatLists from "../../../components/flatLists/FlatLists";
import {
  Feather,
  AppColors,
  AppIcons,
  Entypo,
} from "../../../utils/AppConstants";
export const Transacciones = (props) => {
  const { navigation } = props;

  const [transHistoryFl] = useState([
    {
      name: "Abono realizado",
      date: "31 Julio 2023, 10:00 AM",
      address: "DF, Av, Santa Fe 55 ",
      price: "+$100",
      credit: true,
    },
    {
      name: "Abono realizado",
      date: "31 Julio 2023, 10:00 AM",
      address: "DF, Av, Santa Fe 55 ",
      price: "+$100",
      credit: true,
    },
    {
      name: "Pago realizado",
      date: "31 Julio 2023, 10:00 AM",
      address: "DF, Av, Santa Fe 55 ",
      price: "-$100",
      debit: true,
    },
    {
      name: "Reward obtenido",
      date: "31 Julio 2023, 10:00 AM",
      address: "DF, Av, Santa Fe 55 ",
      price: "+$43",
      credit: true,
    },
    {
      name: "Transacciones",
      date: "31 Julio 2023, 10:00 AM",
      address: "CENT",
      price: "-$100",
      debit: true,
    },
    {
      name: "Pago realizado",
      date: "31 Julio 2023, 10:00 AM",
      address: "DF, Av, Santa Fe 55 ",
      price: "-$100",
      debit: true,
    },
    {
      name: "Reward obtenido",
      date: "31 Julio 2023, 10:00 AM",
      address: "DF, Av, Santa Fe 55 ",
      price: "+$43",
      credit: true,
    },
    {
      name: "Transacciones",
      date: "31 Julio 2023, 10:00 AM",
      address: "CENT",
      price: "-$100",
      debit: true,
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.setWidth}>
        <View style={styles.wrapTop}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather
              name="arrow-left"
              color={AppColors.primaryColor.darkBlack}
              size={AppIcons.commonIcons.medium}
            />
          </TouchableOpacity>
          <Text style={styles.txtAdministra}>Transacciones</Text>
          <Text>{"      "}</Text>
        </View>
        <View style={styles.wrapTop1}>
          <Text style={styles.txtAdministra1}>Historial de transacciones</Text>
          <TouchableOpacity onPress={() => navigation.navigate("EligeUnRango")}>
            <Entypo
              name="dots-three-horizontal"
              color={AppColors.secondaryColor.lightBlack1}
              size={AppIcons.commonIcons.medium}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapMiddle}>
          <View style={styles.wrapFL}>
            <FlatLists
              historyTrans
              data={transHistoryFl}
              navigation={navigation}
            />
          </View>
        </View>
        <View style={styles.wrapEnd} />
      </View>
    </SafeAreaView>
  );
};
