import { useState, useRef, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';
import { Camera, CameraType } from 'expo-camera';
import { Text, View } from "react-native";

import Buttons from "../Buttons/Buttons";
import CardImage from "../CardImage/CardImage";
import styles from "../Styles/Styles";

const Cam =()=>{
  const [type, setType] = useState(CameraType.back);
  const [permisos, setPermisos] = Camera.useCameraPermissions();
  const [image, setImage] = useState(null);
  const cameraReferencia = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setPermisos(cameraStatus.status === 'granted');
    })();
  }, []);

  const tomarFoto = async () => {
    if (cameraReferencia) {
      try {
        const data = await cameraReferencia.current.takePictureAsync();
        setImage(data.uri);

        const asset = await MediaLibrary.createAssetAsync(data.uri);
        MediaLibrary.createAlbumAsync('Expo', asset)
          .then(() => {
            console.log('Album created!');
          })
          .catch(error => {
            console.log('err', error);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }

  if (!permisos) {
    return <View />;
  }

  if (!permisos.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Necesitas permisos para acceder a la camara </Text>
        <Buttons label={"Permisos"} onHandlerPress={setPermisos} size={20} color={"#FF00FF"} styles={styles} />
      </View>
    );
  }

    return(
        <View style={styles.container}>
        <Camera style={styles.camera} type={type} flashMwode={0} ref={cameraReferencia}>
          <View style={styles.buttonContainer}>
            <CardImage url={""} diseño={styles} imagen={image} />
  
          </View>
        </Camera>
        <View style={styles.buttonContainer}>
          <Buttons label={"Tomar Foto"} onHandlerPress={tomarFoto} icon={"camera"} size={20} color={"#FF00FF"} styles={styles} />
          <Buttons label={"Cambiar camara"} onHandlerPress={() => setType(type === CameraType.back ? CameraType.front : CameraType.back)} icon={"refresh"} size={20} color={"#FF00FF"} styles={styles} />
        </View>
       
      </View>
    );
};

export default Cam;