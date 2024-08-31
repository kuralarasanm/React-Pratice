import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';

//api- https://www.omdbapi.com/?s=star%20wars&apikey=263d22d8
const App = () => {
	
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList
					movies={movies}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourites}
				/>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favourites' />
			</div>
			<div className='row'>
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
		</div>
	);
};

export default App;


// const App = () => {
	// const [movies, setMovies] = useState([
	// 	{
	// 	"Title": "Star Wars: Episode IV - A New Hope",
	// 	"Year": "1977",
	// 	"imdbID": "tt0076759",
	// 	"Type": "movie",
	// 	"Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
	// },
	// {
	// 	"Title": "Star Wars: Episode V - The Empire Strikes Back",
	// 	"Year": "1980",
	// 	"imdbID": "tt0080684",
	// 	"Type": "movie",
	// 	"Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
	// },
	// {
	// 	"Title": "Star Wars: Episode VI - Return of the Jedi",
	// 	"Year": "1983",
	// 	"imdbID": "tt0086190",
	// 	"Type": "movie",
	// 	"Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
	// },
	// {
	// 	"Title": "Star Wars: Episode VII - The Force Awakens",
	// 	"Year": "2015",
	// 	"imdbID": "tt2488496",
	// 	"Type": "movie",
	// 	"Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
	// },
	// {
	// 	"Title": "Star Wars: Episode I - The Phantom Menace",
	// 	"Year": "1999",
	// 	"imdbID": "tt0120915",
	// 	"Type": "movie",
	// 	"Poster": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
	// },
	// {
	// 	"Title": "Star Wars: Episode III - Revenge of the Sith",
	// 	"Year": "2005",
	// 	"imdbID": "tt0121766",
	// 	"Type": "movie",
	// 	"Poster": "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
	// }
	// ]);
// 	const [movies, setMovies] = useState([]);
// 	const [favourites, setFavourites] = useState([]);
// 	const [searchValue, setSearchValue] = useState('');

// 	const getMovieRequest = async (searchValue) => {
// 		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

// 		const response = await fetch(url);
// 		const responseJson = await response.json();

// 		if (responseJson.Search) {
// 			setMovies(responseJson.Search);
// 		}
// 	};

// 	useEffect(() => {
// 		getMovieRequest(searchValue);
// 	}, [searchValue]);

// 	const saveToLocalStorage = (items) => {
// 		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
// 	};

// 	const addFavouriteMovie = (movie) => {
// 		const newFavouriteList = [...favourites, movie];
// 		setFavourites(newFavouriteList);
// 		saveToLocalStorage(newFavouriteList);
// 	};

// 	const removeFavouriteMovie = (movie) => {
// 		const newFavouriteList = favourites.filter(
// 			(favourite) => favourite.imdbID !== movie.imdbID
// 		);

// 		setFavourites(newFavouriteList);
// 		saveToLocalStorage(newFavouriteList);
// 	};
// 	return (
// 		<div className='container-fluid movie-app'>
// 			<div className='row d-flex align-items-center mt-4 mb-4'>
// 				<MovieListHeading heading='Movies' />
// 				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
// 			</div>
// 			<div className="row">
// 				<MovieList movies={movies} favouriteComponent={AddFavourites} />
// 			</div>
// 			<div className='row d-flex align-items-center mt-4 mb-4'>
// 				<MovieListHeading heading='Favourites' />
// 			</div>
// 			<div className='row'>
// 				<MovieList
// 					movies={favourites}
// 					handleFavouritesClick={removeFavouriteMovie}
// 					favouriteComponent={RemoveFavourites}
// 				/>
// 			</div>
// 		</div>
// 	);
// }

// export default App;