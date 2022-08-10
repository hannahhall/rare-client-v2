import { useState, useEffect } from "react"
import { getAllCategories } from "../../managers/CategoryManager"
import { CategoryForm } from "./CategoryForm"

export const CategoriesList = () => {
  const [categories, setCategories] = useState([])

  const loadCategories = () => {
    getAllCategories().then(categoriesData => setCategories(categoriesData))
  }

  useEffect(() => {
    loadCategories()
  }, [])

  return <section className="section">
    <div className="columns">
      <div className="column">
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Categories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              categories.map(category => (
                <tr>
                  <td>{category.label}</td>
                  <td>Edit</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div class="column">
        <CategoryForm loadCategories={loadCategories} />
      </div>
    </div>
  </section>
}
