import {
    React, 
    ImageBackground,
    SafeAreaView ,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Platform, 
    Image,

    } from 'react-native';

function WecomeScreen(props) {
    return (
        
        // <ImageBackground style={styles.background} source={require("../assets/HUTECH.png")}>
            
                
        // </ImageBackground>
        <View style={styles.background}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo}  source={require("../assets/HUTECH.png")}/>
                <Text>Đồng Hành Cùng HUTECHers</Text>
            </View>

            <View
                style={styles.registerButton}
            >
            </View>
            <View
                style={styles.loginButton}
            >
            </View>
        </View>    
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "rgb(214, 243, 255)"
    },
    loginButton:{
        width: "100%",
        height: 70,
        backgroundColor: "rgb(29, 101, 157)",
    },
    registerButton:{
        width: "100%",
        height: 70,
        backgroundColor: "orange",
        // justifyContent: "flex-start",
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20
    },

    logo:{
        width: 100,
        height: 100,
        
        // alignSelf: "center",
    },
    logoContainer:{
        position: "absolute",
        top: 70,
        alignItems:"center"
    },

});

export default WecomeScreen;