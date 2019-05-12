
export const loadCredenza = () => ({
  type: 'LOAD_CREDENZA'
});

export const fetchCredenzaSuccess = foodItems => ({
  type: 'FETCH_CREDENZA_SUCCESS',
  foodItems
});

// export const updateItemFood = (amount) => ({
//   type: 'UPDATE_ITEM_FOOD',
//   amount
// })

export const increment = () => {
    return {
        type: "INCREMENT"
    }
}



export function fetchCredenza() {
  return (dispatch) => {
    dispatch({ type: 'LOAD_CREDENZA' });
    return fetch('http://localhost:3000/fooditems/')
      .then(response => response.json())
      .then(foodInCredenza => dispatch({ type: 'FETCH_CREDENZA_SUCCESS', payload: foodInCredenza }));
  };
}


export function addToCredenza(newFoodItem) {
  const newFood = {
    food: newFoodItem.food,
    itemnumber: newFoodItem.itemnumber,
    list_id: 1
  }
  return (dispatch) => {
    dispatch({ type: 'LOAD_CREDENZA' });

    fetch('http://localhost:3000/fooditems', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newFood)
    })
    .then(response => response.json())
    .then(foodInCredenza => dispatch({ type: 'ADD_TO_CREDENZA', payload: foodInCredenza }));
};
}


export function updateItemFood(foodItem) {

  return (dispatch) => {
    dispatch({ type: 'INCREMENT' });
    fetch(`http://localhost:3000/fooditems/${foodItem.id}`, {
    method: 'PATCH',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(foodItem)
    })
    .then(response => response.json())
    .then(updatedItemFood => dispatch({ type: 'UPDATE_ITEM_FOOD', payload: updatedItemFood }));
};
}
