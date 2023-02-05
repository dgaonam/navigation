import { View, Text } from "react-native";
import Buttons from "../Buttons/Buttons";
import styles from "../Styles/Styles";
import { Image } from "react-native";
import imgHome from "../../assets/csm_ueber-uns-t_7486a044a2.jpg";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{flex:1,fontSize:25, fontWeight:"bold"}}>Bienvenidos practica .</Text>
      <Image
          source={imgHome}
          style={styles.imageHome}
        />
      <View style={{flex:1, flexDirection:"row"}}>
      <Buttons
        label="Contactanos"
        icon={"address-card"}
        onHandlerPress={() =>
          navigation.navigate('Contact')
        }
        color={"#593275"}
        styles={styles}
      />
      <Buttons
        label="Nosotros"
        icon={"info"}
        onHandlerPress={() =>
          navigation.navigate('AbountUs')
        }
        color={"#593275"}
        styles={styles}
      />
      <Buttons
        label="Camara"
        icon={"camera"}
        onHandlerPress={() =>
          navigation.navigate('Cam')
        }
        color={"#593275"}
        styles={styles}
      />
      </View>
    </View>
  );
};



export default Home;