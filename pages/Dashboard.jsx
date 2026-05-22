import React, { useState } from "react"
import { Link } from "react-router-dom"
import Filters from "../components/Filters"
import JobCard from "../components/JobCard"
import Stats from "../components/Stats"

export default function Dashboard({ jobs, deleteJob }) {
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("All")
  const [sort, setSort] = useState("newest")
  const [followUpFilter, setFollowUpFilter] = useState("All")

  const today = new Date().toISOString().slice(0, 10)
  const searchText = search.toLowerCase()

  const filteredJobs = jobs
    .filter(job => {
      const matchesSearch =
        job.company.toLowerCase().includes(searchText) ||
        job.position.toLowerCase().includes(searchText) ||
        (job.location || "").toLowerCase().includes(searchText) ||
        (job.notes || "").toLowerCase().includes(searchText)

      const matchesStatus = status === "All" || job.status === status
      const needsFollowUp =
        job.followUpDate &&
        job.followUpDate <= today &&
        job.status !== "Rejected" &&
        job.status !== "Offer"

      const matchesFollowUp =
        followUpFilter === "All" || needsFollowUp

      return matchesSearch && matchesStatus && matchesFollowUp
    })
    .sort((a, b) => {
      if (sort === "newest") {
        return new Date(b.date) - new Date(a.date)
      }

      if (sort === "oldest") {
        return new Date(a.date) - new Date(b.date)
      }

      if (sort === "company") {
        return a.company.localeCompare(b.company)
      }

      if (sort === "followUp") {
        return (a.followUpDate || "9999-12-31").localeCompare(
          b.followUpDate || "9999-12-31"
        )
      }

      return 0
  })

  return (
    <section className="page">
      <div className="page-title">
        <div>
          <p className="small-title">Job applications</p>
          <h1>Dashboard</h1>
          <p className="description">
            Track applications, interviews, offers, and next steps.
          </p>
        </div>

        <Link className="button primary-button" to="/add">
          Add Job
        </Link>
      </div>

      <Stats jobs={jobs} />

      <Filters
        search={search}
        status={status}
        sort={sort}
        setSearch={setSearch}
        setStatus={setStatus}
        setSort={setSort}
        followUpFilter={followUpFilter}
        setFollowUpFilter={setFollowUpFilter}
      />

      {filteredJobs.length > 0 ? (
        <div className="jobs-list">
          {filteredJobs.map(job => (
            <JobCard key={job.id} job={job} deleteJob={deleteJob} />
          ))}
        </div>
      ) : (
        <div className="empty-box">
          <h2>No jobs found</h2>
          <p>Try changing the search, status, or follow-up filter.</p>
        </div>
      )}
    </section>
  )
}
