export class NewsRoutingService {
    constructor(routes) {
        this.routes = routes;
    }

    route(hash) {
        debugger;
        const parsedHash = this.parseHash(hash);
        const route = this.getRoute(parsedHash.routeUrl);
        route.action(parsedHash.params);
    }

    parseHash(hash) {
        const hashParts = (location.hash.slice(1) || '').split('?');
        const parsed = {};
        parsed.routeUrl = hashParts[0];
        parsed.params = {};

        if (hashParts.length > 1) {
            const params = hashParts[1].split('&');
            for (let i = 0, param; i < params.length; i++) {
                param = params[i].split('=')
                parsed.params[param[0]] = param[1];
            }
        }

        return parsed;
    };

    getRoute(routeUrl) {
        return this.routes.find(r => r.url.toLowerCase() === routeUrl.toLowerCase()) 
            || this.routes[0];
    }
}