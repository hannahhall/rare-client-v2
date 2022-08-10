import { useState } from "react"
import { createCategory } from "../../managers/CategoryManager"

export const CategoryForm = ({ loadCategories, initialCategory = {} }) => {

  const [category, setCategory] = useState(initialCategory)

  const saveCategoryEvent = (event) => {
    event.preventDefault()

    createCategory(category)
      .then((data) => {
        loadCategories(data)
        setCategory({label: ''})
      })
  }

  return (
    <form>
      <div className="field">
        <label className="label">New Category:</label>
        <div className="control">

        <input
          required
          type="text"
          className="input"
          value={category.label}
          onChange={
            (evt) => {
              const copy = { ...category }
              copy.label = evt.target.value
              setCategory(copy)
            }
          } />
        </div>
      </div>
      <button
        onClick={(evt) => saveCategoryEvent(evt)}
        className="button is-primary">
        Save
      </button>
    </form>
  )
}
