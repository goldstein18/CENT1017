import React, { useRef, useState } from "react";
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { images } from "../../../assets/images";

import {
  Feather,
  AppColors,
  AppIcons,
  AppFonts,
  normalized,
  MaterialCommunityIcons,
} from "../../../utils/AppConstants";
import Buttons from "../../../components/buttons/Buttons";
import HelpModal from "../../../components/modals/HelpModal";
import MultiSelect from "react-native-multiple-select";

export const PorUltimo = (props) => {
  const { navigation } = props;
  const multiSelectRef = useRef();
  const [confirm, setConfirm] = useState(false);
  const [modalLoad, setModalLoad] = useState(false);
  const [items] = useState([
    {
      id: "92iijs7yta",
      name: "Ondo",
    },
    {
      id: "a0s0a8ssbsd",
      name: "Ogun",
    },
    {
      id: "16hbajsabsd",
      name: "Calabar",
    },
  ]);
  const [selectedItems, setSelectedItems] = useState([]);
  const onSelectedItemsChange = (selectedItems) => {
    setSelectedItems(selectedItems);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.setWidth}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather
              name="arrow-left"
              color={AppColors.primaryColor.darkBlack}
              size={AppIcons.commonIcons.medium}
            />
          </TouchableOpacity>
          <Text style={styles.txtAdministra}>
            Por ultimo, elige tu plazo de congelamiento predeterminado
          </Text>
          <Text style={styles.txtElige}>
            Elige por cuanto tiempo quieres crecer tus rewards, de manera
            predeterminada
          </Text>
          <View style={{ flex: 1, marginTop: normalized.hp("2%") }}>
            <MultiSelect
              styleDropdownMenuSubsection={{
                backgroundColor: AppColors.secondaryColor.lightGrey,
              }}
              hideTags
              items={items}
              uniqueKey="id"
              ref={multiSelectRef}
              onSelectedItemsChange={onSelectedItemsChange}
              selectedItems={selectedItems}
              selectText="Seleccionar artículos"
              searchInputPlaceholderText="Buscar elementos..."
              onChangeInput={(text) => console.log(text)}
              altFontFamily="ProximaNova-Light"
              tagRemoveIconColor="#CCC"
              tagBorderColor="#CCC"
              tagTextColor="#CCC"
              selectedItemTextColor={AppColors.secondaryColor.lightBlue}
              selectedItemIconColor="#CCC"
              itemTextColor="#000"
              displayKey="name"
              searchInputStyle={{
                color: AppColors.primaryColor.darkBlack,
                fontSize: AppFonts.commonFont.small,
              }}
              submitButtonColor={AppColors.secondaryColor.lightBlue}
              submitButtonText="Entregar"
              itemFontSize={AppFonts.commonFont.small}
            />
          </View>
          <Text style={styles.txtDoc}>Documentos</Text>
          <View style={styles.flexRow1}>
            <View style={styles.with20}>
              <View style={styles.wrapImg}>
                <Image
                  resizeMode="contain"
                  source={images.roundBox}
                  style={styles.innerImg}
                />
              </View>
            </View>
            <View style={styles.with80}>
              <Text style={styles.txtContrato}>Contrato de rewards</Text>
            </View>
          </View>
          <View style={styles.flexRow1}>
            <View style={styles.with20}>
              <View style={styles.wrapImg}>
                <Image
                  resizeMode="contain"
                  source={images.roundBox}
                  style={styles.innerImg}
                />
              </View>
            </View>
            <View style={styles.with80}>
              <Text style={styles.txtContrato}>Terminos y condiciones</Text>
            </View>
          </View>
          <View style={styles.flexRow2}>
            <View style={styles.with20a}>
              {confirm ? (
                <MaterialCommunityIcons
                  name="checkbox-marked"
                  size={AppIcons.commonIcons.large}
                  color={AppColors.primaryColor.lightBlack}
                  onPress={() => setConfirm(!confirm)}
                />
              ) : (
                <MaterialCommunityIcons
                  name="checkbox-blank-outline"
                  size={AppIcons.commonIcons.large}
                  color={"#f4f4fb"}
                  onPress={() => setConfirm(!confirm)}
                />
              )}
            </View>
            <View style={styles.with65}>
              <Text
                style={{
                  ...styles.txtContrato,
                  fontSize: AppFonts.commonFont.smallest,
                }}
              >
                Confirmo que he leido todos Ios document y doy mi consentimiento
                para preceder
              </Text>
            </View>
            <View style={styles.with15} />
          </View>
          <Buttons
            largeBtn
            label={"Crear cuenta"}
            txtColor={AppColors.primaryColor.darkWhite}
            bgColor={AppColors.primaryColor.lightBlack}
            marginTop={normalized.hp("5%")}
            onPress={() => navigation.navigate("Necesitamos")}
          />
        </View>
      </ScrollView>
      {modalLoad && (
        <>
          <HelpModal
            isVisible={modalLoad}
            title={"Plazo predetermindo de congelamiento"}
            label={
              "Al seleccionar esta casilla, el plazo que hayas elegido En el seleccionadoe anterior, sera el plazo en el que Automaticamente cada abono que hagas, se va a congelar."
            }
            onEnteradoPress={() => setModalLoad(false)}
          />
        </>
      )}
    </SafeAreaView>
  );
};
