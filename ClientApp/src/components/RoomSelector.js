import React from "react";
import CodeEditor from "./CodeEditor";
import { useState } from 'react';

const RoomSelector = () => {
    const [name, setName] = useState(false);
    const [value, setValue] = useState("");

    const exitRoom = () => {
        setName(false)
    }

    const enterRoom = () => {
        setName(true)
        console.log({value})
    }

    return (
        <div>
             {name == false ? <div>
                 <input id="Something" onChange={(e) => setValue(e.target.value)}/>
                 <button onClick={() => enterRoom()}>Enter room</button>
                 </div> 
                 : <div>
                    <CodeEditor roomName={value} test={exitRoom}/>
                 </div>}
        </div>
    )
}

export default RoomSelector;