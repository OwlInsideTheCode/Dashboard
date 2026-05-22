import React, { useState } from "react"
import { Link } from "react-router-dom"

const emptyForm = {
  company: "",
  position: "",
  status: "Applied",
  priority: "Medium",
  location: "",
  salary: "",
  link: "",
  date: new Date().toISOString().slice(0, 10),
  followUpDate: "",
  notes: ""
}

export default function JobForm({ initialData = emptyForm, buttonText, onSubmit }) {
  const [formData, setFormData] = useState({ ...emptyForm, ...initialData })

  function handleChange(event) {
    const { name, value } = event.target

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!formData.company || !formData.position) {
      alert("Company and position are required.")
      return
    }

    onSubmit(formData)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Company
          <input
            className="input"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Position
          <input
            className="input"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Status
          <select
            className="input"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Rejected">Rejected</option>
            <option value="Offer">Offer</option>
          </select>
        </label>

        <label>
          Priority
          <select
            className="input"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>

        <label>
          Location
          <input
            className="input"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </label>

        <label>
          Salary
          <input
            className="input"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />
        </label>

        <label>
          Date
          <input
            className="input"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Job Link
          <input
            className="input"
            type="url"
            name="link"
            value={formData.link}
            onChange={handleChange}
          />
        </label>

        <label>
          Follow-up Date
          <input
            className="input"
            type="date"
            name="followUpDate"
            value={formData.followUpDate || ""}
            onChange={handleChange}
          />
        </label>
      </div>

      <label>
        Notes
        <textarea
          className="input textarea"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
      </label>

      <div className="form-actions">
        <button className="button primary-button" type="submit">
          {buttonText}
        </button>

        <Link className="button secondary-button" to="/">
          Cancel
        </Link>
      </div>
    </form>
  )
}
