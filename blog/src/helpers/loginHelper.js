import superFetch from './superFetch';

class loginHelper {
    async checkCredentials(payload) {
        console.log('inside helper class', payload)
        return await true;
    }
}

export default new loginHelper();