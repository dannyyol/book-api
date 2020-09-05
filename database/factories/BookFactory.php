<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Book;
use Faker\Generator as Faker;

$factory->define(Book::class, function (Faker $faker) {
    $authors = serialize(array(($faker->name())));
    return [
        'name' => $faker->word(),
        'isbn' => $faker->unique()->isbn13,
        'authors' => $authors,
        'country' => $faker->country,
        'number_of_pages' => $faker->numberBetween(200, 500),
        'publishers' => $faker->name,
        'release_date' => $faker->dateTimeThisMonth()->format('Y-m-d')
    ];
});
