export default (page, rowsPerPage) => {
	const offset = (page - 1) * rowsPerPage;
	return {offset, limit: rowsPerPage}
}