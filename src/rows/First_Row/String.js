
import React from 'react'
import '../rows.css';
import { Link } from "react-router-dom"

const String = () => {
  return (
    <div>
      <h1>STRING</h1>
      <table className="table">
        <tr>
          <th>#</th>
          <th>Title</th>
        </tr>

        <tr>
          <td>1</td>
          <td>Longest Substring Without Repeating Characters</td>
        </tr>

        <tr>
          <td>2</td>
          <td>Longest Palindromic Substring</td>
        </tr>

        <tr>
          <td>3</td>
          <td>Zigzag Conversion</td>
        </tr>

        <tr>
          <td>4</td>
          <td>String to Integer (atoi)</td>
        </tr>
        
        <tr>
          <td>5</td>
          <td>Regular Expression Matching</td>
        </tr>

      </table>
    </div>
  )
}

export default String