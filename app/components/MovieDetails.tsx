export function MovieDetails({ movie, setSelectedMovie }: { movie: { id: number; title: string; year: number; genre: string[]; rating: number; poster: string; synopsis: string, director: string, cast: string[], musicDirector: string, numberOfReviews: number }, setSelectedMovie: any }) {

    return (
        <div style={{
            position: "fixed",
            top: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            zIndex: 1000,
        }}>
            <div style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "8px",
                width: "350px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                color: "black",
            }}>
                <img src={movie.poster} alt={movie.title} style={{ width: "100%", height: "300px", borderRadius: "4px", marginBottom: "12px" }} />
                <p style={{ fontWeight: "bold", fontSize: "20px", textAlign: "center" }}>{movie.title}</p>
                <p>Year: {movie.year}</p>
                <p>Genre: {movie.genre}</p>
                <p>Rating: {movie.rating} ({movie.numberOfReviews})</p>
                <p>Synopsis: {movie.synopsis}</p>
                <p>Director: {movie.director}</p>
                <p>Cast: {movie.cast.join(", ")}</p>
                <p>Music Director: {movie.musicDirector}</p>

            </div>
                            <button style={{ 
                            marginTop: "12px", 
                            padding: "8px 16px", 
                            background: "#f9f9f9",
                            backgroundColor: "#007bff", 
                            color: "white", 
                            border: "none", 
                            borderRadius: "4px", 
                            cursor: "pointer"}} 
                            onClick={() => setSelectedMovie(null)}
                >
                    Close
                </button>
        </div>
    )
}