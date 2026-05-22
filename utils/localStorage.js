const STORAGE_KEY = "apply-track-jobs-v2"

export function getSavedJobs() {
  const savedJobs = localStorage.getItem(STORAGE_KEY)

  if (!savedJobs) {
    return null
  }

  return JSON.parse(savedJobs)
}

export function saveJobs(jobs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs))
}
