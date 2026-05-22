import React from "react"

export default function Filters({
  search,
  status,
  sort,
  setSearch,
  setStatus,
  setSort,
  followUpFilter,
  setFollowUpFilter
}) {
  return (
    <section className="filters">
      <input
        className="input"
        type="search"
        placeholder="Search by company or position"
        value={search}
        onChange={event => setSearch(event.target.value)}
      />

      <select
        className="input"
        value={status}
        onChange={event => setStatus(event.target.value)}
      >
        <option value="All">Status</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Rejected">Rejected</option>
        <option value="Offer">Offer</option>
      </select>

      <select
        className="input"
        value={followUpFilter}
        onChange={event => setFollowUpFilter(event.target.value)}
      >
        <option value="All">All follow-ups</option>
        <option value="Due">Needs follow-up</option>
      </select>

      <select
        className="input"
        value={sort}
        onChange={event => setSort(event.target.value)}
      >
        <option value="newest">Newest first</option>
        <option value="oldest">Oldest first</option>
        <option value="company">Company A-Z</option>
        <option value="followUp">Follow-up date</option>
      </select>
    </section>
  )
}
