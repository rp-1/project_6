# Feed reader testing with Jasmine

The assignment was to take an existing feed reader web app and expand upon the initial testing functionality with Jasmine, which is a suite of testing tools written in Javascript.


## What it does

In order to explore "test-driven" web application development, we're using Jasmine to test the app to make sure it is producing the desired results. Specifically, we are testing for the following:

- We want to make sure that the allFeeds object in our data model has a URL defined and that it is not empty.
- We also want ot make sure that our allFeeds ojects has a name defined and that the name is not empty.
- We want to make sure our menu element is hidden by default.
- We want to ensure that the menu element's visibility is toggled on and off by user click.
- We want to ensure that the loadFeed function is working and that after an asynchronous call, it contains at least one .entry element.
- We want to make sure that when a new feed is loaded, new content appears in place of the old content.

## How do we know if our tests are successful?

Jasmine outputs the results of all your tests. It lets you know which tests passed and which ones failed. If all goes well, you will see output in green. If one or more tests fail, output is in red.

## How to view this feed reader testing project

Download the zip, uncompress, and load the index.html file in your browser. The normal feed reader page will appear. At the bottom you will see the Jasmine output, which details the results of all the testing.