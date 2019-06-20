import superFetch from './superFetch';

class loginHelper {
	async validateLoginForm({ email, password}) {
		console.log('vlaidate form', {email, password})
		return await false;
	}

    async checkCredentials(payload) {
        let { email, password } = payload;
        return await true;
    }
}

export default new loginHelper();