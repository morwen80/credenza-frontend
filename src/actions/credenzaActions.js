export function fetchCredenza() {
  return (dispatch) => { dispatch({ type: 'LOAD_CREDENZA' });

    return fetch('http://localhost:3000/fooditems/')
      .then(response => response.json())
      .then(foodInCredenza => dispatch({ type: 'FETCH_CREDENZA_SUCCESS', payload: foodInCredenza }));
  };
}


export function addToCredenza(newFoodItem) {
  const newFood = {
    food: newFoodItem.food,
    itemnumber: 1,
    list_id: 1,
    faved: false
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
    .then(foodInCredenza => dispatch({ type: 'ADD_TO_CREDENZA_SUCCESS', payload: foodInCredenza }))
    .catch(error => dispatch({ type: 'ADD_TO_CREDENZA_ERROR', error: error.message }));
    }
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


export function updateFaves(foodItem) {
  return (dispatch) => { dispatch({ type: 'EDIT_FOOD_ATTEMPT' });

    return fetch(`http://localhost:3000/fooditems/${foodItem.id}`, {
  method: 'PATCH',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(foodItem)
    })
    .then(resp => resp.json())
    .then(faves => dispatch({ type: 'EDIT_FOOD_SUCCESS', payload: faves}))
    .catch(error => dispatch({ type: 'EDIT_FOOD_ERROR', error: error.message }));
  }
}


export function increment(foodItem) {
  return (dispatch) => { dispatch({ type: 'EDIT_FOOD_ATTEMPT' });

    return fetch(`http://localhost:3000/fooditems/${foodItem.id}`, {
  method: 'PATCH',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(foodItem)
    })
    .then(resp => resp.json())
    .then(faves => dispatch({ type: 'EDIT_FOOD_SUCCESS', payload: faves}))
    .catch(error => dispatch({ type: 'EDIT_FOOD_ERROR', error: error.message }));
  }
}


export function editFoodItem(foodItem) {
  return (dispatch) => { dispatch({ type: 'EDIT_FOOD_ATTEMPT' });

    return fetch(`http://localhost:3000/fooditems/${foodItem.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(foodItem)
        })
        .then(resp => resp.json())
        .then(foodItems => dispatch({ type: 'EDIT_FOOD_SUCCESS', payload: foodItems}))
        .catch(error => dispatch({ type: 'EDIT_FOOD_ERROR', error: error.message }));
    }
}
