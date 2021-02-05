import React from 'react'
import { Container, Header, Content, Card, CardItem, Text, Body, Button } from "native-base";



const Policy = ({navigation} ) => {
    return (
        <Container>
        <Content padder>
            <Card>
                <CardItem header bordered>
                <Text style={{fontSize:36, color: 'red'}}>Disclaimer</Text>
                </CardItem>
                <CardItem bordered>
                <Body>
                    <Text>
                    * This application is owned by Blood Bank Pakistan
                    </Text>
                    <Text>
                    *we have no legal obligation related to any information or database in this application
                    </Text>
                    <Text>
                    * Entire data and information is publicily exposed and developer of this application is not responsible for any loss/damages.
                    </Text>
                </Body>
                </CardItem>
                <CardItem footer bordered>
                <Button danger onPress={() =>  navigation.reset({
                index: 0,
                routes: [
                    {
                    name: 'Finddonors',
                    },
                ],
                })}><Text> Agree </Text></Button>
                </CardItem>
            </Card>
            </Content>
        </Container>
    )
}



export default Policy
