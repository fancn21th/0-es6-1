import 'babel-polyfill'
import fetch from 'isomorphic-fetch'

const url = 'http://127.0.0.1:10010/hello'

function* createHelloFetcher() {
    const response = yield fetch(url)
    const result = yield response.json()
    return result
}

const hellFetcher = createHelloFetcher()

hellFetcher.next().value
    .then(res => {
        console.log(res)
        return hellFetcher.next(res).value
    })
    .then(res => {
        console.log(res)
        return hellFetcher.next(res).value
    })
    .then(res => {
        console.log(res)
    })
