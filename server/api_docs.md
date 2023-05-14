API Endpoints

This API provides the following endpoints:
POST /register

Register a new user and send a confirmation email to the registered email address.
Request

    URL: /register
    Method: POST
    Request Body:
        email: string
        username: string
        password: string

Response

    Status Code: 201
    Response Body:
        message: string

GET /heroes

Retrieve all heroes in Dota 2.
Request

    URL: /heroes
    Method: GET

Response

    Status Code: 200
    Response Body:
        Array of hero objects, each containing the following properties:
            id: number
            name: string
            localized_name: string
            primary_attr: string
            attack_type: string
            roles: Array of strings
            img: string
            icon: string

GET /heroes/:heroname

Retrieve a specific hero by name.
Request

    URL: /heroes/:heroname
    Method: GET
    Request Parameters:
        heroname: string

Response

    Status Code: 200
    Response Body:
        A hero object with the following properties:
            id: number
            name: string
            localized_name: string
            primary_attr: string
            attack_type: string
            roles: Array of strings
            img: string
            icon: string

GET /memes

Retrieve a random meme.
Request

    URL: /memes
    Method: GET

Response

    Status Code: 200
    Response Body:
        url: string
        title: string