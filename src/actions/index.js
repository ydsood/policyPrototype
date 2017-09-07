import axios from 'axios';

export const FETCH_POLICIES = 'fetch_policies';

const ROOT_URL = 'https://pd.dev.fasttechnology.com/PD1Dev2rs/';

export function fetchPolicies() {
    console.log('I made it here');
    const request = axios.get(`${ROOT_URL}/resources/Policy`, {
        auth: {
            username: 'dkirlin',
            password: 'S123456'
        }
    });
    return {
        type: FETCH_POLICIES,
        payload: request
    }
}