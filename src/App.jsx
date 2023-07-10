//import './App.css'
import { useState } from 'react';
import Header from './components/Layout/Header';
import Recipes from './components/Recipes/Recipes';
import AddRecipeForm from './components/AddRecipe/AddRecipeForm';


function App() {

  return (
    <>
    <div>
      <Header></Header>
    </div>
    <div>
    <AddRecipeForm></AddRecipeForm>
    </div>
      <main>
        <Recipes></Recipes>
        </main>   
       </>
  )
}

export default App
