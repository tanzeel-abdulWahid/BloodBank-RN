import React, {useState,useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import { Container, Content,Text, Icon, Button} from "native-base";
import {ScrollView, StyleSheet} from 'react-native'


const Finddonors = ( {navigation} ) => {
    const [donorsList, setDonorslist] = useState([]);
    useEffect(()=>{
        const subscriber = firestore().collection("donors").onSnapshot(snapshot => (
            setDonorslist(snapshot.docs.map(doc => doc.data()))
        ));
        return () => subscriber();
    },[])

    return (
        <ScrollView>
                <Container style={{height:1500}}>
                <Button onPress={() => navigation.navigate("Donors")} danger rounded style={{marginTop:20, marginBottom:5}}><Icon style={{fontSize:30}} name="add"  /><Text>Add Donor</Text></Button>
                    
                {donorsList.map(info =>(
                    <Content  style={{borderWidth: 1, paddingLeft:10, marginTop:2}}>
                        <Text style={Styles.bigtxt}>Blood Group:  <Text style={Styles.grp}> {info.blood_grp}</Text></Text> 
                        <Text >Name: {info.name}</Text>
                        <Text>Address: {info.address}</Text>
                        <Text>Cell No: {info.cell_no}</Text>
                    </Content>
                ))
                }
                </Container>
        </ScrollView>
        
    )
}

const Styles = StyleSheet.create({
    grp:{
        color: '#EA2027',
        fontWeight: 'bold',
        fontSize : 18
    },
    bigtxt:{
        fontSize:20,
        color :'black'
    }

})

export default Finddonors
