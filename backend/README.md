This directory contains the server code necessary to run the examples. To run (from root directoy):

node backend/index.js

Si vols fer una base de dades mongo local (canvia model.js per a què el projecte apunte a ella)
Descomprimeix dump.20150611.3.tgz
mongorestore dump

API: El vostre backend ha d'oferir els següents "endpoints"

* `GET /category/id/:id`     PER OBTINDRE INFORMACIÓ DE LA CATEGORIA i LES SEUES SUBCATEGORIES
* `GET /category/parent/:id`  OBTENIM CATEGORIES QUE TENEN COM A PARE :id
* `GET /product/id/:id`       OBTENIM DETALLS DEL PRODUCTE AMB ID :id
* `GET /product/category/:id` LLISTAT DE TOTS ELS PRODUCTES DE CATEGORIA :id
* `PUT /me/cart`              AFEGIM UN ITEM AL CARRET DE LA COMPRA
* `GET /me`                   INFORMACIÓ DE L'USUARI EN SESSIÓ
* `POST /checkout`            ENVIEM INFORMACIÓ PER MATERIALITZAR LA COMPRA (Num visa,CSV,data caducitat...)
* `GET /product/text/:query`  LLISTA PRODUCTES QUE EL SEU NOM CONTINGA :query



Demo per provar endpoints de la API reals. Exemples
----------------------------------

https://botigueta.herokuapp.com/api/v1/category/id/Books
https://botigueta.herokuapp.com/api/v1/category/id/Classics

https://botigueta.herokuapp.com/api/v1/category/parent/Non-Fiction
https://botigueta.herokuapp.com/api/v1/category/parent/Electronics

https://botigueta.herokuapp.com/api/v1/product/id/5579b7be2ff214eb1ac9a171
https://botigueta.herokuapp.com/api/v1/product/id/5579b62cdb678e641a1c02a9

https://botigueta.herokuapp.com/api/v1/product/category/Books
https://botigueta.herokuapp.com/api/v1/product/category/Phones

CAL ESTAR AUTENTICAT AMB EL FACEBOOK
https://botigueta.herokuapp.com/api/v1/me

https://botigueta.herokuapp.com/api/v1/product/text/apple
https://botigueta.herokuapp.com/api/v1/product/text/recipes

Respecte als endpoints de no lectura (POST | PUT). Que enviem des del client al servidor.
Tenim el següent:

PUT https://botigueta.herokuapp.com/api/v1/me/cart
UN JSON amb _id de l'usuari i una propietat cart que és un array del items que hi
han al carret.

{  
      "_id":"56e33795eb9fc6d6bb00ac97",
      "__v":4,
      "data":{  
         "oauth":"10153345637096128",
         "cart":[  
            {  
               "product":{  
                  "_id":"5579b62cdb678e641a1c0329",
                  "name":"1984",
                  "__v":0,
                  "internal":{  
                     "approximatePriceUSD":8
                  },
                  "category":{  
                     "_id":"Classics",
                     "parent":"Fiction",
                     "ancestors":[  
                        "Books",
                        "Fiction",
                        "Classics"
                     ]
                  },
                  "price":{  
                     "amount":8,
                     "currency":"USD"
                  },
                  "pictures":[  
                     "http://cdn05.strandbooks.weblinc.com/images/products/partitioned/e/d/5/0451524934.1.largeThumb.jpg"
                  ],
                  "displayPrice":"$8",
                  "id":"5579b62cdb678e641a1c0329"
               },
               "_id":"56e3379ce6d9320300527e89",
               "quantity":1,
               "id":"56e3379ce6d9320300527e89"
            },
            {  
               "product":{  
                  "_id":"5579b62cdb678e641a1c02ac",
                  "name":"150 Best Ebelskiver Recipes",
                  "__v":0,
                  "internal":{  
                     "approximatePriceUSD":24
                  },
                  "category":{  
                     "_id":"Cookbooks",
                     "parent":"Non-Fiction",
                     "ancestors":[  
                        "Books",
                        "Non-Fiction",
                        "Cookbooks"
                     ]
                  },
                  "price":{  
                     "amount":24,
                     "currency":"USD"
                  },
                  "pictures":[  
                     "http://cdn06.strandbooks.weblinc.com/images/products/placeHolders/placeHolder.largeThumb.jpg"
                  ],
                  "displayPrice":"$24",
                  "id":"5579b62cdb678e641a1c02ac"
               },
               "_id":"56e3379ee6d9320300527e8a",
               "quantity":3,
               "id":"56e3379ee6d9320300527e8a"
            }
         ]
      },
      "profile":{  
         "picture":"http://graph.facebook.com/10153345637096128/picture?type=large",
         "username":"Pere Crespo"
      },
      "id":"56e33795eb9fc6d6bb00ac97"
   }
