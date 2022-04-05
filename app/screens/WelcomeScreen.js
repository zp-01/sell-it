import { Image, ImageBackground, StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={10}
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <AppText style={styles.txt}>Sell What You Don't Need</AppText>
      </View>
      <AppButton
        color="primary"
        description="Login"
        onPress={() => navigation.navigate("Login")}
        style={styles.loginBtn}
      />
      <AppButton
        color="secondary"
        description="Register"
        onPress={() => navigation.navigate("Register")}
        style={styles.registerBtn}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
  },
  loginBtn: {
    marginBottom: 30,
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  registerBtn: {
    marginBottom: 30,
  },
  txt: {
    marginTop: 10,
  },
});

export default WelcomeScreen;
