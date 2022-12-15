import {categories} from '../constants'
import fetchNews from "../lib/fetchNews"
import NewsList from './NewsList'
import response from '../response.json'

async function Homepage() {

    // use 'response' during development so as not to use up the daily quota
    
    const news: NewsResponse = response || await fetchNews((categories.join(',')))
    //const news: NewsResponse = await fetchNews((categories.join(',')))

    return (
        <div>
            <NewsList news={news} />
        </div>
    )
  }

  export default Homepage