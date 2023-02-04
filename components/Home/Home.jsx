import { View,Text } from "react-native";
import Buttons from "../Buttons/Buttons";
import styles from "../Styles/Styles";
const Home = ({navigation}) => {
    return(
        <View >
        <Text>Bienvenidos.</Text>

        <Buttons
          label="Contactanos..."
          icon={"address-card"}
          onHandlerPress={() =>
            navigation.navigate('Contact')
          }
          styles={styles}
        />
        <Buttons
          label="Sobre nosotros..."
         
          onHandlerPress={() =>
            navigation.navigate('AbountUs')
          }
          styles={styles}
        />

<Buttons
          label="Camara"
         
          onHandlerPress={() =>
            navigation.navigate('Cam')
          }
          styles={styles}
        />
      </View>
    );
};



export default Home;