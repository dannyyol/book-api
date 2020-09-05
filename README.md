## Book API: Laravel 7.24 based Book API with the front end created with Vue.js

## How to install
Clone the repository with git clone
Copy .env.example file to .env and edit database credentials there
Run composer install
Run php artisan key:generate
Run php artisan migrate --seed or php artisan db:seed (it has some seeded data for your testing)
For the front end install npm by running npm install

## Book API Endpoints
# The application is hosted on heroku, the endpoints are below
a. External Book endpoint http://127.0.0.1:8000/api/v1/external-books?name={nameOfBook} or
    http://test-book-api.herokuapp.com/api/v1/external-books?name={nameOfBook} - GET Request
 ## Note: NameOfBook is not case sensitive and does not respective spaces as well
b. Create Book endpoint http://127.0.0.1:8000/api/v1/books/ or 
    http://test-book-api.herokuapp.com/api/v1/books/ - POST Mthod
c. Get List of books http://127.0.0.1:8000/api/v1/books  or 
    http://test-book-api.herokuapp.com/api/v1/books - GET Method
d. Update Book http://127.0.0.1:8000/api/v1/books/{id} or
    http://test-book-api.herokuapp.com/api/v1/books/{id} - PUT Method
e. Delete Book http://127.0.0.1:8000/api/v1/books/{id} - or
    http://test-book-api.herokuapp.com/api/v1/books/{id} - DELETE Method
f. Show a Book http://127.0.0.1:8000/api/v1/books/{id} - GET Method
    http://test-book-api.herokuapp.com/api/v1/books/{id} - GET Method
g. Search List of books http://127.0.0.1:8000/api/v1/search?query={query} -GET Method
    http://test-book-api.herokuapp.com/api/v1/search?query={query} - Get Method

## Testing The Application
# Testing of the application is done with Laravel PHPunit
General testing of the application can be done by running this command:
vendor\bin\phpunit tests\Feature\BookApiTest.php
Testing each of the features can be done by running the below command
a. External book API
    vendor\bin\phpunit --filter test_external_book
b. Read API
    vendor\bin\phpunit --filter test_index_book
c. Create API
    vendor\bin\phpunit --filter test_create_book
d. Update API
    vendor\bin\phpunit --filter test_update_book
e. Show Book API
    vendor\bin\phpunit --filter test_show_book
f. 404 error for book not found
    vendor\bin\phpunit --filter test_404_if_book_not_found
g. Delete Book API
    vendor\bin\phpunit --filter test_delete_book
h. Edit Book API
    vendor\bin\phpunit --filter test_edit_book





## License

