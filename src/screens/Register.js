import React, {useState} from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button,Text } from 'native-base';
import { StyleSheet, Image,Alert } from 'react-native';
import auth from "@react-native-firebase/auth";

const Register = ( {navigation} ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const register = (e) =>{
        e.preventDefault()
        auth().createUserWithEmailAndPassword(email, password)
        .then(()=>{
            navigation.reset({
                index: 0,
                routes: [
                    {
                    name: 'Policy',
                    },
                ],
                })
        })
        .catch((e)=> Alert.alert(e.message))
    }

    return (
        <Container style={{paddingTop:10}}>
            <Image style={{width: 190, height:140, alignSelf: 'center'}} source={require('../assests/img.png')} />
        
            <Content>

                <Form>
                    <Item stackedLabel>
                        <Label>Name</Label>
                        <Input />
                    </Item>
                    <Item stackedLabel>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                    
                    <Item stackedLabel>
                        <Label>Email address</Label>
                        <Input autoCompleteType="email" value={email} onChangeText={e => setEmail(e)} />
                    </Item>

                    <Item stackedLabel last>
                        <Label>Password</Label>
                        <Input secureTextEntry value={password} onChangeText={e => setPassword(e)} />
                    </Item>
                </Form>
                <Button danger style={styles.btn} onPress={register}><Text> Register </Text></Button>

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
export default Register;
