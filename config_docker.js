module.exports = {
	API_SERVER: 'http://api.bnb-nginx.kro.kr',
	SESSION_DB: {
		host: 'db',
		port: 3306,
		user: 'ssouser',
		password: 'sso1234',
		database: 'sso'
	},
	JWT: {
		option: {
			algorithm: 'HS256',
			issuer: "ezcode",
		},
		SECRET: 'b9d3a576-2c8a-4850-ae5d-c11474f72acb'
	}
}
