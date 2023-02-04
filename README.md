# goodreads-genres-filter
Retrieve goodreads books specifying multiple genres. It should be noted the genre pages scraped display up to 50 books as goodreads requires account login to access more (will figure out one day :/).

## Running the app
- Use `bash run.sh` to start both the frontend and api servers.
- `cd frontend && npm start` to start the frontend server.
- `flask run` to start the api server.

Access the frontend server in `http://localhost:3000/` and the api server in `http://localhost:5000/` .

## Packages
### Python
- [`flask`](https://flask.palletsprojects.com/en/2.2.x/)
- `flask_restful`
- `flask_cors`

#### Web scraper modules
- `requests`
- `bs4`
- `pandas`

### React
- [`react`](https://reactjs.org/docs/create-a-new-react-app.html)
- [Material UI](https://mui.com/material-ui/getting-started/installation/)
