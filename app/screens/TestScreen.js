import React from 'react';
import { View ,StyleSheet,} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';   
function TestScreen(props) {
    return (
        <View style={styles.container}>
            
            <View style={{
                width: 200,
                height: 100,
                backgroundColor: 'blue',
                borderRadius: 50,
                justifyContent: 'center',
                borderBottomWidth: 20,
                borderBottomStartRadius: 0,
                borderBottomColor: "green"
            }}>

            </View>

            <FontAwesome name="google-plus" size={24} color="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default TestScreen;  