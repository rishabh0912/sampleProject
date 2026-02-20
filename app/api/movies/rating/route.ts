export async function POST(request: Request) {
    try {
        const {movieId, rating} = await request.json();

        const token = localStorage.getItem("authToken");
        
        if (!token) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
        }
        const response = await fetch("https://your-external-api.com/submit-rating", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ movieId, rating })
        });
        if (!response.ok) {
            return Response.json({ error: "Failed to submit rating" }, { status: response.status });
        }
        const data = await response.json();
        return Response.json(data);
    }
    catch (error) {

        return Response.json({ error: "An error occurred while submitting rating" }, { status: 500 });
    }
}