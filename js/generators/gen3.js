import 'babel-polyfill'
import fetch from 'isomorphic-fetch'

const url = 'http://127.0.0.1:10010/hello'

function* createHelloFetcher() {
    const response = yield fetch(url)
}

const hellFetcher = createHelloFetcher()

hellFetcher.next().value.then(
    (response)=>{
        console.log(response)
    },
    (error)=>{
        console.log(error)
    }
)

