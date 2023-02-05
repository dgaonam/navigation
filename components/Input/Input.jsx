import { View, TextInput,Text } from "react-native";
import styles from "../Styles/Styles";

const Input = ({ label,placeholder,icon,size,color }) => {
    return (
            <View>
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}

                underlineColorAndroid="transparent" />
            </View>
    );
};

export default Input;