import React, { useState} from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { auth } from '../firebase';

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [imageURL, setImageUrl] = useState('');
    const register = ()=>{
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                user.updateProfile({
                displayName: name,
                photoURL: imageURL? imageURL:"https://studycrafter.com/wp-content/uploads/2017/12/IAFOR-Blank-Avatar-Image-1.jpg"
                }).then(() => {
                // Update successful
                // ...
                }).catch((error) => {
                // An error occurred
                // ...
                });  
                // ...
                navigation.popToTop();
            })
            .catch((error) => {
                var errorMessage = error.message;
                alert(errorMessage)
            });
    }
    return (
        <View style={styles.container}>
            <View style={styles.spacer} /> 
            <Input
            placeholder="Enter Your name"
            label="Name"
            leftIcon={{ type: 'material', name: 'badge' }}
            value={name}
            onChangeText={text => setName(text)}
            />
            <Input
            placeholder="Enter Your email"
            label="Email"
            leftIcon={{ type: 'material', name: 'email' }}
            value={email}
            onChangeText={text => setEmail(text)}
            />
            <Input
            placeholder="Enter Your password"
            label="Password"
            leftIcon={{ type: 'material', name: 'lock' }}
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            />
            <Input
            placeholder="Enter Your image Url"
            label="Profile Picture"
            leftIcon={{ type: 'material', name: 'face' }}
            value={imageURL}
            onChangeText={text => setImageUrl(text)}
            />
            <View style={styles.buttonspacer} /> 
            <Button title="Register" buttonStyle={styles.button}  onPress={register} style={styles.button}/>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create ({
    button: {
        width: 210,
        height: 45,
        padding: 5,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor:'#50C878'
    },
    spacer: {
        padding:10
    },
    buttonspacer: {
        width: 10, 
        height: 10,
    },
    container: {
        flex:1,
        alignItems: 'center',
        padding: 10,
        paddingTop: 25
    }
})

