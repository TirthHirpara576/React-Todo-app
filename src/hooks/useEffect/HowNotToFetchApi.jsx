// L55 :- How Not to fetch API in reactJs (hooks -> useEffect -> HowNotToFetchApi.jsx , pokemon.css)
/*  
import "./Pokemon.css";
import { useEffect, useState } from "react";

export const HowNotToFetchApi = () => {
    const [apiData , setApiData] = useState([]); // array of objects
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((responce) => responce.json())
        .then((data) => setApiData(data))
        .catch((error) => console.log(error));

    return(
        <div className="container effect-container">
            <ul>
                data:
                {apiData.map((currData) => {
                    return <li key={currData.id}> {currData.title} </li>
                })}
            </ul>
        </div>
    );
};
*/



// L56 :- How to fetch API in reactJs (hooks -> useEffect -> HowNotToFetchApi.jsx , pokemon.css)
/*
import "./Pokemon.css";
import { useEffect, useState } from "react";

export const HowNotToFetchApi = () => {
    const [apiData , setApiData] = useState([]); // array of objects
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((responce) => responce.json())
        .then((data) => setApiData(data))
        .catch((error) => console.log(error));
    } , []);

    return(
        <div className="container effect-container">
            <ul>
                data:
                {apiData.map((currData) => {
                    return <li key={currData.id}> {currData.title} </li>
                })}
            </ul>
        </div>
    );
};
*/



/* new api :- single object with multiple properties  */
import "./Pokemon.css";
import { useEffect, useState } from "react";

export const HowNotToFetchApi = () => {
    const [pokemon, setPokemon] = useState(null); // now, my data is not an array of objects , but ak j data chhe --> pikachu
    const [loading, setLoading] = useState(true); // true -> loading atyare thai chhe (data haju fetch nathi thaya...)
    const [error, setError] = useState(null);

    // const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
    const API = "https://pokeapi.co/api/v2/pokemon/squirtle";

    // fetching API using promises
    // const fetchPokemon = () => { 
    //     fetch(API)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setPokemon(data);
    //         setLoading(false); // data jyare aavi jai ->  loading = false
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         setError(error);
    //         setLoading(false); // Koi error aave to pan ->  loading = false
    //     });
    // };

    // OR  "fetching API using Async-await try-catch method"
    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            setPokemon(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    console.log(pokemon);

    if (loading)  // jya sudhi loding==true -> tya sudhi aa render thavu joiye...
        return (
            <div>
                <h1>Loading....</h1>
            </div>
        );

    if (error) // .message -> is property who display the actual error
        return (
            <div>
                <h1>Error: {error.message} </h1>
            </div>
        );

    //   if (pokemon) {
    return (
        <section className="container">
            <header>
                <h1> Lets Catch Pokémon</h1>
            </header>
            <ul className="card-demo">
                <li className="pokemon-card">
                <figure>
                    <img
                        src={pokemon.sprites.other.dream_world.front_default}
                        alt={pokemon.name}
                        className="pokemon-image"
                    />
                </figure>
                <h1>{pokemon.name}</h1>
                <div className="grid-three-cols">
                    <p className="pokemon-info">
                        Height: <span> {pokemon.height} </span>
                    </p>
                    <p className="pokemon-info">
                        Weight: <span> {pokemon.weight}</span>
                    </p>
                    <p className="pokemon-info">
                        speed: <span>{pokemon.stats[5].base_stat}</span>
                    </p>
                </div>
                </li>
            </ul>
        </section>
    );
    // }
}; 