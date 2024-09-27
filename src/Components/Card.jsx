import { useMachine } from '@xstate/react'
import { fetchMachine } from "../Utility/myFirstMachine"
import { catObject, apiLink } from '../Utility/Utility';
import { useState, useEffect } from 'react';
import { Details } from './Details';

export const Card = () => {
  const [queryPull, setQueryPull] = useState(null);
  const [state, sendState] = useMachine(fetchMachine.provide({
    actions: {
      fetchData: async (context, event) => {
        const requestOptions = { method: "GET", redirect: "follow"};
        try {
          const response = await fetch(apiLink, requestOptions);
          const data = await response.json();
          const temp = data.map(catObject);
          sendState({type: 'RESOLVE', results: temp});
          console.log(temp);
        } catch (error) {
          console.log(error)
        }
      }
    }
  }));

  useEffect(() => {
    if (queryPull === null) {
      state.context.results && state.context.results.map((obj) => setQueryPull(obj));
    }
  });

  return (
    <div>
      {JSON.stringify(state.value)}
      <button
        onClick = {() => {sendState({type: 'FETCH'})}}>
          Fetch
      </button>

      {state.matches('pending') ? <p>Loading</p> : null}
      {state.matches('successful') ? (
        <ul>
          <Details catObj = {queryPull}/>
        </ul>
      ) : null}
      {state.matches('failed') ? <p>Failed</p> : null}

      
    </div>
  );
}


  
