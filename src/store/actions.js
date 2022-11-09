export const categoryOrder = (category) => {
  return {
    type: 'CATEGORY',
    payload: category,
  }
}

export const reset = () => {
  return {
    type: 'RESET',
  }
}

