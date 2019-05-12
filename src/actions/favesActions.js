export function fetchFaves() {
  return (dispatch) => {
    dispatch({ type: 'LOAD_FAVES' });
    return fetch('http://localhost:3000/faves')
      .then(response => response.json())
      .then(allFaves => dispatch({ type: 'FETCH_FAVES_SUCCESS', payload: allFaves }));
  };
}

export function addToFaves(newFoodItem) {
  const newFood = {
    food: newFoodItem.food,
    list_id: 1
  }
  return (dispatch) => {
    dispatch({ type: 'LOAD_FAVES' });

    fetch('http://localhost:3000/faves', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newFood)
    })
    .then(response => response.json())
    .then(allFaves => dispatch({ type: 'ADD_TO_CREDENZA', payload: allFaves }));
};
}
