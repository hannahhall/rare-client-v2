export const getAllCategories= () => {
  return fetch("http://localhost:8088/categories", {
    headers: {
      // 'Authorization': `Token ${localStorage.getItem('auth_token')}`
    }
  })
  .then(res => res.json())
};

export const createCategory = (category) => {
  return fetch("http://localhost:8088/categories", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          // 'Authorization': `Token ${localStorage.getItem('auth_token')}`
      },
      body: JSON.stringify(category)
  })
}
