import React, {useState, useEffect} from 'react';
import PracticeItem from './PracticeItem';
import Request from '../helper/Request';

const FetchLowerPriorityItems = () => {

    const [lowerPriorityItems, setLowerPriorityItems] = useState([]);

    useEffect(() => {
        const request = new Request()
        request.get("/api/lowerpriority")
            .then((data) => {
                setLowerPriorityItems(data);
            })
    }, [])

    const lowerPriotityItemsList = lowerPriorityItems.map((lowerPriorityItem, index) => {
        return (
            <ul key={index}>
                <div>
                    <PracticeItem item={lowerPriorityItem} />
                </div>
            </ul>
        )
    })

        return (
            <>{lowerPriotityItemsList}</>
        );
        }

 
export default FetchLowerPriorityItems;