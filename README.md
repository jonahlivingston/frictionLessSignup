Hi!

I encourage you to check out this tool which allows you to create and preview dynamic forms.

It is most easily viewed used at https://dynamicformgenerator.herokuapp.com/

However if for whatever reason you wish to host it off your own machine here are the necessary steps:

1. Clone this repository onto your computer

2. Go into repository and install dependencies (npm install)

3. While due to time constraints there is not full test coverage there are some utility unit tests. To run tests use command 'npm test'

4. To view the program in your browser a) in one terminal window enter the project directory and do 'npm run build' which uses webpack to create the bundle b) In a different terminal window go into the project directory and then do 'npm start'

5. Then go to http://localhost:8080 to make sure everything is working correctly.