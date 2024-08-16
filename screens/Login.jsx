import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  Image,
} from "react-native";
import OtpBox from "../components/OtpBox";

const Login = () => {
  return (
    <ImageBackground
      source={require("../assets/Bubbles.png")} // Replace with your image URL
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Second Half</Text>
        </View>
        <Image source={require("../assets/couples.png")} style={styles.image} />
        <Text style={styles.text}>Let's start with your mobile number</Text>
        {/* <TextInput
          placeholder="Enter your mobile number"
          style={styles.textInput}
          keyboardType="phone-pad"
        >
          {" "}
        </TextInput> */}
        
        <OtpBox />
        <View style={styles.button}>
          <Button title="Continue" color="#AB1D79" />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  titleContainer: {
    position: "absolute",
    top: 50,
    left: 15,
    width: "100%",
  },
  titleText: {
    fontFamily: "BrockScript",
    color: "#AB1D79",
    fontSize: 30.78,
    fontWeight: "400",
  },
  image: {
    marginTop: 50,
  },
  text: {
    color: "#970563",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Merriweather-Regular",
    marginTop: 20,
  },
  textInput: {
    width: 310,
    height: 50,
    borderWidth: 1,
    borderColor: "#AB1D79",
    backgroundColor: "#FFF5FB;",
    color: "#120438",
    borderRadius: 6,
    padding: 16,
    marginTop: 10,
  },
  button: {
    width: 255,
    borderRadius: 200,
    marginTop: 220,
  },
});

export default Login;
