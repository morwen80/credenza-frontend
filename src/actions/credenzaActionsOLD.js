// export function fetchCredenzaOld(){
//   return (dispatch) => {
//     dispatch({ type: 'LOAD_CREDENZA' });
//
//     return fetch('http://localhost:3000/credenza')
//       .then(resp => resp.json())
//       .then(data => dispatch({ type: 'FETCH_CREDENZA', payload: data}));
//   };
// };

export function fetchCredenzaTest(){
  return (dispatch) => {
    dispatch({ type: 'LOAD_CREDENZA' });

    return fetch('http://localhost:3000/credenza')
      .then(resp => resp.json())
      .then(
        data => dispatch({ type: 'LOAD_CREDENZA_SUCCESS', payload: data}),
        error => dispatch({ type: 'LOAD_CREDENZA_ERROR', error: "Unexpected error!"}));
  };
};

export function fetchCredenza(){
    const foodInCredenza = fetch('http://localhost:3000/credenza')
      .then(resp => resp.json())

      return {
        type: 'LOAD_CREDENZA_SUCCESS',
        foodInCredenza
      }
}
// export const addToCredenza = () => {
//   return (dispatch) => {
//     fetch('http://localhost:3000/credenza')
//       .then(resp => resp.json())
//       .then( food => dispatch({ type: 'ADD_TO_CREDENZA', food: food})
//       );
//   };
// }



export function addToCredenza(foodItem) {
    const newFood = {
      food: foodItem
    }
  return (dispatch) => {
    dispatch({ type: 'LOAD_CREDENZA' });

    return fetch('http://localhost:3000/credenza', {
      method: 'POST',
      headers: {
        "Content-Type": 'application-json',
        "Accept": 'application/json'
      },
      body: JSON.stringify({newFood})
    })
      .then(resp => resp.json())
      .then(food => dispatch({ type: 'ADD_TO_CREDENZA', payload: food})
      );
  }
}



export const addNewFoodToCredenza = (food) => {
  const action = {
    type: "ADD_NEW_FOOD_TO_CREDENZA",
    food,
    num: 1,
    needToBuy: false
  }
  return action
}
