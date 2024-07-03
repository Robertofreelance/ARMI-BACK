Buenos dias/tardes o noches.

Tratare de dar la mayor cantidad de explicaciones sobre el proceso en el que se hizo y el porque de esa forma.

Se hizo una arquitectura hexagonal sencilla la cual contiene:
/data (Donde se encuentra nuestro JSON enriquezido con data)
/application (Donde se realiza los casos de uso de la applicacion)
/ports (Los puertos)
/ports/http (El adaptador el cual contiene sus controladores y rutas)
/ports/database (Donde se ubican los repositorios que modifican y consultan la base de datos)

No se hizo uso de graphql pq no vi que las instrucciones lo indicaran.

No se especifico si los productos debian ser unicos o no asi que me tome la libertad de dejarlos libre a duplicacion para no esmerarme en crear mas data.

Aqui las apis y ejemplos:

API GET: http://localhost:3001/api/shoppingCart
Ejemplo de respuesta:
{
    "totalPrice": "27.60",
    "cart": [
        {
            "id": "1720017915359",
            "product": {
                "id": 1,
                "name": "Cafe Expresso",
                "price": 6.9
            },
            "quantity": 1
        },
        {
            "id": "1720018469350",
            "product": {
                "id": 1,
                "name": "Cafe Expresso",
                "price": 6.9
            },
            "quantity": 3
        }
    ]
}

API POST: http://localhost:3000/api/shoppingCart
Ejemplo Body: 
{
    "product":  {
        "id": 1,
        "name": "Cafe Expresso",
        "price": 6.900
    },
    "quantity": 3
}

Ejemplo Respuesta: 

{
    "id": "1720018469350",
    "product": {
        "id": 1,
        "name": "Cafe Expresso",
        "price": 6.9
    },
    "quantity": 3
}

API PUT: http://localhost:3000/api/shoppingCart/:id
Ejemplo body: 
{
     "quantity": 1
}
Ejemplo respuesta:
{
    "id": "1720017915359",
    "product": {
        "id": 1,
        "name": "Cafe Expresso",
        "price": 6.9
    },
    "quantity": 1
}
API DELETE: http://localhost:3000/api/shoppingCart/:id
Ejemplo respuesta:
{
    "deleted": "1720034858743"
}

API GET: http://localhost:3001/api/products
Ejemplo respuesta:
[
    {
        "id": 1,
        "name": "Cafe Expresso",
        "price": 6.9
    },
    {
        "id": 2,
        "name": "Cafe Capuccino",
        "price": 9.9
    },
    {
        "id": 3,
        "name": "Cafe helado",
        "price": 14.9
    }
]