import React from 'react'

const ShoppingList = ({shopItems}) => {
    console.log(shopItems);
    
  return (
    <div>
      <h1>Shopping List</h1>

      <ol>
        {
            shopItems.map(item=>(
                <li key={item}>{item}</li>
            ))
        }
      </ol>
    </div>
  )
}

export default ShoppingList
