import algoliasearch from 'algoliasearch/lite'
import instantsearch from 'instantsearch.js'
import historyRouter from 'instantsearch.js/es/lib/routers/history'
import {
  searchBox,
  hierarchicalMenu,
  hits,
  pagination,
} from 'instantsearch.js/es/widgets'

import '@algolia/autocomplete-theme-classic'

const searchClient = algoliasearch(
      process.env.APPLICATION_ID,
      process.env.SEARCH_KEY)
const INSTANT_SEARCH_INDEX_NAME = 'products'

const instantSearchRouter = historyRouter()
const search = instantsearch({
  searchClient,
  indexName: INSTANT_SEARCH_INDEX_NAME,
  routing: instantSearchRouter,
})

search.addWidgets([
  searchBox({
    container: '#searchbox',
    placeholder: 'Search',
  }),
  hits({
    container: '#results',
  }),
  
])

search.start()