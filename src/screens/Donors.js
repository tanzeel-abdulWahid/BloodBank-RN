import React, {useState} from 'react'
import { Container, Header, Content, Button,Form, Text, Item, Input, Label } from 'native-base';
import {StyleSheet, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { add } from 'react-native-reanimated';


const Donors = ({ navigation } ) => {
    const [name, setName] = useState('');
    const [fname, setFname] = useState('');
    const [adress, setAdress] = useState('');
    const [cell, setCell] = useState('');
    const [blood, setBlood] = useState('');

    const sendDonor = () =>{
        firestore()
        .collection('donors')
        .add({
            name: name,
            fathers_name: fname,
            address: adress,
            cell_no: cell,
            blood_grp: blood
        })
        .then(() => {
            navigation.navigate("Finddonors")
        });

        setName("");
        setFname("");
        setAdress("");
        setCell("");
        setBlood("");

    }


    return (
        <Container>
        <Content>
            <Form >
            <Text style={styles.heading}>Add Donor Details</Text>
            <Item stackedLabel style={{marginTop:30}}>
                <Label style={styles.txts}>Name</Label>
                <Input value={name} onChangeText={e => setName(e)} />
            </Item>
            <Item stackedLabel>
                <Label style={styles.txts}>Father's Name</Label>
                <Input value={fname} onChangeText={e => setFname(e)} />
            </Item>
            <Item stackedLabel>
                <Label style={styles.txts}>Address</Label>
                <Input value={adress} onChangeText={e => setAdress(e)} />
            </Item>
            <Item stackedLabel>
                <Label style={styles.txts}>Cell No</Label>
                <Input keyboardType='numeric' value={cell} onChangeText={e => setCell(e)} />
            </Item>
            <Item stackedLabel>
                <Label style={styles.txts}>Blood Group</Label>
                <Input value={blood} onChangeText={e => setBlood(e)} />
            </Item>
            </Form>
            <Button block danger style={{marginTop:20}} onPress={sendDonor}>
            <Text>Submit</Text>
            </Button>
            </Content>
        </Container>
        
    )
}
const styles = StyleSheet.create({
    txts:{
        fontSize:20, fontWeight: 'bold',
        color: 'black'
    },
    heading:{
        alignSelf:'center',
        fontWeight : 'bold',
        fontSize: 25,

    }
})


export default Donors
