
import React,{useState} from 'react';
import { Image, View } from "react-native";

import Buttons from "../Buttons/Buttons";
import styles from "../Styles/Styles";

import Input from "../Input/Input";
import imgContact from "../../assets/contactanos.jpg";
const Contact = () => {
  const [data, setData] = useState([]);
  
  function postData() {
    const response = fetch("https://localhost/api/contactanos", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => response.json())
      .then((responseJson) => {
        
        setData(responseJson.results);
        alert(data);
      })
      .catch((error) => {
        //Error
        alert(JSON.stringify(error));
        console.error(error);
      });
  }


  return (
    <View style={{ flex: 10, flexDirection: "column", alignContent: "center", backgroundColor: "#FFFFFF" }}>
      <View style={{ flex:2, width: "100%", alignContent: "center", alignSelf: "center" }}>
        <Image
          source={{ uri: imgContact }}
          style={{ flex: 7,justifyContent:"space-evenly" }}
        />
      </View>
       <View style={{flex:4}}>
      <Input label={"Nombre"} placeholder={"Ingresa tu nombre"} />
      <Input label={"Paterno"} placeholder={"Apellido paterno"} />
      <Input label={"Materno"} placeholder={"Aplellido materno"} />
      <Input label={"Email"} placeholder={"Aplellido materno"} />
      <Input label={"Telefono"} placeholder={"Aplellido materno"} />
      </View>
      <View style={{flex:1}}>
      <Buttons
        label="Enviar"
        icon={"send"}
        onHandlerPress={() =>
          postData()
        }
        color={"#593275"}
        styles={styles}
      />
      </View>
    </View>
  );
};



export default Contact;