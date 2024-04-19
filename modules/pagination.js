function paginate(parts, query) {
    const page = parseInt(query.page) || 1;
    const pageSize = 30;
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const paginatedParts = parts.slice(startIndex, endIndex);
    return paginatedParts;
  }
  
  module.exports = { paginate };
  