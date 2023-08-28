# TEST API de Star Wars con serverless
La API de Star Wars es un proyecto Serverless basado en Node.js y Express que utiliza DynamoDB para almacenar información sobre los personajes y consulta la API de SWAPI para obtener datos adicionales de los personajes.

## Configuración
Antes de utilizar la API de Star Wars, debes configurar algunas cosas:

Instala las dependencias necesarias ejecutando `npm install`.

Configura tus credenciales de AWS en tu entorno local o en el archivo de configuración de AWS `(~/.aws/credentials)`.

Ejecutar el comando `serverless deploy`

Tambien se debe de tomar en consideracion, que se debe de crear un archivo `.env` en la raiz del proyecto, con las siguientes variables:
```
AWS_ACCESS_KEY_ID=  // seria el access key de tu usuario de iam
AWS_SECRET_ACCESS_KEY= // seria el secret key de tu usuario de iam
IS_OFFLINE="offline" //para validar si dynamo es modo local o en la nube
CHARACTERS_TABLE = 'characters' // para crear la tabla llamada characters
```

Despues de ejecutar este comando deberas ver una respuesta similar a:

```bash
Deploying swapi-api-serverless-dynamo to stage dev (us-east-1)

✔ Service deployed to stack swapi-api-serverless-dynamo

endpoints:
  GET - https://d4kwn542q0.execute-api.us-east-1.amazonaws.com/swapi/characters/{page}
  GET - https://d4kwn542q0.execute-api.us-east-1.amazonaws.com/api/characters
  POST - https://d4kwn542q0.execute-api.us-east-1.amazonaws.com/api/characters
```

Asegúrate de haber creado una tabla de DynamoDB con el nombre "characters". Puedes utilizar la consola de AWS o la CLI para crear la tabla.

## Endpoints
La API de Star Wars proporciona los siguientes endpoints:

GET /swapi/characters/{page}
Recupera información detallada de un personaje de la API de SWAPI y muestra la paginación de este. 

POST /
Almacena una nueva biografía en la base de datos DynamoDB y toda la informacion del personaje que se lista desde swapi

GET / 
Obtiene la informacion de todos los personajes de SWAPI cuya biografia ya se encuentra almacenada en la BD.


## Conclusiones
La API de Star Wars te permite consultar y almacenar información de los personajes utilizando DynamoDB y SWAPI. Puedes aprovechar estos endpoints para crear aplicaciones o servicios que necesiten acceder a datos relacionados con los personajes de Star Wars.

¡Eso es todo! Esta es una documentación básica para tu proyecto. Asegúrate de personalizarla según tus necesidades específicas y agregar cualquier información adicional que consideres relevante para los usuarios de tu API.
