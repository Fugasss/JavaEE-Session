# Backend Part

### Подключение к MongoDB
Создать в папке resources/ файл "db.properties" и заполнить данными для подключения по шаблону:
```properties
# MongoDB settings
spring.data.mongodb.uri=mongodb+srv://name:password@cluster0.rbgy6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
spring.data.mongodb.database=backend

## PostgreSQL settings
#spring.datasource.url=jdbc:postgresql://address:port/backend
#spring.datasource.username=name
#spring.datasource.password=password
#spring.datasource.driver-class-name=org.postgresql.Driver
```

<b><i>Данные для подключения к Postgres пока не нужны (их нет), можно не добавлять.</i></b>

