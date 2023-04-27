const URL = "https://api.themoviedb.org/3";

export const getMovies = async (path) => {
    return await fetch(`${URL}${path}`, {
        headers: {
            Authorization: 
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTg1NGE4ZWRlYjFkNzE5ZDBmMDBhOWZjNjJmYzAwZSIsInN1YiI6IjY0MjM3NTAxOWQyYjYzMDBiNjIwZGM4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CUJCzIAvA7UjL1ujxq7eF6dhuTp3U4Be_hY3Xw78u3w",
            "Content-Type": "application/json;charset=utf-8"
        }
    }).then(result => result.json());
}