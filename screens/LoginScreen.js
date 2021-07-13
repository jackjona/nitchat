import React, { useEffect, useState} from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { auth } from '../firebase';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = () => {
        auth.signInWithEmailAndPassword(email,password)
            .catch((error) => {
                var errorMessage = error.message;
                alert(errorMessage)
            });
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged
        (function (user) {
            if (user) {
                navigation.replace('Chat');
            } else {
                navigation.canGoBack() && navigation.popToTop();
              // User is signed out
            }
        });

        return unsubscribe
    }, [])
    return (
        <View style={styles.container}>
            <Input style={styles.input}
            placeholder="Enter Your email"
            label="Email"
            leftIcon={{ type: 'material', name: 'email' }}
            value={email}
            onChangeText={text => setEmail(text)}
            />
            <Input style={styles.input}
            placeholder="Enter Your password"
            label="Password"
            leftIcon={{ type: 'material', name: 'lock' }}
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            />
            <View style={styles.spacer} /> 
            <Button title="Sign In" buttonStyle={styles.button} onPress={signIn} style={styles.button}/>
            <View style={styles.buttonspacer} /> 
            <Button title="Register" buttonStyle={styles.button2}   style={styles.button2} onPress={()=>navigation.navigate('Register')}/>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create ({
    button: {
        paddingTop: 1,
        width: 210,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor:'#50C878'
    },
    button2: {
        paddingTop: 1,
        width: 210,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor:'#9370DB'
    },
    buttonspacer: {
        width: 20, 
        height: 20,
    },
    spacer: {
        width: 30, 
        height: 50,
    },
    input: {
        textAlign: 'center',
        paddingTop: 10
    },
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingTop: 0,
        backgroundColor: '#ededed',
    }
})

