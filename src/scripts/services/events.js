import { baseUrl } from "../variables.js"

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events`)
    const data = await response.json()

    const filtered = data.filter(event => event.type === 'PushEvent' || event.type === 'CreateEvent').slice(0, 10)

    return filtered
}

export { getEvents }