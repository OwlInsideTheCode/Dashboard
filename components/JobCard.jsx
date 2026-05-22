import React from "react"
import { Link } from "react-router-dom"

export default function JobCard({ job, deleteJob }) {
  const today = new Date().toISOString().slice(0, 10)
  const isOverdue = job.followUpDate && job.followUpDate < today
  const isDueToday = job.followUpDate === today

  function handleDelete() {
    const shouldDelete = confirm("Delete this application?")

    if (shouldDelete) {
      deleteJob(job.id)
    }
  }

  return (
    <article className="job-card">
      <div className="job-card-top">
        <div>
          <h2>{job.position}</h2>
          <p>{job.company}</p>
        </div>

        <span className={`status ${job.status.toLowerCase()}`}>
          {job.status}
        </span>
      </div>

      {(isOverdue || isDueToday) && (
        <span className={`follow-up-badge ${isOverdue ? "overdue" : "today"}`}>
          {isOverdue ? "Follow-up overdue" : "Follow-up today"}
        </span>
      )}

      <div className="job-info">
        <span>{job.location || "No location"}</span>
        <span>{job.salary || "No salary"}</span>
        <span>{job.date}</span>
        <span>Priority: {job.priority}</span>
        <span>Follow-up: {job.followUpDate || "Not set"}</span>
      </div>

      {job.notes && <p className="notes">{job.notes}</p>}

      <div className="card-actions">
        <Link className="button secondary-button" to={`/jobs/${job.id}`}>
          Details
        </Link>

        <Link className="button secondary-button" to={`/jobs/${job.id}/edit`}>
          Edit
        </Link>

        <button className="button danger-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </article>
  )
}
