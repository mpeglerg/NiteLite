import getStreetlightScore from './streetlight-score'
import getCrimeScore from './crime-score'
import getConstructionScore from './construction-score'

const getAggregateScore = (origin, destination) => {
    const streetlightScore = getStreetlightScore(origin, destination)
    const crimeScore = getCrimeScore(origin, destination)
    const constructionScore = getConstructionScore(origin, destination)
    
    return ((streetlightScore / 10) + (crimeScore / 10) + (constructionScore / 10)) / 3
}

export {getAggregateScore}