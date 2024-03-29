# Basic Axios Practice

## Axios

### Axios Installation

Install Axios using `npm`:

```bash
npm install axios
```

### Axios Documentation

- [Documentation](https://axios-http.com/docs/intro)
- [Github](https://github.com/axios/axios)

## [Json Server](https://github.com/typicode/json-server)

### Json Server Installation

Install json-server with `npm` (Stable Version 0.17.4):

```bash
  npm install json-server@0.17.4
```

### Json Server Usage/Examples

- Create a file `db.json` on `./src/data/` in a vite project
- The relative file path of the db.json from package.json should be `./src/data/db.json`
- In package.json add these texts inside the scripts section:

```javascript
"server": "npx json-server -p 8000 --no-cors ./src/data/db.json"
```

- Run the server using `npm run server` command
- Example Data:

```json
{
  "posts": [
    { "id": "1", "title": "a title", "views": 100 },
    { "id": "2", "title": "another title", "views": 200 }
  ],
  "comments": [
    { "id": "1", "text": "a comment about post 1", "postId": "1" },
    { "id": "2", "text": "another comment about post 1", "postId": "1" }
  ],
  "profile": {
    "name": "typicode"
  }
}
```
