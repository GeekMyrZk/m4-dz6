export function CreateConnection (serverUrl, roomId){
    return{
        connect() {
            console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...')
        },
        disconnect(){
            console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
        }
    }
}

// Ваши компоненты с добавленными стилями
export function GeneralChat() {
    return (
        <>
            <h3 style={{ fontSize: '24px', color: 'blue' }}>Hello! Here you can find some rooms with cool information</h3>
        </>
    )
}

export function TravelChat() {
    return (
        <>
            <h3 style={{ fontSize: '24px', color: 'green' }}>Hello! Here you can find cool information about travel in European countries</h3>
            <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
                Traveling through Europe is an enchanting journey that promises a tapestry of diverse cultures, rich history, and breathtaking landscapes...
            </p>
        </>
    )
}

export function MusicChat() {
    return (
        <>
            <h3 style={{ fontSize: '24px', color: 'orange' }}>Hello! Here you can find cool information about music</h3>
            <p style={{ fontSize: '16px', lineHeight: '1.5' }}>In my country, Komuz is a national instrument.</p>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/fzl5PO-l0Qk?si=UOKDoB3N4tKuTkWs"
                title="Komuz"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ marginTop: '20px' }}
            ></iframe>
        </>
    )
}

export function DanceChat() {
    return (
        <>
            <h3 style={{ fontSize: '24px', color: 'purple' }}>Hello! Here you can find cool information about Dance</h3>
            <h2 style={{ fontSize: '20px', color: 'darkred' }}>KARA JORGO</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
                Kara Jorgo is a national dance of Kyrgyzstan. Traditionally, “Kara-Zhorgo” is performed in colorful national costumes to music rich in rhythms and melodies characteristic of Kyrgyz culture...
            </p>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/VYIkEk81VDs?si=4e6oI9E0L9yI4HLq"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ marginTop: '20px' }}
            ></iframe>
        </>
    )
}
