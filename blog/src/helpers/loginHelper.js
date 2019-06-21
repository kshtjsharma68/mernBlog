import superFetch from './superFetch';

class loginHelper {
	async validateLoginForm({ email, password}) {
            let response = false;    
            if ( email.length && password.length ) {
                    response = true
                }
		return await response;
	}

    async checkCredentials(payload) {
        let { email, password } = payload;
        const login_response = await superFetch.post('/auth/login', {email, password})
                                            .then(res => res.json())
                                            .then(res => res)
                                            .catch((e) => e.json());
        return login_response;
    }

    createUser = async payload => {
        let { email, password } = payload;
        return await superFetch.post('/auth/register', payload)
                        .then(res => res.json())
                        .catch(e => new Error(JSON.stringify(e)))
    }
}

export default new loginHelper();