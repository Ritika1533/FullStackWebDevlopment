const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr1 = num.filter((n) => {
    return n < 8;
})
console.log(arr1);//[1, 2, 3, 4, 5, 6, 7]

//object
const movie = [
    {
        name: "jab we meet",
        year: 2019,
        score: 91
    },
    {
        name: "fanna",
        year: 2009,
        score: 80
    },
    {
        name: "rocly and rani",
        year: 2015,
        score: 96
    }
]
const movierating = movie.filter((movie) => {
    return movie.score > 90;
})
console.log(movierating);
//{name: 'jab we meet', year: 2019, score: 91}
//{name: 'rocly and rani', year: 2015, score: 96}
const moviegood = movie.filter((movie) => {
    return movie.year > 2015;
})
console.log(moviegood);
//{name: 'jab we meet', year: 2019, score: 91}
movie.filter(n => (n.year > 2000)).map((n) => (n.name));
// ['jab we meet', 'fanna', 'rocly and rani']
movie.filter(n => n.year > 2000).map((n) => n.name);
// ['jab we meet', 'fanna', 'rocly and rani']

