// import React, { useState } from 'react'
// import {useEffect} from "react"
import { useMachine } from '@xstate/react'
import { fetchMachine } from "../Utility/myFirstMachine"
import { catObject } from '../Utility/catObject'

export const Card = () => {
  const [fetchState, sendToFetchMachine] = useMachine(fetchMachine.provide({
    actions: {
      fetchData: async (context, event) => {
        const URL = "https://api.thecatapi.com/v1/images/search";
        const LIMIT = "10";
        const KEY = "live_3H0P5gLpYlRVspXYdZgndGhjKVNAnTR2Mv634ZpCjkAbdlW75qNWsgCKz7SaeJ9B";
        const HAS_BREEDS = "1";
        const apiLink = `${URL}?limit=${LIMIT}&has_breeds=${HAS_BREEDS}&api_key=${KEY}`;
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        try {
          const response = await fetch(apiLink, requestOptions);
          const data = await response.json();
          const temp = data.map(catObject);
          sendToFetchMachine({type: 'RESOLVE', results: temp});
          console.log(temp);
        } catch (error) {
          console.log(error)
        }
      }
    }
  })
  );

  // state.value                -> current state
  // send({ type: TRANSITION }) -> transition between states
  

  return (
    <div>
      {JSON.stringify(fetchState.value)}
      <button
        onClick = {() => {sendToFetchMachine({type: 'FETCH'})}}>
          Fetch
      </button>
      {/* { (data === null) ? null : <p>{data}</p>} */}

      {fetchState.matches('pending') ? <p>Loading</p> : null}
      {fetchState.matches('successful') ? (
        <ul>
          {fetchState.context.results && fetchState.context.results.map((object) => <p>{JSON.stringify(object)}</p> )}
        </ul>
      ) : null}
      {fetchState.matches('failed') ? <p>Failed</p> : null}

      
    </div>
  );
}


  
