import React from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import JobForm from "../components/JobForm"

export default function EditJob({ jobs, editJob }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const job = jobs.find(job => job.id === id)

  if (!job) {
    return <Navigate to="/" replace />
  }

  function handleSubmit(updatedJob) {
    editJob(updatedJob)
    navigate(`/jobs/${id}`)
  }

  return (
    <section className="page small-page">
      <p className="small-title">Edit application</p>
      <h1>Edit Job</h1>

      <JobForm
        initialData={job}
        buttonText="Save Changes"
        onSubmit={handleSubmit}
      />
    </section>
  )
}
