"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {movies} from "../../lib/constants";
import { MoviesList } from "./MoviesList";
import { MovieDetails } from "./MovieDetails";
import { Login } from "./Login";
import { UserDetails } from "./UserDetails";
import { Pagination } from "./Pagination";

function HomePage() {
    const [showLogin, setShowLogin] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState<{ id: number; title: string; year: number; genre: string[]; rating: number; poster: string; synopsis: string; director: string; cast: string[]; musicDirector: string; numberOfReviews: number } | null>(null);
    const [username, setUsername] = useState("");
    const [loggedin, setLoggedin] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // const [movies, setMovies] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState("");

    const totalPages = Math.ceil(movies.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentMovies = movies.slice(startIndex, endIndex);

//     useEffect(() => {
//     const fetchMovies = async () => {
//       setLoading(true);
//       setError("");
//       try {
//         const response = await axios.get("https://your-external-api.com/movies");
//         setMovies(response.data); // Adjust if your API response structure is different
//       } catch (err) {
//         setError("Failed to fetch movies.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchMovies();
//   }, []);
  
    return (
        <div style={{ 
            display: "flex",
            alignItems: "center", 
            flexDirection: "column", 
            padding: "20px" , 
            background: "#fff", 
            borderRadius: "8px", 
            boxShadow: " 2px 4px rgba(0,0,0,0.1)", 
            margin: "20px auto", 
            color:"black",
            height: "150vh",
            }}
        >
            <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                width: "100%", 
                maxWidth: "1200px", 
                padding: "16px 24px" 
                }}
            >
                <div style={{flex: 1}}/>
                <div style={{flex: 1, textAlign: "center", fontSize: "24px", fontWeight: "bold"}}>
                    IMDB
                </div>
                <div style={{flex: 1, display: "flex", justifyContent: "flex-end"}}>
                    <button onClick={() => setShowLogin(!showLogin)}>
                        {(loggedin && username) ? `Welcome ${username}!` : "Login / Signup"}
                    </button>
                </div>
            </div>

            <p>Welcome to the Movies verse!!</p>

            <input 
                type="text" 
                placeholder="Search for movies..." 
                style={{ padding: "6px", 
                    width: "300px", 
                    borderRadius: "4px", 
                    border: "1px solid #ccc", 
                    margin:"24px" 
                }} 
            />
            {showLogin ? loggedin 
                ? <UserDetails 
                    username={username} 
                    setUsername={setUsername} 
                    setPassword={()=>{}} 
                    setLoggedin={setLoggedin}
                    />
                : <Login 
                    showLogin={showLogin}
                    setShowLogin={setShowLogin} 
                    setUsername={setUsername} 
                    setLoggedin={setLoggedin}
                    />
                : null}   
            
            {MoviesList({ 
                movies: currentMovies, 
                selectedMovie, 
                setSelectedMovie,
                })
            }
            
            {selectedMovie && 
                <MovieDetails 
                    movie={selectedMovie} 
                    setSelectedMovie={setSelectedMovie} 
                    loggedIn={loggedin}
                />
            }
            
            {Pagination({ 
                currentPage, 
                totalPages, 
                onPageChange: (page) => setCurrentPage(page) 
                })
            }
        </div>
    )
}

export default HomePage;