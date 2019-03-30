import React from 'react';


function CreateFood() {
  return(
    <div class="FoodForm">

    <form>

      <label>URL of product
        <input type="text" name="name" />
      </label>

      <label>% fat</label>
        <input type="text" name="name" id="text1" />

      <label>% protein</label>
        <input type="text" name="name" id="text1"  />


      <label>% carbs</label>
        <input type="text" name="name" id="text1" />

        <input type="submit" value="Submit" />

    </form>

    </div>
  )
}

export default CreateFood;
