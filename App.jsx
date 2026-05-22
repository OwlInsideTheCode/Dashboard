import React, { useEffect, useState } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard"
import AddJob from "./pages/AddJob"
import EditJob from "./pages/EditJob"
import JobDetails from "./pages/JobDetails"
import { sampleJobs } from "./data/sampleJobs"
import { getSavedJobs, saveJobs } from "./utils/localStorage"

export default function App() {
  const [jobs, setJobs] = useState(() => getSavedJobs() || sampleJobs)

  useEffect(() => {
    saveJobs(jobs)
  }, [jobs])

  function addJob(newJob) {
    setJobs(prevJobs => [
      { ...newJob, id: crypto.randomUUID() },
      ...prevJobs
    ])
  }

  function editJob(updatedJob) {
    setJobs(prevJobs =>
      prevJobs.map(job => {
        if (job.id === updatedJob.id) {
          return updatedJob
        }

        return job
      })
    )
  }

  function deleteJob(id) {
    setJobs(prevJobs => prevJobs.filter(job => job.id !== id))
  }

  return (
    <>
      <Header />

      <main className="container">
        <Routes>
          <Route
            path="/"
            element={<Dashboard jobs={jobs} deleteJob={deleteJob} />}
          />

          <Route
            path="/add"
            element={<AddJob addJob={addJob} />}
          />

          <Route
            path="/jobs/:id"
            element={<JobDetails jobs={jobs} deleteJob={deleteJob} />}
          />

          <Route
            path="/jobs/:id/edit"
            element={<EditJob jobs={jobs} editJob={editJob} />}
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  )
}
