import 'babel-polyfill'
import fetch from 'isomorphic-fetch'
import co from 'co'

const url = 'http://127.0.0.1:10010/hello'

function* createHelloFetcher() {
    const response = yield fetch(url)
    const result = yield response.json()
    return result
}

const hellFetcher = co(createHelloFetcher)

hellFetcher.then((res) => console.log(res))
