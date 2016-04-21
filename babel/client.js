import $ from 'jquery'
import { forEach, capitalize } from 'lodash'

$(async () => {
  const res = await fetch('https://api.artsy.net/api/v1/system/up')
  const body = await res.json()
  forEach(body, (up, service) =>
    $('#container').append(
      `Is ${capitalize(service)} alive? ${up ? 'Yes' : 'No'}<br>`
    )
  )
})
