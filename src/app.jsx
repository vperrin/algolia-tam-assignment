import { autocomplete } from '@algolia/autocomplete-js'
import algoliasearch from 'algoliasearch/lite'
import instantsearch from 'instantsearch.js'
import historyRouter from 'instantsearch.js/es/lib/routers/history'
import { connectSearchBox } from 'instantsearch.js/es/connectors'
import { hierarchicalMenu, hits, pagination } from 'instantsearch.js/es/widgets'
import autocompleteProductTemplate from './templates/autocomplete-product';
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions';

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

const querySuggestionsPlugin = createQuerySuggestionsPlugin({
  searchClient,
  indexName: 'keywords_query_suggestions',
  getSearchParams({ state }) {
    return { hitsPerPage: state.query ? 5 : 10 };
  },
});


// Mount a virtual search box to manipulate InstantSearch's `query` UI
// state parameter.
const virtualSearchBox = connectSearchBox(() => {})

search.addWidgets([
  virtualSearchBox({}),
  hierarchicalMenu({
    container: '#categories',
    attributes: ['hierarchicalCategories.lvl0', 'hierarchicalCategories.lvl1'],
  }),
  hits({
    container: '#results',
    templates: {
      item:autocompleteProductTemplate},
  }),
  pagination({
    container: '#pagination',
  }),
])

search.start()

// Set the InstantSearch index UI state from external events.
function setInstantSearchUiState(indexUiState) {
  search.setUiState(uiState => ({
    ...uiState,
    [INSTANT_SEARCH_INDEX_NAME]: {
      ...uiState[INSTANT_SEARCH_INDEX_NAME],
      // We reset the page when the search state changes.
      page: 1,
      ...indexUiState,
    },
  }))
}

// Return the InstantSearch index UI state.
function getInstantSearchUiState() {
  const uiState = instantSearchRouter.read()

  return (uiState && uiState[INSTANT_SEARCH_INDEX_NAME]) || {}
}

const searchPageState = getInstantSearchUiState()

autocomplete({
  container: '#autocomplete',
   plugins: [querySuggestionsPlugin],
  openOnFocus: true,
  placeholder: 'Search',
  detachedMediaQuery: 'none',
  initialState: {
    query: searchPageState.query || '',
  },
  onSubmit({ state }) {
    setInstantSearchUiState({ query: state.query })
  },
  onReset() {
    setInstantSearchUiState({ query: '' })
  },
  onStateChange({ prevState, state }) {
    if (prevState.query !== state.query) {
      setInstantSearchUiState({ query: state.query })
    }
  },
})