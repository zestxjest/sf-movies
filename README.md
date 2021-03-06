# sf-movies
This is only for the client side and the server side repository is [here](https://github.com/zestxjest/sf-movies-server).

I am not good at CSS, the UI may not be beautiful and user friendly.

## Requirement
Create a service that shows on a map where movies have been filmed in San Francisco. The
user should be able to filter the view using autocompletion search.

## Business Analysis
1. Show the movies on the map with the custom map markers.
2. A movie list will be shown on the sidebar of the application.
3. When searching the movies, the search button will be disabled.
4. When searching the movies, the movie list should be hidden with a spinner.
5. The movie list should be paginated.
6. The user can search the movies by the title. It supports fuzzy and case-insensitive search.
7. Support the autocompletion search.

## Some snapshots of the app:
There are not many markers on the map because the GOOGLE API has some limit for the request numbers to get the coordinate information. So I only get 10 records per page.

The result after searching by the title:

![image](https://github.com/zestxjest/sf-movies/blob/master/snapshots/SearchByTitle.jpg?raw=true)

The pagination for the movie list:

![image](https://github.com/zestxjest/sf-movies/blob/master/snapshots/Pagination.jpg?raw=true)

Disable the search button and hide the movie list with a spinner when searching.

![image](https://github.com/zestxjest/sf-movies/blob/master/snapshots/WhenSearching.jpg?raw=true)

Auto Completion:

![image](https://github.com/zestxjest/sf-movies/blob/master/snapshots/AutoCompletion.jpg?raw=true)

## Technical Design
### Programming Language
* Javascript

### Environment
* Ubuntu

### Frontend Tech 
* React
* Redux
* Google Map for React
* Bootstrap

### Project Structure
This project structure is initialized by [create-react-app](https://github.com/facebookincubator/create-react-app)

**MAP/**: The google map component wrapper.

**MovieList/**: The component to show the movie list.

**Searchbox/**: The component to search the movies from the backend. Support autocompletion search.

**Sidebar/**: The component that wrapper the MovieList and the Searchbox.

**redux/**: The folder contains some basic configuration for Redux such as the stores, the actions and the reducers.

**App.js**: The main application page.

**index.js**: The root that wraps the react redux provider.

### Run
```
// Make sure that the server side is running.

// Install all the dependencies.
➜  sf-movies git:(master) ✗ npm install

// Then start the node server, it will listen to port 3000.
➜  sf-movies git:(master) ✗ npm start
```

### Note
> The client side will listen to port 3000 and it will proxy all the http requests to port 3001(sever side application).
> Not all the locations in the database are part of San Francisco..
