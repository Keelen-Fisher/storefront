export const categoryOrder = (activeCategory) => {
  return {
    type: 'CATEGORY',
    payload: activeCategory,
  }
}

export default categoryOrder;
