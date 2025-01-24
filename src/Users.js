import React, {useEffect, useState} from "react";

export default function Users() {

    const [data, setData] = useState([]);
    const [mode, setMode]= useState('online');

    useEffect(() => {

        let url = "https://jsonplaceholder.typicode.com/users";

        fetch(url).then((response) => {
            response.json().then((result) => {
                console.warn(result);
                setData(result);
                localStorage.setItem("users",JSON.stringify(result))
            });
        }).catch(err => {
            setMode('offline');
            let collection = localStorage.getItem("users");
            setData(JSON.parse(collection));            
        });
    },[])

    return (
        <>
        {
            mode==='offline' ?  <div><h3>Offline</h3></div> :null
        }

        <ul>
            {data.map((item) => (
                <li key={item.id}>
                Name: {item.name}
                </li>
            ))}
        </ul>
        </>
        );
        
}