# API Server

To install and start the API server, run the following commands in this directory:

- `npm install`
- `npm start`

Open `http://localhost:3001`

### API Endpoint

The following endpoints are available:

| Endpoints                   | Usage                                 | Params              |
| --------------------------- | ------------------------------------- | ------------------- |
| `GET /api/heroes`           | Get all of the heroes.                |                     |
| `GET /api/heroes?name=term` | Get all heroes with name like a term. | **term** - [String] |
| `GET /api/heroes/:id`       | Get the details of a single hero.     |                     |
| `POST /api/heroes`          | Add a new hero.                       | **name** - [String] |
| `PUT /api/heroes/:id`       | Edit the details of an existing hero. | **name** - [String] |
| `DELETE /api/heroes/:id`    | Remove the hero.                      |                     |
