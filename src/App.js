
import Home from './Home.js'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import { darkTheme, lightTheme } from './utils/Theme'

import Array from "./rows/First_Row/Array.js";
import BinarySearch from "./rows/First_Row/BinarySearch.js";
import Sorting from "./rows/First_Row/Sorting.js";
import String from "./rows/First_Row/String.js";

import LinkedList from "./rows/Second_Row/LinkedList.js";
import Matrix from "./rows/Second_Row/Matrix.js";
import Stack from "./rows/Second_Row/Stack.js";
import Tree from "./rows/Second_Row/Tree.js";

import Backtracking from "./rows/Third_Row/Backtracking.js";
import Graph from "./rows/Third_Row/Graph.js";
import Greedy from "./rows/Third_Row/Greedy.js";
import Heap from "./rows/Third_Row/Heap.js";

import Game_Theory from "./rows/Fourth_Row/Game_Theory.js";
import Hash_Function from "./rows/Fourth_Row/Hash_Function.js";
import Merge_Sort from "./rows/Fourth_Row/Merge_Sort.js";
import Two_Pointers from "./rows/Fourth_Row/Two_Pointers.js";

import One from "./categories/Array/One.js"
import Two from "./categories/Array/Two.js"
import Three from "./categories/Array/Three.js"
import Four from "./categories/Array/Four.js"
import Five from "./categories/Array/Five.js"

import OneBS from "./categories/BinarySearch/OneBS.js"
import TwoBS from "./categories/BinarySearch/TwoBS.js"
import ThreeBS from "./categories/BinarySearch/ThreeBS.js"
import FourBS from "./categories/BinarySearch/FourBS.js"
import FiveBS from "./categories/BinarySearch/FiveBS.js"

function App() {
  return (
    <BrowserRouter>
        <Routes>

          <Route path="/" index element={<Home />} />

          <Route path="array" element={<Array />} />
          <Route path="binarySearch" element={<BinarySearch />} />
          <Route path="sorting" element={<Sorting />} />
          <Route path="string" element={<String />} />

          <Route path="linked_List" element={<LinkedList />} />
          <Route path="matrix" element={<Matrix />} />
          <Route path="stack" element={<Stack />} />
          <Route path="tree" element={<Tree />} />
          
          <Route path="backtracking" element={<Backtracking />} />
          <Route path="graph" element={<Graph />} />
          <Route path="greedy" element={<Greedy />} />
          <Route path="heap" element={<Heap />} />

          <Route path="game_Theory" element={<Game_Theory />} />
          <Route path="hash_Function" element={<Hash_Function />} />
          <Route path="merge_Sort" element={<Merge_Sort />} />
          <Route path="two_Pointers" element={<Two_Pointers />} />

          <Route path="oneArray" element={<One />} />
          <Route path="twoArray" element={<Two />} />
          <Route path="threeArray" element={<Three />} />
          <Route path="fourArray" element={<Four />} />
          <Route path="fiveArray" element={<Five />} />

          <Route path="oneBinary" element={<OneBS />} />
          <Route path="twoBinary" element={<TwoBS />} />
          <Route path="threeBinary" element={<ThreeBS />} />
          <Route path="fourBinary" element={<FourBS />} />
          <Route path="fiveBinary" element={<FiveBS />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
