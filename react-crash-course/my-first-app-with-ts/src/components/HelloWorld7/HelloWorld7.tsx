import React, { useEffect, useRef, useState } from "react";
import ShowUser from './ShowUser'
type Props = {
    name?: string;
    other?: string;
}

const HelloWorld7: React.FC<Props> = (props) => {
    const [user, setUser] = useState(null);

    let userIdInput: any = useRef();

    const refetchData = async () =>{
        try{
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userIdInput.current.value}`);
            let data = await response.json()
            setUser(data);
        }catch (error) {
            setUser(null);
        }
    };
    const fetchData = async () => {
        try{
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
            let data = await response.json()
            setUser(data)
        }catch{
            setUser(null)
        }
    };
    useEffect(() => {
        fetchData();
        userIdInput.current.focus();
    }, []);

    const showUser = () => {
        if (user !== null){
            return<ShowUser user={user} />

        }else{
            return 'No User to display'
        }
    }
    return (
        <div>
            <p>Hello {props.name}. Greetings from from React.</p>
            <p>
                <input ref={userIdInput} type="number" placeholder="UserId (1 to 10) here" />
            </p>
            <p>
                <button onClick={refetchData}>
                    Fetch User
                </button>
            </p>
            <p>
                {showUser()}
            </p>
        </div>
        )
       
}
HelloWorld7.defaultProps = {
    name: "Bolu"
   } 

   export default HelloWorld7