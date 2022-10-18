import React, { useState } from 'react';
import Request from '../helper/Request.js';


const NewPracticeItem = () => {

    const todaysdate = new Date().toLocaleDateString();

    const [newItem, setNewItem] = useState({
        name: "",
        priority: 1,
        time: 10,
        category: "",
        youtubelink: "insert url here",
        dateLastPlayed: todaysdate,
        numOfPlays: 0,
        bpm: 100,
        notes: "",
        counter: 0
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange =(event)=>{
        const copyitem = {...newItem}
        const propertyName=event.target.name;
        copyitem[propertyName] = event.target.value;
        setNewItem(copyitem)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newItem.name) {
            setSubmitted(true);
            handlePost();
        }
        // console.log(newItem)
    }

    const handlePost = () => {
        const request = new Request();
        request.post('/api/practiceitems/', newItem)
            .then(() => {
                window.location = '/api/practiceitems'
            })
    }

    return (<div>
        <form onSubmit={handleSubmit}>
            {submitted ? <div className="success-message">Success! New item added</div> : null}
            <input type="text" placeholder="Name" name="name" onChange={handleChange} value={newItem.name} />
            <input type="number" placeholder="Priority" name="priority" onChange={handleChange} value={newItem.priority} />
            <input type="number" placeholder="Time" name="time" onChange={handleChange} value={newItem.time} />
            <input type="text" placeholder="Category" name="category" onChange={handleChange} value={newItem.category} />
            <input type="text" placeholder="YouTube link" name="youtubelink" onChange={handleChange} value={newItem.youtubelink} />
            <input type="number" placeholder="BPM" name="bpm" onChange={handleChange} value={newItem.bpm} />
            <input type="text" placeholder="Notes" name="notes" onChange={handleChange} value={newItem.notes} />
            <button type="submit" onSubmit={handleSubmit}>Save</button>
        </form>
    </div>);
}

export default NewPracticeItem;

// this.name = name;
// this.priority = priority;
// this.time = time;
// this.category = category;
// this.youtubeLink = youtubeLink;
// this.dateLastPlayed = dateLastPlayed;
// this.numOfPlays = numOfPlays;
// this.bpm = bpm;
// this.notes = notes;
// this.counter = counter;
