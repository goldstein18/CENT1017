import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import {
  AppColors,
  AppIcons,
  Entypo,
  normalized,
} from "../../../utils/AppConstants";
import { images } from "../../../assets/images";
import Buttons from "../../../components/buttons/Buttons";
import MetaMensualModal from "../../../components/modals/MetaMensualModal";
import MenuModal from "../../../components/modals/MenuModal";
export const Home = (props) => {
  const { navigation } = props;
  const [modalLoad, setModalLoad] = useState(false);
  const [modalMenu, setModalMenu] = useState(false);
  const [modalLoadUpdate, setModalLoadUpdate] = useState(false);
  const [priceMensual, setPriceMensual] = useState(0);
  const [otros, setOtros] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {priceMensual === 0 ? (
          <View style={styles.setWidth}>
            <Text style={styles.txtHome}>Home</Text>
            <TouchableOpacity
              style={styles.wrapImg}
              onPress={() => navigation.navigate("FirstPage")}
            >
              <Image
                resizeMode="contain"
                source={images.imgProfile}
                style={styles.innerImg}
              />
            </TouchableOpacity>
            <View style={styles.wrapBalnce}>
              <Text style={styles.txtPrice}>$0</Text>
              <Text style={styles.txtBalance}>Balance total</Text>
            </View>
            <Entypo
              name="dots-three-horizontal"
              size={AppIcons.commonIcons.medium}
              color={AppColors.primaryColor.darkGrey}
              style={styles.iconStyle}
              onPress={() => setOtros(!otros)}
            />
            <View style={styles.flexRow}>
              <Buttons
                btnMedium
                label={"Meta mensual"}
                iconName={"plus"}
                txtColor={AppColors.primaryColor.darkGrey}
                onPress={() => setModalLoadUpdate(true)}
              />
              <Buttons
                btnMedium
                label={"Abonar"}
                iconName={"qrcode"}
                bgColor={AppColors.secondaryColor.lightBlue}
                txtColor={AppColors.primaryColor.darkWhite}
                onPress={() => navigation.navigate("Pagar1")}
              />
            </View>
            {otros && (
              <>
                <TouchableOpacity
                  style={styles.wrapRenovar}
                  onPress={() => navigation.navigate("Transferencia1")}
                >
                  <Text style={styles.txtRenovar}>
                    Renovar plazo de participacion
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.wrapRenovar}
                  onPress={() => navigation.navigate("Pagar")}
                >
                  <Text style={styles.txtRenovar}>Pagar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.wrapRenovar}
                  onPress={() => navigation.navigate("Registra")}
                >
                  <Text style={styles.txtRenovar}>Transferir</Text>
                </TouchableOpacity>
              </>
            )}
            <Text style={{ ...styles.txtMuCu, marginTop: normalized.hp("2%") }}>
              Mi Cuenta
            </Text>
            <View style={{ ...styles.flexRow, marginTop: normalized.hp("3%") }}>
              <View style={styles.wrapParticipacion}>
                <Text style={styles.txtParticipacion}>
                  Participacion activa
                </Text>
                <Text style={styles.txtPrice}>$0</Text>
              </View>
              <View style={styles.wrapParticipacion}>
                <Text style={styles.txtParticipacion}>Fondos disponibles</Text>
                <Text style={styles.txtPrice}>$0</Text>
              </View>
            </View>
            <View style={{ ...styles.flexRow, marginTop: normalized.hp("3%") }}>
              <View style={styles.wrapParticipacion}>
                <Text style={styles.txtParticipacion}>Rewards disponible</Text>
                <View style={styles.flexRow}>
                  <Text style={styles.txtPrice}>$0</Text>
                  <Text style={styles.txtAnual}>(Taxs 6% anual)</Text>
                </View>
              </View>
              <View style={styles.wrapParticipacion}>
                <Text style={styles.txtParticipacion}>Rewards obtenidos</Text>
                <View style={styles.flexRow}>
                  <Text style={styles.txtPrice}>$0</Text>
                  <Entypo
                    name="dots-three-horizontal"
                    size={AppIcons.commonIcons.medium}
                    color={AppColors.primaryColor.darkGrey}
                    style={styles.iconStyle}
                    onPress={() => setModalMenu(!modalMenu)}
                  />
                </View>
              </View>
            </View>
            <Buttons
              largeBtn
              label={"Ver transacciones"}
              txtColor={AppColors.primaryColor.darkWhite}
              bgColor={AppColors.primaryColor.lightBlack}
              marginTop={normalized.hp("5%")}
              onPress={() => navigation.navigate("Transacciones")}
            />
          </View>
        ) : (
          <View style={styles.setWidth}>
            <Text style={styles.txtHome}>Home</Text>
            <View style={styles.wrapImg}>
              <Image
                resizeMode="contain"
                source={images.imgProfile}
                style={styles.innerImg}
              />
            </View>
            <View style={styles.wrapBalnce}>
              <Text style={styles.txtPrice}>$0</Text>
              <Text style={styles.txtBalance}>Balance total</Text>
            </View>
            <View style={styles.flexRow}>
              <View>
                <Text style={styles.txtMuCu}>Meta mensual</Text>
                <Text
                  style={{
                    ...styles.txtMuCu,
                    marginTop: normalized.hp(".5%"),
                  }}
                >
                  ${priceMensual}
                </Text>
              </View>
              <View>
                <Entypo
                  name="dots-three-horizontal"
                  size={AppIcons.commonIcons.medium}
                  color={AppColors.primaryColor.darkGrey}
                  // onPress={() => alert("hi")}
                  onPress={() => setModalLoadUpdate(true)}
                />
                <Text
                  style={{
                    ...styles.txtMuCu,
                    marginTop: normalized.hp("3%"),
                  }}
                >
                  $0
                </Text>
              </View>
            </View>
            <View style={styles.loadingBar} />
            <View style={styles.flexRow}>
              <Buttons
                btnMedium
                label={otros ? "Abonar" : "Meta mensual"}
                iconName={otros ? "qrcode" : "plus"}
                txtColor={AppColors.primaryColor.darkWhite}
                bgColor={otros && AppColors.secondaryColor.lightBlue}
                onPress={() => navigation.navigate("Pagar1")}
                // onPress={() => setModalLoadUpdate(true)}
              />
              <Buttons
                btnMedium
                label={"Otros"}
                iconName={otros ? "up" : "down"}
                bgColor={AppColors.secondaryColor.lightBlue}
                txtColor={AppColors.primaryColor.darkWhite}
                onPress={() => setOtros(!otros)}
              />
            </View>
            {otros && (
              <>
                <TouchableOpacity
                  style={styles.wrapRenovar}
                  onPress={() => navigation.navigate("Transferencia1")}
                >
                  <Text style={styles.txtRenovar}>
                    Renovar plazo de participacion
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.wrapRenovar}
                  onPress={() => navigation.navigate("Pagar")}
                >
                  <Text style={styles.txtRenovar}>Pagar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.wrapRenovar}
                  onPress={() => navigation.navigate("Registra")}
                >
                  <Text style={styles.txtRenovar}>Transferir</Text>
                </TouchableOpacity>
              </>
            )}
            <Text style={{ ...styles.txtMuCu, marginTop: normalized.hp("2%") }}>
              Mi Cuenta
            </Text>
            <View style={{ ...styles.flexRow, marginTop: normalized.hp("2%") }}>
              <View style={styles.wrapParticipacion}>
                <Text style={styles.txtParticipacion}>
                  Participacion activa
                </Text>
                <Text style={styles.txtPrice}>$0</Text>
              </View>
              <View style={styles.wrapParticipacion}>
                <Text style={styles.txtParticipacion}>Fondos disponibles</Text>
                <Text style={styles.txtPrice}>$0</Text>
              </View>
            </View>
            <View style={{ ...styles.flexRow, marginTop: normalized.hp("2%") }}>
              <View style={styles.wrapParticipacion}>
                <Text style={styles.txtParticipacion}>Rewards disponible</Text>
                <View style={styles.flexRow}>
                  <Text style={styles.txtPrice}>$0</Text>
                  <Text style={styles.txtAnual}>(Taxs 6% anual)</Text>
                </View>
              </View>
              <View style={styles.wrapParticipacion}>
                <Text style={styles.txtParticipacion}>Rewards obtenidos</Text>
                <View style={styles.flexRow}>
                  <Text style={styles.txtPrice}>$0</Text>
                  <Entypo
                    name="dots-three-horizontal"
                    size={AppIcons.commonIcons.medium}
                    color={AppColors.primaryColor.darkGrey}
                    style={styles.iconStyle}
                    onPress={() => setModalMenu(!modalMenu)}
                  />
                </View>
              </View>
            </View>
            <Buttons
              largeBtn
              label={"Ver transacciones"}
              txtColor={AppColors.primaryColor.darkWhite}
              bgColor={AppColors.primaryColor.lightBlack}
              marginTop={normalized.hp("5%")}
              onPress={() => navigation.navigate("Transacciones")}
            />
          </View>
        )}
      </ScrollView>

      {modalLoad && (
        <>
          <MetaMensualModal
            isValue
            isVisible={modalLoad}
            title={"Elige tu meta mensual"}
            label={"$30"}
            onEnteradoPress={() => {
              setPriceMensual(30);
              setModalLoad(false);
            }}
          />
        </>
      )}
      {modalLoadUpdate && (
        <>
          <MetaMensualModal
            isUpdateValue
            isVisible={modalLoadUpdate}
            title={"Elige tu meta mensual"}
            label={"$30"}
            onEnteradoPress={() => {
              setPriceMensual(30);
              setModalLoadUpdate(false);
              setOtros(true);
            }}
          />
        </>
      )}
      {modalMenu && (
        <>
          <MenuModal
            isVisible={modalMenu}
            onPress={() => {
              setModalMenu(false);
            }}
          />
        </>
      )}
    </SafeAreaView>
  );
};
