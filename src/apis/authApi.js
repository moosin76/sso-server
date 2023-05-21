import { ssoApi } from 'boot/axios'

const URL = `/auth`;

const join = async (form) => {
	return await ssoApi.post(`${URL}/join`, form);
}

export default {
	join,
}