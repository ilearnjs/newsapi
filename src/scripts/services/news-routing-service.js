export class NewsRoutingService {
    constructor(routes) {
        this.routes = routes;
    }

    route(hash) {
        const parsedHash = this.parseHash(hash);
        const route = this.getRoute(parsedHash.routeUrl);
        route.action(parsedHash.params);
    }

    parseHash(hash) {
        const hashParts = (location.hash.slice(1) || '').split('?');
        const parsed = {
            routeUrl: hashParts[0],
            params: this.getParams(hashParts[1])
        };

        return parsed;
    };

    getParams(hashParams) {
        const params = {};
        (hashParams || '').split('&').forEach(p => {
            const keValue = p.split('=')
            params[keValue[0]] = keValue[1];
        });

        return params;
    }

    getRoute(routeUrl) {
        return this.routes.find(r => r.url.toLowerCase() === routeUrl.toLowerCase())
            || this.routes[0];
    }
}