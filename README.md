# YetiStreamer

Live Streamer for Your Tweets

## HowTo : Build Your Own 'YetiStreamer'

There are a few steps that you'll need to perform before you could run your own version of YetiStreamer, listed below:

### Clone 'YetiStreamer' repo:

```
$ git clone https://github.com/yasir-lateef/yetistreamer.git
```

### Install Dependencies

```
$ npm install && bower install
```

### Create a new Twitter app

* Sign in to [Twitter Apps](http://apps.twitter.com)
* Click on __'Create New App'__.
* Enter the details required to create your new app.

### Configure your app:

* Once your app is created successfully, Go to __'Keys and Access Tokens'__ tab.
* Click on __'Generate Consumer Key and Secret'__
* Copy and Paste the generated __'Consumer Key'__, __'Consumer Secret'__, __'Access Token'__ and __'Access Token Secret'__ into your __config.js__ file.
* Go to __app.js__ : line 29 and add your __Twitter ID__. (You can find your own Twitter ID on __'Keys and Access Tokens'__ tab or any other Twitter ID [HERE](http://mytwitterid.com/), if you don't know already) 

### Run your app:
Run __npm start__ in your project directory
```
$ npm start
```
There you have it running, your version of 'YetiStreamer'. Open your web browser and listen to port 9000(http://localhost:9000).

#### Feel Free to Play With It and Make Something Useful out of Code. Cheers! :)