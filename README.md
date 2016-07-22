![map view](http://i.imgur.com/w5k86Wc.png "Feels Map")  


#Feels Map
Feels Map allows you to post your current mood or 'feel' and explore how the surrounding environment affects other users' feels. Users can post moods such as 'happy', 'sad', 'stressed', 'relaxed' in response to your surroundings. The main page displays a map with pins dropped where users submitted feels and an overlayed heatmap generated from the users' data. The user's profile page shows a visualization of their posted feels. The data would potentially be useful/interesting to urban planners/architects, for example, to find areas to study that contribute to different moods.

##Technologies Used
* Javascript
* AngularJS
* Node.js
* Express
* MongoDB
* HTML
* CSS (Materialize)
* Google Maps API
* heatmap.js (icebox)
* Chart.js (icebox)

##API
|  Route | HTTP Verb | Endpoint   | 
|-------:|-----------|------------|
| SHOW   | GET       | /users/:id |
| SHOW   | GET       | /feels     |
| CREATE | POST      | /feels     | 



##Installation 
Deployed on [heroku](https://limitless-harbor-67340.herokuapp.com/).

[trello](https://trello.com/b/gG3qeyUY/feels-map-app) (with wireframes).

##Next Steps
Feels Map is still in development and the following will be 
 
* Make fully functional: register, logout, reset forgotten password
* Add pins to map
* Add heatmap overlay to map
* Add chart to user profile
* Search for locations
* Use sentiment analysis API to analyze descriptions of feels
 * ability to toggle heatmap using sentiment analyzed version of data
 * ability to toggle user's chart using sentiment analyzed version of data

