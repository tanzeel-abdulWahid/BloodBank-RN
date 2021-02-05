import React, {useState} from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button,Text } from 'native-base';
import { StyleSheet, Image, Alert } from 'react-native';
import auth from "@react-native-firebase/auth";

const Login = ( {navigation} ) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) =>{
        e.preventDefault()
        auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
            navigation.reset({
                index: 0,
                routes: [
                    {
                    name: 'Finddonors',
                    },
                ],
                })
        })
        .catch((e)=> Alert.alert(e.message))
    }



    return (
        <Container style={{paddingTop:70}}>
            <Image style={{width: 190, height:140, alignSelf: 'center'}} source={require('../assests/img.png')} />
        
            <Content>

                <Form>
                    <Item stackedLabel>
                        <Label>Email</Label>
                        <Input autoCompleteType="email" value={email} onChangeText={e => setEmail(e)} />
                    </Item>
                    
                    <Item stackedLabel last>
                        <Label>Password</Label>
                        <Input secureTextEntry value={password} onChangeText={e => setPassword(e)}/>
                    </Item>
                </Form>


                <Button danger style={styles.btn} onPress={login}><Text> Login </Text></Button>
                <Button bordered danger style={styles.btn} onPress={ () => navigation.navigate('Register') }><Text> Register </Text></Button>

            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    btn: {
        width:180,
        display: 'flex',
        justifyContent:  'center',
        alignItems:'center',
        marginTop:10,
        alignSelf:'center'
    },
    });
export default Login;
