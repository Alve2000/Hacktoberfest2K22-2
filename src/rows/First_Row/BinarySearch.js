
import React from 'react'
import '../rows.css';
import { Link } from "react-router-dom"

const BinarySearch = () => {
  return (
    <div>
      <h1>BINARY SEARCH</h1>
      <table className="table">

      <Link to='/oneBinary'>
        <tr>
          <td>1</td>
          <td>Median of Two Sorted Arrays</td>
        </tr>
      </Link>
        
        <Link to='/twoBinary'>
          <tr>
            <td>2</td>
            <td>Search in Rotated Sorted Array</td>
          </tr>
        </Link>

        <Link to='/threeBinary'>
          <tr>
            <td>3</td>
            <td>Find First and Last Position of Element in Sorted Array</td>
          </tr>
        </Link>

        <Link to='/fourBinary'>
          <tr>
            <td>4</td>
            <td>Search Insert Position</td>
          </tr>
        </Link>

        <Link to='/fiveBinary'>
          <tr>
            <td>5</td>
            <td>Sqrt(x)</td>
          </tr>
        </Link>
                
      </table>
    </div>
  )
}

export default BinarySearch