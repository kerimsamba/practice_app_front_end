import React, { useState, useEffect } from 'react';
import DrumLooper from '../components/DrumLooper';
import NewPracticeItem from '../components/NewPracticeItem';
import PracticeItem from '../components/PracticeItem';
import Request from '../helper/Request.js';
import Review from '../components/Review';
import FetchLowerPriorityItems from '../components/FetchLowerPriorityItems';
import './MainContainer.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListPracticeItems from '../components/ListPracticeItems';






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

    // const itemsList = items.map((item, index) => {
    //     return (

    //         <ul key={index}>
    //             <div>
    //                 <PracticeItem item={item} />
    //             </div>
    //         </ul>
    //     )
    // })

    return (


        <div>
            <Routes>
                <Route path="/newpracticeitem" element={<NewPracticeItem />} />
                <Route path="/review" element={<Review />} />
            </Routes>
            <h3>Todays practice items are:</h3>
            <div>
                <ListPracticeItems/>
                <button><FetchLowerPriorityItems />Lower Priority Items</button>
            </div>

            <div className='bottom-bar'>
                <ul>
                    <li> <DrumLooper /></li>
                    <Link to="/newpracticeitem">Add new</Link>
                    <Link to="/review">Review All</Link>

                </ul>
            </div>
        </div>
        // <div><Review/></div>

    );
}

export default MainContainer;


