import React, { useState, useEffect } from 'react';
import PracticeItem from '../components/PracticeItem';
import EditPracticeItem from './EditPracticeItem';
import Request from '../helper/Request.js';


const ListPracticeItems = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const request = new Request()
        request.get("/api/practiceitems/daily")
            .then((data) => {
                setItems(data);
            })
    }, [])

    const itemsList = items.map((item, index) => {
        return (
            <ul key={index}>
                <div>
                    <PracticeItem item={item} />
                </div>
            </ul>
        )
    })

        return (
            <>{itemsList}</>
        );
        }



    export default ListPracticeItems;