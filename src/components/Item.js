import React from 'react';
import './style/Item.css';
import { useState } from 'react';
import EditPracticeItem from './EditPracticeItem';


const Item = ({ item }) => {

    return (
        <div >
            <ul>
                <li className="box2">{item.priority}</li>
                <li className="box3" >Title:
                    <div>{item.name}</div> </li>
                <li className="box4">Category:
                    <div>{item.category}</div></li>
                <li className="box5">
                    <div>Last played: {item.dateLastPlayed} </div>
                <div>Played: {item.numOfPlays}</div>
                </li>
                <button><EditPracticeItem item={item}/></button>

            </ul>

        </div>
    );
}

export default Item;