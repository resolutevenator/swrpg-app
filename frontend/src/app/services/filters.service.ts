export function sortCollectionOfCareers(careers) {
  const seriesSortOrder = ['edge', 'rebellion', 'force', 'clone'];

  careers.sort((a, b) => {
    if (a.series === b.series) {
      return a.key.localeCompare(b.key);
    } else {
      return seriesSortOrder.indexOf(a.series) - seriesSortOrder.indexOf(b.series);
    }
  }
  )
}
