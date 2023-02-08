import { Text, View,Image } from "react-native";
import imgAbount from "../../assets/somos.png";

const AbountUs = () => {
    return (
        <View>
            <Image
                source={{ uri: imgAbount }}
                style={{ flex: 4, width: "40%", alignContent: "center" }}
            />
            <Text style={{flex:1}}>Somos una empresa ....</Text>

        </View>
    );
};

export default AbountUs;