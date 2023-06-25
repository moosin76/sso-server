import { defineStore } from 'pinia';
import authApi from 'src/apis/authApi';
import { socket } from 'boot/socket';

export default defineStore('user', {
	state: () => ({
		socketToken: null,
		member: null,
		accToken: null,
	}),
	getters: {
		isLogin() {
			return !!this.member;
		}
	},
	actions: {
		async socketLogin({ member, token }) {
			this.member = member;
			this.accToken = token;
			authApi.setHeaderToken(token)
		},
		async socketLogout() {
			this.member = null;
			this.accToken = null;
			authApi.unsetHeaderToken();
		},
		async loginLocal(form) {
			const data = await authApi.login(form);
			if (data) {
				this.socketLogin(data);
				socket.emit('sso:login', this.socketToken, this.accToken);
			}
			return data;
		},
		async logout() {
			const data = await authApi.logout(this.socketToken);
			if (data) {
				this.socketLogout();
				socket.emit('sso:logout', this.socketToken);
			}
		}
	},

});