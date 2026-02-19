export async function POST(request: Request) {
    try{const { username, password } = await request.json();

    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
        return Response.json({error: "Authentication failed" }, { status: response.status });
    }

    const data = await response.json();
    return Response.json(data);
} catch (error) {
    return Response.json(
        { error: "An error occurred during authentication" }, 
        { status: 500 });
    }
}