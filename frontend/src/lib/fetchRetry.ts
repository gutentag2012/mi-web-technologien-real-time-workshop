export function fetchRetry(input: RequestInfo, init?: RequestInit, retries = 3): Promise<Response> {
  return fetch(input, init).then(async response => {
    if (response.ok) {
      return response
    }
    if (retries > 0) {
      // Exponential backoff
      await new Promise(resolve => setTimeout(resolve, 2 ** (3 - retries) * 500))
      return fetchRetry(input, init, retries - 1)
    }
    throw new Error("Failed to fetch")
  }).catch(async (e) => {
    if (retries <= 0) {
      throw new Error("Failed to fetch")
    }
    // Exponential backoff
    await new Promise(resolve => setTimeout(resolve, 2 ** (3 - retries) * 500))
    return fetchRetry(input, init, retries - 1)
  })
}