import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faPlay,
    faPause,
    faForward,
    faBackward,
    faVolumeUp
} from '@fortawesome/free-solid-svg-icons';



export default function PlayerControls({
    playerPause,
    setPlayerPause,
    setVolumes,
    audio,
    current,
    setCurrent,
    dur,
    setDur,
    setProp,
    prop
}) {

    const [volum, setVolum] = useState(0.5)

    const fmtMSS = (s) => {
        return (s - (s %=60)) / 60 + (9 < s ? ":" : ":0") + ~~s;
    }

    const toggle = () => {
        setDur(audio.current.duration);
        if(playerPause){
            audio.current.play();
        }else {
            audio.current.pause();
        }
    }

    useEffect (()=>{
        setVolumes(volum);
    }, [volum])

    const handleProgress = (e) => {
        let compute = (e.target.value * dur) / 100;
        setCurrent(compute);
        audio.current.currentTime = compute;
    }

    const minusQ = () => {
        if(prop<=1){
            setProp(1)
        }else{
            setProp((p)=>p-1)
        }
    }

    const plusQ = () =>{
        if(prop>114){
            setProp(1)
        }else{
            setProp((p) => p +1)
        }
    }

    return (
        <div style={{display: 'block', textAlign: "center"}} className="c-player-controls">
            <div style={{display: "flex", color: 'white', marginBottom: '20px', marginTop: '20px'}} className="progressB">
                <span className="current">{fmtMSS(dur)}</span>
                <input 
                    type="range" 
                    onChange={handleProgress}
                    value={(current * 100) / dur}
                    style={{width: "100%"}}
                    name="progressBar"
                    id={"prgBar"}   />
                <span className="totalT">{fmtMSS(dur)}</span>
            </div>
            <div style={{ display: "flex", textAlign: "center", marginLeft: "30px" }}>
                <button disabled={true} className="skip-btn">
                    <FontAwesomeIcon icon={faBackward} onClick={minusQ}/>
                </button>
                <button
                    style={{
                    boxShadow: playerPause
                        ? " 4px 4px 8px rgb(0 0 0 / 20%), -4px -4px 8px hsl(0deg 0% 100% / 6%)"
                        : "inset 3px 3px 6px rgb(0 0 0 / 30%), inset -3px -3px 6px hsl(0deg 0% 100% / 6%)",
                    }}
                    className="play-btn"
                    onClick={() => setPlayerPause((p) => !p)}  >
                    <FontAwesomeIcon onClick={toggle}
                    icon={playerPause ? faPlay : faPause}/>
                </button>
                <button className="skip-btn">
                    <FontAwesomeIcon 
                        icon={faForward}
                        onClick={plusQ}/>
                </button>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '15px'
                }} 
                className="vlme">
                <div style={{display: "flex", marginLeft: '30px'}}>
                    <span className="volum">
                        <FontAwesomeIcon 
                            className={'volumeIcon'}
                            icon={faVolumeUp}/>

                    </span>
                    <input
                         type="range"
                         value={Math.round(setVolum * 100)}
                         style={{marginLeft: "5px"}}
                         name={"progressBar"}
                         id={'prgBar'}
                         onChange={(e)=>setVolum(e.target.value / 100)}  />
                </div>

            </div>
        </div>
    )
}
