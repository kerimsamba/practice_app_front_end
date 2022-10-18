import React, { useState, useEffect } from 'react';
import Request from '../helper/Request.js';
import EditPracticeItem from './EditPracticeItem.js';
import Item from './Item';
import './style/Item.css';


const Review = () => {

    const [fullList, setFullList] = useState([]);


    const retrieveAllItems =() => {
        const request = new Request()
        request.get("/api/practiceitems")
            .then((data) => {
                setFullList(data);
            })
    }
    useEffect(() => {
        retrieveAllItems();
    }, [])


    const handleDelete = (id) => {
        const request = new Request();
        const url = '/api/practiceitems/' + id;
        console.log(url);
        request.delete(url).then(() => {
            retrieveAllItems();
        })
    }

    const fullListOfItems = fullList.map((entry, index) => {
        return (
            <ul className='list-container' key={index}>
                <div>
                    <EditPracticeItem item={entry} />
                    <button onClick={() => handleDelete(entry.id)}>delete</button>
                </div>

            </ul>
        )
    })

    return (<div>
        {fullListOfItems}
    </div>);
}

export default Review;