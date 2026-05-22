import React from "react"
import { Link, Navigate, useNavigate, useParams } from "react-router-dom"

export default function JobDetails({ jobs, deleteJob }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const job = jobs.find(job => job.id === id)

  if (!job) {
    return <Navigate to="/" replace />
  }

  function handleDelete() {
    const shouldDelete = confirm("Delete this application?")

    if (shouldDelete) {
      deleteJob(job.id)
      navigate("/")
    }
  }

  return (
    <section className="page small-page">
      <div className="details-card">
        <div className="details-top">
          <div>
            <p className="small-title">{job.company}</p>
            <h1>{job.position}</h1>
          </div>

          <span className={`status ${job.status.toLowerCase()}`}>
            {job.status}
          </span>
        </div>

        <div className="details-grid">
          <div>
            <strong>Location</strong>
            <p>{job.location || "Not provided"}</p>
          </div>

          <div>
            <strong>Salary</strong>
            <p>{job.salary || "Not provided"}</p>
          </div>

          <div>
            <strong>Date</strong>
            <p>{job.date}</p>
          </div>

          <div>
            <strong>Priority</strong>
            <p>{job.priority}</p>
          </div>

          <div>
            <strong>Follow-up Date</strong>
            <p>{job.followUpDate || "Not set"}</p>
          </div>

          <div>
            <strong>Job Link</strong>
            <p>
              {job.link ? (
                <a href={job.link} target="_blank" rel="noreferrer">
                  Open link
                </a>
              ) : (
                "No link"
              )}
            </p>
          </div>

          <div className="full-row">
            <strong>Notes</strong>
            <p>{job.notes || "No notes"}</p>
          </div>
        </div>

        <div className="form-actions">
          <Link className="button secondary-button" to="/">
            Back
          </Link>

          <Link className="button primary-button" to={`/jobs/${job.id}/edit`}>
            Edit
          </Link>

          <button className="button danger-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </section>
  )
}
