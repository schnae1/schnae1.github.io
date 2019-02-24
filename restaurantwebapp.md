## Location Based Restaurant Webapp (Python)

**[ ** Source Code ** ](https://github.com/schnae1/projects/tree/master/webapp)**

During the winter break of 2018-2019 I decided to learn more about Python. Instead of reading through a Python book and practicing using what I was learning by writing simple scripts or using the Python command line, I decided to work on a project that I found interesting and would allow me to build upon it in the future.

I found [ this ](https://realpython.com/location-based-app-with-geodjango-tutorial/) tutorial online that more or less walked me through building a location based Python webapp. The tutorial focuses on finding nearby stores, but I changed mine to find nearby restaurants.

The app utilizes Django, GeoDjango, PostgreSQL, and PostGIS. Django is for the web framework, GeoDjango is the framework that allows for the creation of a location based web app, and PostgreSQL and PostGIS were the spatial databases set up for the data.

The initial data that was used came from OpenStreetMap using overpass turbo. This website queries data based on user parameters and allows the user to download the data as a JSON file. Once the data was created it was imported into the database that I set up.

The webapp displays to the user the nearest restaurants within a specified distance. The distances are displayed in meters, for the time being. The user location is hard coded in for now, but I plan on using Google’s location API in the future so that user location can be retrieved automatically.

This project is very basic and simple, but I plan on adding to it and improving it the more I learn and become familiar with all the various frameworks.

