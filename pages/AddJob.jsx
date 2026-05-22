import React from "react"
import { useNavigate } from "react-router-dom"
import JobForm from "../components/JobForm"

export default function AddJob({ addJob }) {
  const navigate = useNavigate()

  function handleSubmit(newJob) {
    addJob(newJob)
    navigate("/")
  }

  return (
    <section className="page small-page">
      <p className="small-title">New application</p>
      <h1>Add Job</h1>

      <JobForm buttonText="Add Job" onSubmit={handleSubmit} />
    </section>
  )
}
