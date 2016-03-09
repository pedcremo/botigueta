This directory contains the server code necessary to run the examples. To run:

1. Copy your completed `config.json` from the Chapter 3 homework assignment into the `server` directory.
2. Run `npm install`
3. Run `node index.js` des de l'arrel
4. Open `http://localhost:3000/frontend/index.html` or whichever example you prefer in your browser


Descomprimeix dump.20150611.3.tgz
mongorestore dump

API: El vostre backend ha d'oferir els següents "endpoints"

* `GET /category/id/:id`
* `GET /category/parent/:id`
* `GET /product/id/:id`
* `GET /product/category/:id`
* `PUT /me/cart`
* `GET /me`
* `POST /checkout`
* `GET /product/text/:query`
