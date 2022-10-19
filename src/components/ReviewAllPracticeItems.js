import React, { useState, useEffect } from 'react';
import Request from '../helper/Request.js';
import EditPracticeItem from './EditPracticeItem.js';

const ReviewAllPracticeItems = () => {

    const [fullList, setFullList] = useState([]);


    const retrieveAllItems = () => {
        const request = new Request()
        request.get("/api/practiceitems")
            .then((data) => {
                setFullList(data);
            })
    }
    useEffect(() => {
        retrieveAllItems();
    }, [])

    const fullListOfItems = fullList.map((entry, index) => {
        return (
            <ul className="Item" key={index}>
                <div>
                    <EditPracticeItem item={entry} />
                </div>

            </ul>
        )
    })

    return (
    <div>
        {fullListOfItems}
    </div>
    );
}

export default ReviewAllPracticeItems;