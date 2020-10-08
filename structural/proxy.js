function newtowrkFetch(url) {
    return `${url} - Server response`    
}

const cache = new Set()
const proxiedFetch = new Proxy(newtowrkFetch, {
    apply(target, thisArg, args) {
        const url = args[0]
        if (cache.has(url)) {
            return  `${url} - Cache response`
        } else {
            cache.add(url)
            return Reflect.apply(target, thisArg, args)
        }
    }
})

console.log(proxiedFetch('angular.io'))
console.log(proxiedFetch('react.io'))
console.log(proxiedFetch('angular.io'))

