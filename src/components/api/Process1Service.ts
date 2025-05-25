import axios from 'axios'

const BASE_URL = 'http://localhost:5200/amlak-services/domain-api'

export const getCtWilayas = async () => {
  let allWilayas: any[] = []
  let page = 0
  let hasNext = true

  while (hasNext) {
    const response = await axios.get(`${BASE_URL}/ctWilayas?page=${page}`)
    const data = response.data._embedded.ctWilayas
    allWilayas = [...allWilayas, ...data]

    if (response.data.page.totalPages > page+1) {
      page++
    } else {
      hasNext = false
    }
  }
  console.log("wilayas:",allWilayas);
  return allWilayas
}