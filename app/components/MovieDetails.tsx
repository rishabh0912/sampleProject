import React from "react";

export function MovieDetails({ movie, setSelectedMovie, loggedIn }: { movie: { id: number; title: string; year: number; genres: string[]; averageRating: number; posterUrl: string; description: string, director: string, casts: string[], musicDirector: string, numberOfReviews: number }, setSelectedMovie: any, loggedIn: boolean }) {

    const [userRating, setUserRating] = React.useState<number>(0);
    const [submitting, setSubmitting] = React.useState(false);
    const [submitMsg, setSubmitMsg] = React.useState("");

    const handleRatingSubmit = async () => {
        setSubmitting(true);
        setSubmitMsg("");
        try {
            const token = localStorage.getItem("authToken"); // Get token from localStorage
            console.log("Token from localStorage:", token);

            if (!token) {
                setSubmitMsg("You are not logged in.");
                setSubmitting(false);
                return;
            }

            const response = await fetch("/api/movies/rating", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` 
                },
                body: JSON.stringify({ movieId: movie.id, score: userRating })
            });
            if (!response.ok) {
                throw new Error("Failed to submit rating");
            }
            setSubmitMsg("Rating submitted! Thank you.");
        } catch (err: any) {
            setSubmitMsg(err.message || "Error submitting rating");
        }
        setSubmitting(false);
    };

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
                <img src={movie.posterUrl} alt={movie.title} style={{ width: "100%", height: "300px", borderRadius: "4px", marginBottom: "12px" }} />
                <p style={{ fontWeight: "bold", fontSize: "20px", textAlign: "center" }}>{movie.title}</p>
                <p>Year: {movie.year}</p>
                <p>Genre: {movie.genres}</p>
                <p>Rating: {movie.averageRating} ({movie.numberOfReviews})</p>
                <p>description: {movie.description}</p>
                <p>Director: {movie.director}</p>
                <p>Cast: {movie.casts.join(", ")}</p>
                <p>Music Director: {movie.musicDirector}</p>
                <div style={{ marginTop: "12px", backgroundColor: "#f9f9f9", padding: "8px", borderRadius: "4px", textAlign: "center", fontSize: "12px" }}>
                    {loggedIn ? (
                        <>
                            <div style={{ marginBottom: "8px" }}>Rate this movie:</div>
                            <select value={userRating} onChange={e => setUserRating(Number(e.target.value))} style={{ marginRight: "8px" }}>
                                <option value={0}>Select</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                            </select>
                            <button onClick={handleRatingSubmit} disabled={submitting || userRating === 0} style={{ padding: "4px 12px", borderRadius: "4px", border: "none", background: "#007bff", color: "white", cursor: "pointer" }}>
                                {submitting ? "Submitting..." : "Submit Rating"}
                            </button>
                            {submitMsg && <div style={{ marginTop: "8px", color: submitMsg.includes("Thank") ? "green" : "red" }}>{submitMsg}</div>}
                        </>
                    ) : (
                        "Please log in to submit your review."
                    )}
                </div>
            </div>
            <button style={{
                marginTop: "12px",
                padding: "8px 16px",
                background: "#f9f9f9",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
            }}
                onClick={() => setSelectedMovie(null)}
            >
                Close
            </button>
        </div>
    )
}