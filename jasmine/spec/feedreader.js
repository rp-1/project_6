/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    describe('RSS Feeds', function() {
        /* Test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('each has a URL defined that is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toEqual('');
                expect(feed.url).not.toBeNull();
            });
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        
        it('each has a name that is defined that is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toEqual('');
                expect(feed.name).not.toBeNull();
            });
        });
    });


    describe('The menu', function() {
        var body = $('body');
        var menuLink = $('.menu-icon-link');

        /* A test that ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        it('changes visibility when menu icon is clicked', function() {
            menuLink.click();
            expect(body.hasClass('menu-hidden')).toBe(false);

            menuLink.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    /* A new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* Async testing. Covered in udacity javascript testing section 2 */
        beforeEach(function(done) {
            loadFeed(1, done);
        });

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('have at least a single .entry element within .feed container', function() {
            /* Get array of .entry children from .feed parent */
            var entryArray = $('.feed .entry');

            /* Array should have at least one .entry element */
            expect(entryArray.length).toBeGreaterThan(0);
        });
     });

    /* A new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {
        var startingEntries;
        var newEntries;

        beforeEach(function(done) {
            /* Empty feeds */
            startingEntries = $('.feed .entry');
            startingEntries.empty();

            /* Load two different feeds and store their content */
            loadFeed(0, function() {
                startingEntries = $('.feed .entry');

                /* load a second feed */
                loadFeed(1, function() {
                newEntries = $('.feed .entry');
                done();
                });
            });

        });

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('properly updates and replaces content when new feed is loaded', function() {

            /* Test to make sure that the initial content is different than new content */
            expect(newEntries.find('h2').text()).not.toBe(startingEntries.find('h2').text());

            /* Double check content text just in case two headlines were the same */
            expect(newEntries.find('p').text()).not.toBe(startingEntries.find('p').text());
        });
    });
}());