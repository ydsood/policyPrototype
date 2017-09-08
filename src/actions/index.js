import axios from 'axios';

export const FETCH_POLICIES = 'fetch_policies';
export const FETCH_POLICY = 'fetch_policy';

const ROOT_URL = 'https://pd.dev.fasttechnology.com/PD1Dev1rs';

export function fetchPolicies(policyNumber, callback) {
    const limit = 8;
    let params = { limit };
    if (policyNumber) {
        params.policyNumber = policyNumber;
    }
    const request = axios.get(`${ROOT_URL}/resources/Policy`, {
        auth: {
            username: 'KCMiller',
            password: 'S123456'
        },
        params
    }).then((value) =>  {
        callback();
        return value;
    });
    return {
        type: FETCH_POLICIES,
        payload: request
    }
}

export function fetchPolicy(policyNumber) {
    const request = axios.get(`${ROOT_URL}/resources/Policy/${policyNumber}`, {
        auth: {
            username: 'KCMiller',
            password: 'S123456'
        }
    });
    return {
        type: FETCH_POLICY,
        payload: request
    }
}