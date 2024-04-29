import { StatusBar, StyleSheet, Text, View } from "react-native";
import { TEMAS } from "./estilos/temas";

export default function Login() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={TEMAS.colors.blue[800]} />

            <Text>Tela LOGIN</Text>
            <StatusBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
    }


})