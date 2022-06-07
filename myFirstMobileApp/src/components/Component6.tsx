/** Here we illustrate useEffect and fetching remote data */
import React, {useState, useEffect} from 'react';
import Component5ShowUser from './Component5ShowUser';
import { View, Text, TextInput, Button } from 'react-native';
type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address:{
        street: string,
        suite: string,
        city: string,
        zipcode: string
        geo: {
            lat: number,
            lng: number
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}
const Component6: React.FC = () => {
    //const [state, setState] = useState(initialState);
    const [user, setUser] = useState<User | null>(null);
    let userIdInput = '1';
    const fetchData = async (url: string) =>{
        try {
            let response = await fetch(url);
            let data = await response.json()
            setUser(data); 
        } catch (error: any) {
            console.log(error.message)
            setUser(null);
        }
    };
    useEffect(() => {
        fetchData('https://jsonplaceholder.typicode.com/users/1');
    }, []); //the second parameter [] will ensure that this useEffect runs only once.
    //conditionally show user if not undefined
    const showUser = () => {
        if (user!==null){
            return <Component5ShowUser user={user} />
        }
        else {
            return <Text>No user to display</Text>;
        }
    }
    return (
    <View>
    <Text>Greetings from Component6.</Text>
 {/** Below, let's use usual onChangeText */}
 <View>
 <TextInput onChangeText={(text)=>{userIdInput = text}}
 placeholder="UserId (1 to 10) here" />
 </View>
 <View>
 <Button title="Fetch User" onPress={()=>{fetchData(`https://jsonplaceholder.typicode.com/users/${userIdInput}`)}}/>
 </View>
 {/**Below, let's use onSubmitEditing to invoke fetchData. Fetches when enter key is pressed */}
 <View>
 <TextInput onSubmitEditing={(event)=>{fetchData(`https://jsonplaceholder.typicode.com/users/${event.nativeEvent.text}`)}}
 placeholder="Enter UserId (1 to 10) here. Press enter when done"
 keyboardType='numeric' autoFocus={true}/>
 </View>
    <View>
    {showUser()}
    </View>
    </View>
    )
}
export default Component6;