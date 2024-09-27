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

  const catObject = (object) => ({
    adaptability: object.adaptability,
    affectionLevel: object.affection_level,
    altNames: object.alt_names,
    cfaURL: object.cfa_url,
    childFriendly: object.child_friendly,
    countryCode: object.country_code,
    countryCodes: object.country_codes,
    description: object.description,
    dogFriendly: object.dog_friendly,
    energyLevel: object.energy_level,
    experimental: object.experimental,
    grooming: object.grooming,
    hairless: object.hairless,
    healthIssues: object.health_issues,
    hypoallergenic: object.hypoallergenic,
    id: object.id,
    indoor: object.indoor,
    intelligence: object.intelligence,
    lap: object.lap,
    lifeSpan: object.life_span,
    name: object.name,
    natural: object.natural,
    origin: object.origin,
    rare: object.rare,
    referenceImageID: object.reference_image_id,
    rex: object.rex,
    sheddingLevel: object.shedding_level,
    shortLegs: object.short_legs,
    socialNeeds: object.social_needs,
    strangerFriendly: object.stranger_friendly,
    suppressedTail: object.suppressed_tail,
    temperament: object.temperament,
    vcaHospitalsURL: object.vcahospitals_url,
    vetStreetURL: object.vetstreet_url,
    vocalisation: object.vocalisation
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


  
