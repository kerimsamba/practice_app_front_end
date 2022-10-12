import React from 'react';
import SetPriority from './SetPriority';
import YouTubePlayer from './YouTubePlayer';
import Notes from './Notes';
import Timer from './Timer';
import './style/PracticeItem.css';
import { useState } from 'react';


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


    return (
        <div className='list-container'>
            <ul>
                <li>{item.priority}</li>
                <li>{item.name} </li>
                <li>{item.category}</li>
                <button>{item.time} mins</button>
                <button onClick={() => setVideoplaying(!videoplaying)} className={item.youtubeLink.length > 15 ? "active" : ""}>Youtube</button>
            </ul>
            {videoplaying ? <PlayYouTubeVideo /> : null}

        </div>
    );
}

export default PracticeItem;
