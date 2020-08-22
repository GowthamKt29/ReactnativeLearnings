import axios from 'axios';

export default axios.create({
baseURL:'https://api.yelp.com/v3/businesses',
headers:{
    Authorization:'Bearer wZohvx-olw-nQ3bNsQjee4KKGMoU3K8gXV31MFGp9q2QwqW-21nKbxlQDWB8dLxS3vppUKKvSLPAv2I42OQwxRjdkl3WcsHET2aEUEJoCZ5IirAaDsq9Oy6xRoslX3Yx'
}
});