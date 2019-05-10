
export const loadCredenza = () => ({
  type: 'LOAD_CREDENZA'
});

export const fetchCredenzaSuccess = foodItems => ({
  type: 'FETCH_CREDENZA_SUCCESS',
  foodItems
});

export const incrementItemNumber = (amount) => ({
  type: 'INCREMENT_ITEM_NUMBER',
  amount
})

// export const fetchCredenzaError = error => ({
//   type: 'FETCH_CREDENZA_ERROR',
//   payload: {error}
// })

// export const addToCredenza = foodItem => ({
//   type: 'ADD_TO_CREDENZA',
//   foodItem
// })


// export default function fetchCredenzaaaaa() {
//   return dispatch => {
//     dispatch(loadCredenza());
//       return fetch('http://localhost:3000/credenza')
//         // .then(handleErrors)
//         .then(res => res.json())
//         .then(data => dispatch { type: 'LOAD_CREDENZA_SUCCESS',
//               payload: data})
//       }
// }


export function fetchCredenza() {
  return (dispatch) => {
    dispatch({ type: 'LOAD_CREDENZA' });
    return fetch('http://localhost:3000/fooditems/')
      .then(response => response.json())
      .then(foodInCredenza => dispatch({ type: 'FETCH_CREDENZA_SUCCESS', payload: foodInCredenza }));
  };
}



  // export function addToCredenza2(foodItem) {
  //
  //   return (dispatch) => {
  //     dispatch({ type: 'LOAD_CREDENZA' });
  //
  //     return fetch('http://localhost:3000/fooditems', {
  //       method: 'POST',
  //       headers: {
  //         "Content-Type": 'application-json',
  //         "Accept": 'application/json'
  //       },
  //       body: JSON.stringify({food: foodItem, itemNumber: 1, needToBuy: false, list_id: 1})
  //     })
  //
  //       .then(resp => resp.json())
  //       .then(foodObject => dispatch({ type: 'ADD_TO_CREDENZA', payload: foodObject})
  //       );
  //   }
  // }


  export function addToCredenza3(newFoodItem) {
    return (dispatch) => {
      dispatch({ type: 'LOAD_CREDENZA' });

      fetch('http://localhost:3000/fooditems', {
        method: 'POST',
        headers: {"Content-Type": 'application-json'},
        body: JSON.stringify(newFoodItem)
      })
      .then(response => response.json())
      .then(foodInCredenza => dispatch({ type: 'ADD_TO_CREDENZA', payload: foodInCredenza }));
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
