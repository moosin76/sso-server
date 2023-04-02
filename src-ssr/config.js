const production = {
	API_SERVER : 'http://ssoapi.bnb.com:20200',
	SESSION_DB: {
		host: 'localhost',
		port: 3306,
		user: 'bnbsso',
		password: 'test1234',
		database: 'bnbsso'
	}
}

const development = {
	API_SERVER : 'http://ssoapi.bnb.com:20200',
	SESSION_DB: {
		host: 'localhost',
		port: 3306,
		user: 'bnbsso',
		password: 'test1234',
		database: 'bnbsso'
	}
}

export default { production, development }