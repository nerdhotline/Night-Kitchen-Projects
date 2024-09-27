import { useEffect } from "react"

export const Details = (catObj) => {
    useEffect(() => {
        if (catObj != null){
            console.log(catObj.catOb.altNames);
        }
    });

    return ( catObj ? <p>{catObj.adaptability}</p> : null);

    // return (
    
    //   <div>
    //     <p> adaptability: {catObj[0].adaptability} </p>
    //     <p> affectionLevel: {catObj[0].affectionLevel} </p>
    //     <p> altNames: {catObj[0].altNames} </p>
    //     <p> cfaURL: {catObj[0].cfaURL} </p>
    //     <p> childFriendly: {catObj[0].childFriendly} </p>
    //     <p> countryCode: {catObj[0].countryCode} </p>
    //     <p> countryCodes: {catObj[0].countryCodes} </p>
    //     <p> description: {catObj[0].description} </p>
    //     <p> dogFriendly: {catObj[0].dogFriendly} </p>
    //     <p> energyLevel: {catObj[0].energyLevel} </p>
    //     <p> experimental: {catObj[0].experimental} </p>
    //     <p> grooming: {catObj[0].grooming} </p>
    //     <p> hairless: {catObj[0].hairless} </p>
    //     <p> healthIssues: {catObj[0].healthIssues} </p>
    //     <p> hypoallergenic: {catObj[0].hypoallergenic} </p>
    //     <p> id: {catObj[0].id} </p>
    //     <p> indoor: {catObj[0].indoor} </p>
    //     <p> intelligence: {catObj[0].intelligence} </p>
    //     <p> lap: {catObj[0].lap} </p>
    //     <p> lifeSpan: {catObj[0].lifeSpan} </p>
    //     <p> name: {catObj[0].name} </p>
    //     <p> natural: {catObj[0].natural} </p>
    //     <p> origin: {catObj[0].origin} </p>
    //     <p> rare: {catObj[0].rare} </p>
    //     <p> referenceImageID: {catObj[0].referenceImageID} </p>
    //     <p> rex: {catObj[0].rex} </p>
    //     <p> sheddingLevel: {catObj[0].sheddingLevel} </p>
    //     <p> shortLegs: {catObj[0].shortLegs} </p>
    //     <p> socialNeeds: {catObj[0].socialNeeds} </p>
    //     <p> strangerFriendly: {catObj[0].strangerFriendly} </p>
    //     <p> suppressedTail: {catObj[0].suppressedTail} </p>
    //     <p> temperament: {catObj[0].temperament} </p>
    //     <p> vcaHospitalsURL: {catObj[0].vcaHospitalsURL} </p>
    //     <p> vetStreetURL: {catObj[0].vetStreetURL} </p>
    //     <p> vocalisation: {catObj[0].vocalisation} </p>
    //     <p> weightMetric: {catObj[0].weightMetric} </p>
    //     <p> weightImperial: {catObj[0].weightImperial} </p>
    //     <p> wikiURL: {catObj[0].wikiURL} </p>
    //   </div>
    // );
  }