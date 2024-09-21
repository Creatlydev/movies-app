export function getIdFromQuery ({ query, sep }) {
  return query.split(sep)[0]
}
