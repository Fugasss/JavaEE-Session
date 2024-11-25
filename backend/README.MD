# Backend Part

## Swagger
Документация по адрессу
```
http://localhost:8080/swagger-ui/
```

### Подключение к MongoDB
Создать в папке resources/ файл "db.properties" и заполнить данными для подключения по шаблону:
```properties
# MongoDB settings
spring.data.mongodb.uri=mongodb+srv://name:password@cluster0.rbgy6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
spring.data.mongodb.database=backend
```

<b><i>! Данные для подключения к Postgres перенесены в application.properties</i></b>
