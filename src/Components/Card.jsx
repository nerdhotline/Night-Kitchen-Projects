import React from 'react'
import {useEffect} from "react"
import { useMachine } from '@xstate/react'
import { fetchMachine } from "../Utility/myFirstMachine"


export const Card = () => {
  const [fetchState, sendToFetchMachine] = useMachine(fetchMachine, {
    actions: {
      fetchData: (context, event) => {

      }
    }
  });
  // state.value                -> current state
  // send({ type: TRANSITION }) -> transition between states

  const URL = "https://api.thecatapi.com/v1/images/search";
  const LIMIT = "10";
  const KEY = "live_3H0P5gLpYlRVspXYdZgndGhjKVNAnTR2Mv634ZpCjkAbdlW75qNWsgCKz7SaeJ9B";
  const HAS_BREEDS = "1";
  const apiLink = `${URL}?limit=${LIMIT}&has_breeds=${HAS_BREEDS}&api_key=${KEY}`;
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  const sql2HubspotLoan = (object) => ({
    adaptability: adaptability
    affection_level
    alt_names
    cfa_url 
    child_friendly
    country_code
    country_codes
    description 
    dog_friendly
    energy_level
    experimental
    grooming
    hairless
    health_issues
    hypoallergenic
    id
    indoor
    intelligence
    lap
    life_span
    name  
    natural
    origin
    rare
    reference_image_id
    rex
    shedding_level
    short_legs
    social_needs
    stranger_friendly
    suppressed_tail
    temperament
    vcahospitals_url
    vetstreet_url
    vocalisation


  
  });


  // API CALL
  useEffect(() => {
    console.log("Test")
    async function fetchCats(){
      await fetch(apiLink, requestOptions).then(
        (response) => response.json()
      ).then(
        (result) => console.log(result)
      ).catch(
        (error) => console.error(error));
    }
    //fetchCats();
  });

  return (
    <div>
      {JSON.stringify(fetchState.value)}
      <button
        onClick = {() => {sendToFetchMachine({ type: "MOUSEOVER" });}}>
          MOUSEOVER
      </button>
      <button
        onClick = {() => {sendToFetchMachine({ type: "MOUSEOUT" });}}>
          MOUSEOUT
      </button>
    </div>
  )
}


  
