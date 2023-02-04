import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      padding: 10,
      margin: 10,
      backgroundColor: "#216293",
    },
    buttonIcon: {
      paddingRight: 20,
      fontSize: 25,
      color: "#FFFFFF"
    },
    buttonLabel: {
      fontSize: 16,
      color: "#FFFFFF"
    },
    camera: {
      flex: 1,
      width: '80%',
      height: '100%',
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    imageContainer: {
      flex: 1,
      paddingTop: 5,
    },
    image: {
      width: '80%',
      height: '100%',
      borderRadius: 5,
      borderStyle: '1px solid #FFF'
    },input: {
      margin: 16,
    },
  });

  export default styles;