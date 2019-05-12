


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

export function removeFromCredenza(id) {
  return (dispatch) => {
    dispatch({ type: 'REMOVE_FROM_CREDENZA', payload: id });
    fetch(`http://localhost:3000/fooditems/${id}`, {
      method: 'DELETE'}
    )
    .then(response => response.json())
    .then(foodInCredenza => dispatch({ type: 'FETCH_FROM_CREDENZA', payload: foodInCredenza }));
  };
}
