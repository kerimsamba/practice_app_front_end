import React from 'react';
import './style/PracticeItem.css';
import { useState } from 'react';
import EditPracticeItem from './EditPracticeItem';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



const PracticeItem = ({ item }) => {

    const [videoplaying, setVideoplaying] = useState(false);

    const PlayYouTubeVideo = () => {
        const youtubeaddress = "https://www.youtube.com/embed/" + item.youtubeLink.slice(32);
        if (item.youtubeLink.length > 15) {
            return (
                <div className="video-responsive">
                    <iframe
                        width="853"
                        height="480"
                        src={youtubeaddress}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    >
                    </iframe>
                </div>
            )
        }
    }

    // const Timer = () => {
    //     var now = new Date().getTime();
    //     console.log(now);
    // }


    return (
        <div className='list-container'>
            <ul>
                <li className="box1">{item.priority}</li>
                <li className="box2" >Title:
                    <div>{item.name}</div> </li>
                <li className="box3">Category:
                    <div>{item.category}</div></li>
                <li className="box4">Notes:
                    <div>{item.notes}</div>
                </li>
                <li className="box5">
                    <div>Last played: {item.dateLastPlayed} </div>
                <div>Played: {item.numOfPlays}</div>
                <div>Target bpm: {item.bpm}</div></li>
                <button onClick={() => EditPracticeItem(item)}>Edit</button>
                <button onClick={() => setVideoplaying(!videoplaying)} className={item.youtubeLink ? "active" : ""} ><img src="/youtube-logo.png" alt="youtube"></img></button>
            
            </ul>
            {videoplaying ? <PlayYouTubeVideo /> : null}

        </div>
    );
}

export default PracticeItem;

{/* <Link to="/editpracticeitem">Edit</Link> */}