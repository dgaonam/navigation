import { Text, View } from "react-native";
import { TextInput } from "@react-native-material/core";
import Buttons from "../Buttons/Buttons";
import styles from "../Styles/Styles";
import { useState } from "react";
const Contact = () => {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');
  return (
    <View >
      <Text>Contactonos.</Text>
      <TextInput variant="outlined" label="Nombre" style={styles.input} />
      <TextInput variant="outlined" label="Paterno" style={styles.input} />
      <TextInput variant="outlined" label="Materno" style={styles.input} />
    </View>
  );
};



export default Contact;