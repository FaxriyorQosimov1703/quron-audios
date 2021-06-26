import React from 'react'

export default function PlayerDetails({prop, name, quron}) {
    return (
        <div>
            <div className="c-player-details">
                <div className="details-img"><img src="../image/0e8d4863536da1fca789a8494c68648b.jpg" alt=""/></div>
                <div className="details-title">
                    <p>{name[prop-1].uz}</p>
                    <p style={{color: '#e8b98b'}}>{name[prop -1].arabic}</p>
                </div>
                <div style={{color: '#e8b98b', fontSize: '14px'}}><span style={{color:'white'}}>{prop}</span>/114</div>
            </div>
        </div>
    )
}
