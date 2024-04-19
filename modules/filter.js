function filterParts(parts, query) {
  const { name, sn } = query;

  const lowerCaseName = name ? name.toLowerCase() : null;

  const filteredParts = parts.filter(({ name: partName, sn: partSN }) => {
    if (lowerCaseName && !partName.toLowerCase().includes(lowerCaseName)) return false;
    if (sn && partSN !== sn) return false;
    return true;
  });

  return filteredParts;
}

module.exports = { filterParts };

