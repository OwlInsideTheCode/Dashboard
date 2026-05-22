import React from "react"

export default function Stats({ jobs }) {
  const today = new Date().toISOString().slice(0, 10)
  const total = jobs.length
  const applied = jobs.filter(job => job.status === "Applied").length
  const interview = jobs.filter(job => job.status === "Interview").length
  const offer = jobs.filter(job => job.status === "Offer").length
  const followUps = jobs.filter(job =>
    job.followUpDate &&
    job.followUpDate <= today &&
    job.status !== "Rejected" &&
    job.status !== "Offer"
  ).length
  const stats = [
    ["Total", total],
    ["Applied", applied],
    ["Interview", interview],
    ["Offer", offer],
    ["Follow-ups", followUps]
  ]

  return (
    <section className="stats-grid">
      {stats.map(([label, value]) => (
        <div className="stat-card" key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
    </section>
  )
}
