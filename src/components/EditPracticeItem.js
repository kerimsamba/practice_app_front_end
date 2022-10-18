import React, { useState } from 'react';
import Request from '../helper/Request.js';


const EditPracticeItem = ({item}) => {

    const [newEditedItem, setEditedItem] = useState({...item});

    const handleChange =(event)=>{
        const copyitem = {...newEditedItem}
        const propertyName=event.target.name;
        copyitem[propertyName] = event.target.value;
        setEditedItem(copyitem)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newEditedItem);
        const request = new Request();
        const url = '/api/practiceitems';
        request.post(url, newEditedItem).then(() => {
            window.location= '/api/practiceitems'
        })
    }

    const handleDelete = () => {
        const request = new Request();
        const url = '/api/practiceitems/' + item.id;
        request.delete(url).then(() => {
            window.location = '/api/practiceitems'
        })
    }

    return (<div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder={item.name} name="name" onChange={handleChange} value={newEditedItem.name} />
            <input type="number" placeholder={item.priority} name="priority" onChange={handleChange} value={newEditedItem.priority} />
            <input type="number" placeholder={item.time} name="time" onChange={handleChange} value={newEditedItem.time} />
            <input type="text" placeholder={item.category} name="category" onChange={handleChange}  value={newEditedItem.category} />
            <input type="text" placeholder={item.youtubeLink} name="youtubelink" onChange={handleChange}  value={newEditedItem.youtubelink} />
            <input type="number" placeholder={item.bpm} name="bpm" onChange={handleChange} value={newEditedItem.bpm} />
            <input type="text" placeholder={item.notes} name="notes" onChange={handleChange}  value={newEditedItem.notes} />
            <button type="submit" onSubmit={handleSubmit}>Save</button>
        </form>
        <button onClick={handleDelete}>delete</button>

    </div>);
}

export default EditPracticeItem;

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
