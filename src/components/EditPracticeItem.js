import React, { useState } from 'react';
import Request from '../helper/Request.js';


const EditPracticeItem = ({ item }) => {

    const [newEditedItem, setEditedItem] = useState({ ...item });

    const handleChange = (event) => {
        const copyitem = { ...newEditedItem }
        const propertyName = event.target.name;
        copyitem[propertyName] = event.target.value;
        setEditedItem(copyitem)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newEditedItem);
        const request = new Request();
        const url = '/api/practiceitems';
        request.post(url, newEditedItem).then(() => {
            window.location = '/api/practiceitems'
        })
    }

    const handleDelete = () => {
        const request = new Request();
        const url = '/api/practiceitems/' + item.id;
        request.delete(url).then(() => {
            window.location = '/api/practiceitems'
        })
    }

    return (
    <div>
        <form onSubmit={handleSubmit} className="edit-form">
            <div>
                <label>Name</label>
                <input type="text" label="test" placeholder={item.name} name="name" onChange={handleChange} value={newEditedItem.name} />
            </div>
            <div>
                <label>Priority</label>
                <input type="number" placeholder={item.priority} name="priority" onChange={handleChange} value={newEditedItem.priority} />
            </div>

            <div>
                <label>Time</label>
                <input type="number" placeholder={item.time} name="time" onChange={handleChange} value={newEditedItem.time} />
            </div>

            <div>
                <label>Category</label>
                <input type="text" placeholder={item.category} name="category" onChange={handleChange} value={newEditedItem.category} />

            </div>
            <div>
                <label>YouTube</label>
                <input type="text" placeholder={item.youtubeLink} name="youtubelink" onChange={handleChange} value={newEditedItem.youtubelink} />
            </div>
            <div>
                <label>BPM</label>
                <input type="number" placeholder={item.bpm} name="bpm" onChange={handleChange} value={newEditedItem.bpm} />
            </div>
            <div>
                <label>Notes</label>
                <input type="text" placeholder={item.notes} name="notes" onChange={handleChange} value={newEditedItem.notes} />
            </div>
            <button type="submit" onSubmit={handleSubmit}>Save</button>
            <button onClick={handleDelete}>delete</button>
        </form>

    </div>);
}

export default EditPracticeItem;


