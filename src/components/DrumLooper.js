import React, { useState } from 'react';
import { Howl, Howler } from 'howler';
import './style/DrumLooper.css';

const DrumLooper = () => {

    const [bpm, setBPM] = useState(1.0);

    let drumloop = false;

    const sound = new Howl({
        src: ['drum_loop.wav'],
        html5: true,
        loop: true,
        rate: bpm
    });

    function increaseBPM() {
        let newbpm = bpm
        setBPM(newbpm += 0.1)
    }

    function decreaseBPM() {
        let newbpm = bpm
        setBPM(newbpm -= 0.1)
    }

    return (<>
        <button onClick = {
            () => {
                if (drumloop === false) {
                    sound.play()
                drumloop = true;
            }
            else {
                sound.stop()
                drumloop = false;
            }}
        }><img src="/drum_logo.png" alt="drums"></img></button>
        <button onClick={increaseBPM}>+</button>
        <span>{90 + Math.floor(bpm * 10)}</span>
        <button onClick={decreaseBPM}>-</button>
    </>);
}

export default DrumLooper;