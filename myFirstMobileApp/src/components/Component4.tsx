import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
type Props = {
 name?: string;
}
const Component4: React.FC<Props> = (props) => {
 //const [state, setState] = useState(initialState);
 const [state, setState] = useState({name: props.name, count: 0})
 //const [name, setName] = useState(props.name);
 //const [count, setCount] = useState(0);
 const changeNameToGreet = (text: string) => { setState({...state, name: text});
 }
 return (
 <View>
 <Text>Hello {state.name}. Greetings from from React-Native.</Text>
 <View>
 <TextInput placeholder="Write a name here..." onChangeText={changeNameToGreet} autoFocus/>
 </View>
 <View>
 <Text>You clicked {state.count} times</Text>
 <Button title="Click Me" onPress={() => setState({...state, count: state.count + 1})}/>
 </View>
 </View>
 )
}
const styles = StyleSheet.create({
 text:{
 color: '#fff',
 fontSize: 20,
 backgroundColor: 'blue',
 padding: 6,
 alignItems: 'center'
 }
});
Component4.defaultProps = {
 name: "John"
} 
export default Component4
