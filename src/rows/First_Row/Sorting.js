
import React from 'react'
import '../rows.css';
import { Link } from "react-router-dom"

const Sorting = () => {
  return (
    <div>
      <h1>SORTING</h1>
      <table className="table">
        <tr>
          <th>#</th>
          <th>Title</th>
        </tr>

        <tr>
          <td>1</td>
          <td>3Sum</td>
        </tr>

        <tr>
          <td>2</td>
          <td>3Sum Closest</td>
        </tr>

        <tr>
          <td>3</td>
          <td>4Sum</td>
        </tr>

        <tr>
          <td>4</td>
          <td>Group Anagrams</td>
        </tr>
        
        <tr>
          <td>5</td>
          <td>Merge Intervals</td>
        </tr>

      </table>

    </div>
  )
}

export default Sorting