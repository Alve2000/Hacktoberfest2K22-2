
import React from 'react'
import '../rows.css';
import { Link } from "react-router-dom"


const Array = () => {
  return (
    <div>
      <h1>ARRAY</h1>
      <table className="table">

        <Link to='/oneArray'>
          <tr>
            <td>1. </td>
            <td>Two Sum</td>
          </tr>
        </Link>
        
        <Link to='/twoArray'>
          <tr>
            <td>2.</td>
            <td>Median of Two Sorted Arrays</td>
          </tr>
        </Link>

        <Link to='/threeArray'>
          <tr>
            <td>3.</td>
            <td>Container with most water</td>
          </tr>
        </Link>

        <Link to='/fourArray'>
          <tr>
            <td>4.</td>
            <td>3Sum</td>
          </tr>
        </Link>
        
        <Link to='/fiveArray'>
          <tr>
            <td>5.</td>
            <td>Next Permutation</td>
          </tr>
        </Link>

      </table>
    </div>
  )
}

export default Array