#### general notes
Prisma is basically an over glorified ORM, EF core provides the same benefits with added performance and access to C#/.NET. The idea of Prisma is essentially ORM that builds everything for you, but because of that there are some few (dealbreaker) cons:
* Performance of Prisma is questionable
* Possibilities in the cloud of Prisma are questionable too, since it requires a docker host which adds a lot of added complexity
* Instead of working on data requirements for the consuming clients you're working on locking down Prisma, which is very error prone and dangerous to do. One human mistake and there's sensitive data available for everyone.
* GraphQL itself is a lot more CPU intensive since it has to parse a complex query, compared to REST.
* The tooling for GraphQL (mainly .graphql parsers) are mostly for everything Javascript, causing lock-in and inflexibility.
* The biggest selling points of GraphQL are:
    * Get only the data you want/need
        * Unless you're giving thousands of properties in an object from a JSON response, the added payload is negligible, even on embedded systems.
    * One endpoint for everything
        * You lose all control over HTTP semantics (GET,POST,PUT,DELETE,OPTIONS etc).
        * In theory yes, there's only 1 URL endpoint, but each of your endpoints are instead "resolvers" which are basically the same, except now with the added cost of clients having to use GraphQL.
    * Type safety
        * And statically typed language has Response/Request models for endpoints, serializing this adds the type safety you want, with existing tools.
    * Subscriptions/websockets
        * A good way for websocket communication, but sadly again limited tooling against raw websocket other libraries (SignalR etc.)
#### libraries
graphql-yoga@1.14.10

babel-cli@6.26.0

babel-preset-env@1.7.0

nodemon@1.17.5

graphql-cli@2.16.4 -- handige CLI voor het downloaden van een schema

prisma-binding
#### subscription
PubSub graphql-yoga import

pass in ctx