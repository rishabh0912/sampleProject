export function MoviesList({ movies, setSelectedMovie}: { movies: { id: number;
    title: string;
    year: number;
    genres: string;
    averageRating: number;
    posterUrl: string;
    casts: string[];
    director: string;
    musicDirector: string;
    description: string;
    numberOfReviews: number }[], 
    selectedMovie: any, 
    setSelectedMovie: any }) {
    return (
        <div style={{ 
                display: "flex", 
                flexWrap: "wrap", 
                width: "100%", 
                maxWidth: "1200px", 
                justifyContent  : "space-between", 
                alignItems: "center", 
                margin: "0 auto" }}>
            {movies.map((movie)=>(
                <div key={movie.id} 
                     style={{
                        display: "flex", 
                        width:"220px",
                        height: "auto",
                        padding: "12px", 
                        border: "1px solid #ccc", 
                        margin: "0", 
                        background: "#f9f9f9",
                        flexDirection: "column",
                        alignItems: "left",
                        boxSizing: "border-box",
                        borderRadius: "8px" ,
                        }}
                        onClick={()=>setSelectedMovie(movie)}>
                    <img
                        src={movie.posterUrl}
                        alt={movie.title}
                        style={{ 
                            width: "100%", 
                            height: "auto", 
                            borderRadius: "4px", 
                            marginBottom: "12px" 
                            }}    
                    />
                    <h3 style={{ fontWeight: "bold" }}>{movie.title}</h3>
                    <p>{movie.casts.join(",")}</p>
                    <p style={{marginTop: "8px"}}>Rating: {movie.averageRating} ({movie.numberOfReviews})</p>
                </div>  
                ))}
                </div>
    )
}