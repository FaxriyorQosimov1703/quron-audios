import React,{useRef, useState} from 'react';
import PlayerControls from './PlayerControls';
import PlayerDetails from './PlayerDetails';


export default function Player({prop, setProp, quron, name}) {
    
    const [playerPause, setPlayerPause] = useState(true);
    const [current, setCurrent] = useState(0);
    const [dur, setDur] = useState(0);
    const audio = useRef('audio_tag')
    const setVolume = (q) => {
        audio.current.volume = q;
    }


    return (
        <div className={'c-player'} >
            <h1 style={{ color: '#e8b98b'}}>>﷽</h1>
            <audio 
                src={quron[0].Server + `/${prop<10?'00':prop<100?'0':''}${prop}.mp3`}
                onTimeUpdate={(e)=>setCurrent(e.target.currentTime)}
                onCanPlay={(e)=>setDur(e.target.duration)}
                ref={audio}
                autoPlay={true}
                width="100%"
                height="60px"
                preload={'auto'}
                ></audio>

            <PlayerDetails prop={prop} quron={quron} name={name}/>
            <PlayerControls 
                prop={prop}
                 setProp={setProp}
                dur={dur}
                 setDur={setDur}
                current={current}
                setCurrent={setCurrent}
                audio={audio}
                setVolumes={setVolume}
                playerPause={playerPause}
                setPlayerPause={setPlayerPause} />
                <p>Qosimov Faxriyor</p>
        </div>
    )
}
