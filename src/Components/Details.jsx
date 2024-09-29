import { useEffect } from "react"

export const Details = ({catObj}) => {
    useEffect(() => {
        if (catObj != null){
            console.log(catObj);
        }
    });

   
    return (
        (catObj == null) ? null : (
            <div>
                <p> adaptability: {catObj.adaptability} </p>
                <p> affectionLevel: {catObj.affectionLevel} </p>
                <p> altNames: {catObj.altNames} </p>
                <p> cfaURL: {catObj.cfaURL} </p>
                <p> childFriendly: {catObj.childFriendly} </p>
                <p> countryCode: {catObj.countryCode} </p>
                <p> countryCodes: {catObj.countryCodes} </p>
                <p> description: {catObj.description} </p>
                <p> dogFriendly: {catObj.dogFriendly} </p>
                <p> energyLevel: {catObj.energyLevel} </p>
                <p> experimental: {catObj.experimental} </p>
                <p> grooming: {catObj.grooming} </p>
                <p> hairless: {catObj.hairless} </p>
                <p> healthIssues: {catObj.healthIssues} </p>
                <p> hypoallergenic: {catObj.hypoallergenic} </p>
                <p> id: {catObj.id} </p>
                <p> indoor: {catObj.indoor} </p>
                <p> intelligence: {catObj.intelligence} </p>
                <p> lap: {catObj.lap} </p>
                <p> lifeSpan: {catObj.lifeSpan} </p>
                <p> name: {catObj.name} </p>
                <p> natural: {catObj.natural} </p>
                <p> origin: {catObj.origin} </p>
                <p> rare: {catObj.rare} </p>
                <p> referenceImageID: {catObj.referenceImageID} </p>
                <p> rex: {catObj.rex} </p>
                <p> sheddingLevel: {catObj.sheddingLevel} </p>
                <p> shortLegs: {catObj.shortLegs} </p>
                <p> socialNeeds: {catObj.socialNeeds} </p>
                <p> strangerFriendly: {catObj.strangerFriendly} </p>
                <p> suppressedTail: {catObj.suppressedTail} </p>
                <p> temperament: {catObj.temperament} </p>
                <p> vcaHospitalsURL: {catObj.vcaHospitalsURL} </p>
                <p> vetStreetURL: {catObj.vetStreetURL} </p>
                <p> vocalisation: {catObj.vocalisation} </p>
                <p> weightMetric: {catObj.weightMetric} </p>
                <p> weightImperial: {catObj.weightImperial} </p>
                <p> wikiURL: {catObj.wikiURL} </p>
            </div>)
        );
  }