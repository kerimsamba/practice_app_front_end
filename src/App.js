import './App.css';
import React from 'react';
import MainContainer from './containers/MainContainer';
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom';
import NewPracticeItem from './components/NewPracticeItem';
import ReviewAllPracticeItems from './components/ReviewAllPracticeItems';
import FetchLowerPriorityItems from './components/FetchLowerPriorityItems';
import ListDailyPracticeItems from './components/ListDailyPracticeItems';


function App() {
  return (

    <>
      <NavBar />
      <Routes>
        <Route path="/addnew" element={<NewPracticeItem />} />
        <Route path="/review" element={<ReviewAllPracticeItems />} />
        <Route path="/lowerpriorityitems" element={<FetchLowerPriorityItems />} />
        <Route path="/practiceitems" element={<ListDailyPracticeItems />} />
      </Routes>
      <MainContainer />
    </>
  );
}

export default App;
