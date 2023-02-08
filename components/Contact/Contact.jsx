import { Image, Text, View,image } from "react-native";
import { TextInput } from "@react-native-material/core";
import Buttons from "../Buttons/Buttons";
import styles from "../Styles/Styles";
import { useState } from "react";
import Input from "../Input/Input";
import imgContact from "../../assets/contactanos.jpg";
const Contact = () => {
  
  return (
    <View style={{flex:6,flexDirection:"column", alignContent:"center"}}>
      <Image
          source={{uri: imgContact}}
          style={{flex:4, width:"40%",alignContent: "center"}}
        />
      <Input label={"Nombre"} placeholder={"Ingresa tu nombre"} />
      <Input label={"Paterno"} placeholder={"Apellido paterno"} />
      <Input label={"Materno"} placeholder={"Aplellido materno"} />
      <Input label={"Email"} placeholder={"Aplellido materno"} />
      <Input label={"Telefono"} placeholder={"Aplellido materno"} />
      <Buttons
        label="Enviar"
        icon={"send"}
        onHandlerPress={() =>
          alert("Enviar")
        }
        color={"#593275"}
        styles={styles}
      />
    </View>
  );
};



export default Contact;