
import React from 'react'
import './App.css';
import { Link } from "react-router-dom";

const Home = () => {
  return (

    <div className="App">

        <h1>Data Structure and Algorithms</h1>

        <div className="container">

            <div className="row">

                <Link to='/array'>
                    <div className="box"><h2>Array</h2></div>
                </Link>
                
                <Link to='/binarySearch'>
                    <div className="box"><h2>Binary Search</h2></div>
                </Link>

                <Link to='/sorting'>
                    <div className="box"><h2>Sorting</h2></div>
                </Link>

                <Link to='/string'>
                <div className="box"><h2>String</h2></div>
                </Link>

            </div>

            <div className="row">
                <Link to='/linked_List'>
                    <div className="box"><h2>Linked List</h2></div>
                </Link>

                <Link to='/matrix'>
                    <div className="box"><h2>Matrix</h2></div>
                </Link>

                <Link to='/stack'>
                    <div className="box"><h2>Stack</h2></div>
                </Link>

                <Link to='/tree'>
                    <div className="box"><h2>Tree</h2></div>
                </Link>
                           
            </div>

            <div className="row">

                <Link to='/backtracking'>
                    <div className="box"><h2>Backtracking</h2></div>
                </Link>

                <Link to='/graph'>
                    <div className="box"><h2>Graph</h2></div>
                </Link>

                <Link to='/greedy'>
                    <div className="box"><h2>Greedy</h2></div>
                </Link>

                <Link to='/heap'>
                    <div className="box"><h2>Heap</h2></div>
                </Link>

            </div>

            <div className="row">

                <Link to='/game_Theory'>
                    <div className="box"><h2>Game Theory</h2></div>
                </Link>

                <Link to='/hash_Function'>
                    <div className="box"><h2>Hash Function</h2></div>
                </Link>

                <Link to='/merge_Sort'>
                    <div className="box"><h2>Merge Sort</h2></div>
                </Link>

                <Link to='/two_Pointers'>
                    <div className="box"><h2>Two Pointers</h2></div>
                </Link>

            </div>
            
        </div>
        
    </div>
  )
}

export default Home