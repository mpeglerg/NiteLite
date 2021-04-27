import getStreetlightScore from './streetlight-score'
import getCrimeScore from './crime-score'
import getConstructionScore from './construction-score'
const getAggregateScore = (origin, destination) => {
    const streetlightScore = getStreetlightScore(origin, destination)/10
    const crimeScore = getCrimeScore(origin, destination)/10
    const constructionScore = getConstructionScore(origin, destination)/10
    return (((streetlightScore + crimeScore + constructionScore) / 3) * 10).toFixed(1)
}
export default getAggregateScore;