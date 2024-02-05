import React, {useState, useEffect} from "react";
import {CreateConnection, GeneralChat, TravelChat, MusicChat, DanceChat} from "./chat"

const styles = {
    container: {
        maxWidth: '600px',
        margin: 'auto',
        padding: '20px',
        backgroundColor: '#f7f7f7',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    label: {
        display: 'block',
        marginBottom: '15px',
        fontSize: '18px',
        color: '#333',
    },
    select: {
        fontSize: '16px',
        padding: '8px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    button: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '12px 20px',
        fontSize: '18px',
        borderRadius: '5px',
        cursor: 'pointer',
        border: 'none',
        transition: 'background-color 0.3s',
    },
    hr: {
        margin: '30px 0',
        border: '0.5px solid #ddd',
    },
    input: {
        fontSize: '16px',
        padding: '8px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginTop: '8px',
    },
    header: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginTop: '20px',
    },
};

function ChatRoom({roomId}) {
    const [serverUrl, setServerUrl] = useState('https://localhost:123')

    useEffect(() => {
        const connection = CreateConnection(serverUrl, roomId)
        connection.connect()
        return () => {
            connection.disconnect()
        }
    }, [roomId, serverUrl]);

    return(
        <>
            <label style={styles.label}>
            Server URl: {''}
            <input
                style={styles.input}
                value={serverUrl}
                onChange={e => setServerUrl(e.target.value)}
            />
            </label>
            <h1 style={styles.input}>Welcome to the {roomId} room!</h1>

        </>

    )

}

export default function App () {
    const [roomId, setRoomId] = useState("general")
    const [show, setShow] = useState(false)
    return(
        <div style={styles.container}>
            <label style={styles.label}>
            Choose the chat room: {""}
                <select style={styles.select} value={roomId} onChange={e => setRoomId(e.target.value)}>
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                    <option value="dance">dance</option>
                </select>
            </label>
            <button style={styles.button} onClick={()=> setShow(!show)}>
                {show ? "Close chat" : "Open chat"}
            </button>
            {show && <hr style={styles.hr}/>}
            {show && <ChatRoom roomId={roomId}/> }

            {show && roomId === "general" && <GeneralChat/>}
            {show && roomId === "travel" && <TravelChat/>}
            {show && roomId === "music" && <MusicChat/>}
            {show && roomId === "dance" && <DanceChat/>}
        </div>
    )
}
