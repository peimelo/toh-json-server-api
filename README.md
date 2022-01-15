# Tour of Heroes Mock API Server

Tour of Heroes Mock API example using [json-server](https://github.com/typicode/json-server).

## Configuration

```bash
git clone https://github.com/peimelo/toh-json-server-api.git
cd toh-json-server-api

# installation of dependencies
npm install

# run the project
npm start
```

The backend is available at `http://localhost:3001/api`

## API Endpoints

The following endpoints are available:

| Endpoints                   | Usage                                 | Params              |
| --------------------------- | ------------------------------------- | ------------------- |
| `GET /api/heroes`           | Get all of the heroes.                |                     |
| `GET /api/heroes?name=term` | Get all heroes with name like a term. | **term** - [String] |
| `GET /api/heroes/:id`       | Get the details of a single hero.     |                     |
| `POST /api/heroes`          | Add a new hero.                       | **name** - [String] |
| `PUT /api/heroes/:id`       | Edit the details of an existing hero. | **name** - [String] |
| `DELETE /api/heroes/:id`    | Remove the hero.                      |                     |
