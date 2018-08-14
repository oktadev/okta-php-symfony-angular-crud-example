# Build a Basic CRUD App with Symfony 4 and Angular 6

This example shows how to use Symfony 4 and Angular to create a basic CRUD app for tracking pun counts in movies, using Okta to handle authentication.

Please read (Article Placeholder) to see how this application was built.

**Prerequisites:** PHP, Node, [Okta developer account](https://developer.okta.com/)

> [Okta](https://developer.okta.com) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage, and secure users and roles in any application.

## Getting Started

Sign up for an [Okta developer account](https://developer.okta.com) and create a new application. Make note of the Client ID and Issuer values for your application.

Clone this project using the following commands:

```
git clone git@github.com:oktadeveloper/okta-php-symfony-angular-crud-example.git
cd okta-php-symfony-angular-crud-example
```

### Set up the Backend

Create the database and user for the project:

```
mysql -uroot -p
CREATE DATABASE bad_puns_counter CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
GRANT ALL on bad_puns_counter.* to bpcuser@127.0.0.1 identified by 'temppass123';
quit
```

Copy and edit the `.env` file and enter the db details there:

```
cd bad-puns-tracker-server
cp .env.dist .env
```

Edit `src/Controller/ApiController.php` and replace the Okta credentials with your own.

Install the project dependencies, run the migrations and then start the server:

```
composer install
php bin/console doctrine:migrations:migrate
php -S 127.0.0.1:8000 -t public
```

Loading [127.0.0.1:8000](127.0.0.1:8000) now should show the default Symfony 4 page, and [127.0.0.1:8000/movies](127.0.0.1:8000/movies) should show you a 'Not authorized' message. NOTE: if using a virtual machine and NAT, you might need to run the server as `php -S 0.0.0.0:8000 -t public` instead.

### Set up the Frontend

Edit the Okta configuration in `src/app/app.module.ts` to fill in your client ID and other application details. (Refer to the (Article Placeholder) for more details.) Then install the dependencies and run the server:

```
cd bad-puns-tracker-client-angular
npm install -g @angular/cli
npm install
ng serve --open
```

Loading [127.0.0.1:4200](127.0.0.1:4200) now should show you the application.

## Help

Please post any questions as comments on the (Article Placeholder), or visit our [Okta Developer Forums](https://devforum.okta.com/). You can also email developers@okta.com if would like to create a support ticket.

## License

Apache 2.0, see [LICENSE](LICENSE).
