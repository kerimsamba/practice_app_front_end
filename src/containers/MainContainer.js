import React, { useState, useEffect } from 'react';
import DrumLooper from '../components/DrumLooper';
import NewPracticeItem from '../components/NewPracticeItem';
import PracticeItem from '../components/PracticeItem';
import Request from '../helper/Request.js';
import Review from '../components/Review';
import FetchLowerPriorityItems from '../components/FetchLowerPriorityItems';
// import './MainContainer.css';





const MainContainer = () => {

    const [items, setItems] = useState([]);


    useEffect(() => {
        const request = new Request()
        request.get("/api/practiceitems")
            .then((data) => {
                setItems(data);
            })
    }, [])

    // const findItemById = (id) => {
    //   return items.find((item) => {
    //     return item.id === parseInt(id)
    //   })
    // }

    // const handeDelete = (id) => {
    //   const request = new Request();
    //   const url ='/api/practiceitems/' + id;
    //   request.delete(url).then(() => {
    //     window.location = '/api/practiceitems'
    //   })
    // }

    // const handlePost = (item) => {
    //   const request = new Request();
    //   request.post('/api/practiceitems/', item)
    //   .then(() => {
    //     window.location = '/api/practiceitems'
    //   })
    // }

    // const itemDetailWrapper = () => {
    //   const { id } = useParams()
    //   let foundItem = findItemById(id)
    //   return <PracticeItem item={foundItem} handleDelete={handeDelete}/>
    // }

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
        <div>
            <h3>Todays practice items are:</h3>
            <div>
                {itemsList}
                <button><FetchLowerPriorityItems/></button>
            </div>

            <div className='bottom-bar'>
            <button><DrumLooper /></button>
            <button><Review /></button>
            <button><NewPracticeItem /></button>
            </div>
        </div>
    );
}

export default MainContainer;