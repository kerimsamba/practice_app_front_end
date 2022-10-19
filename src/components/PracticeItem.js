import React from 'react';
import './style/PracticeItem.css';
import { useState } from 'react';
import EditPracticeItem from './EditPracticeItem';
import Request from '../helper/Request';

const PracticeItem = ({ item }) => {

    const [videoplaying, setVideoplaying] = useState(false);
    const [newCompletedItem, setNewCompletedItem] = useState({...item})

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

    const itemComplete = () => {
        newCompletedItem.dateLastPlayed = new Date().toLocaleDateString();
        newCompletedItem.numOfPlays += 1;
        newCompletedItem.counter = (Math.pow(newCompletedItem.priority, 2));
        console.log(newCompletedItem);
        const request = new Request();
        const url = '/api/practiceitems';
        request.post(url, newCompletedItem).then(() => {
            window.location = '/api/practiceitems'
        }
        )
    }

    return (
        <div className={newCompletedItem.dateLastPlayed != new Date().toLocaleDateString() ? 'list-container' : 'list-container complete'}>
            <ul>
                <li className="box1">
                <button onClick={() => itemComplete()}><img src="/tick.png" alt="tick"></img></button>

                </li>
                <li className="box2">{item.priority}</li>
                <li className="box3" >Title:
                    <div>{item.name}</div> </li>
                <li className="box4">Category:
                    <div>{item.category}</div></li>
                <li className="box5">Notes:
                    <div>{item.notes}</div>
                </li>
                <li className="box6">
                    <div>Last played: {item.dateLastPlayed} </div>
                <div>Played: {item.numOfPlays}</div>
                <div>Target bpm: {item.bpm}</div></li>
                <li>
                <button onClick={() => setVideoplaying(!videoplaying)} className={item.youtubeLink ? "active" : ""} ><img src="/youtube-logo.png" alt="youtube"></img></button>
                </li>
                <li>
                <button onClick={() => EditPracticeItem(item)}><img src="/edit_button.png" alt="edit"></img></button>
                </li>
            </ul>
            {videoplaying ? <PlayYouTubeVideo /> : null}

        </div>
    );
}

export default PracticeItem;
