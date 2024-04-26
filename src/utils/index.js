export function getUpRange(page, limit, total, maxButtons){
  const realPage = page - 1;
  if (!total || (realPage * limit) > total) return []

  const array = [];

  const lastPage = Math.round(total / limit);
  const forLimit = lastPage < page + maxButtons ? lastPage : page + maxButtons;

  for (let i = realPage + 1; i < forLimit; i++){
    array.push(i + 1);
  }

  return array;
}

export function getDownRange(page, total, maxButtons) {
  const realPage = page - 1;
  if (!total || realPage === 0) return []

  const array = [];

  const lastPage = realPage - maxButtons < 1 ? 0 : realPage - maxButtons;

  for (let i = lastPage; i < realPage; i++){
    array.push(i + 1);
  }

  return array;
}