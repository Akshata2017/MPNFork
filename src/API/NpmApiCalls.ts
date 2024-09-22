import isLicenseCompatible from '../Metrics/license.js'
import ApiCalls from './apiCalls.js'

export default class NpmApiCalls extends ApiCalls {
    async handleAPI() {
        console.log(`Making API call to npm: ${this.repo}`)
        const res = await fetch(`https://registry.npmjs.org/${this.repo}`).then(
            (response) => response.json()
        )
        console.log({
            readme : res.readme ? 1:0,
            keys: Object.keys(res.versions).length,
            mainters: res.maintainers.length

        })

        return res
    }
}
