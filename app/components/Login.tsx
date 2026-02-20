import { useState } from "react";

export function Login({showLogin, setShowLogin, setUsername, setLoggedin}: {showLogin: boolean, setShowLogin: any, setUsername: any, setLoggedin: any}) {
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsernameState] = useState("");
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      localStorage.setItem("authToken", data.accessToken);
      
      setShowLogin(false);
      setUsername(username);
      setPassword("");
      setLoggedin(true);
      setUsernameState("");
    } catch (err) {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

    return(
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,    
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
        }}>
            <div style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "8px",
                width: "300px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                textAlign: "center",
            }}>
                <h2>Login / Signup</h2>
                <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsernameState(e.target.value)} 
                    style={{ width: "100%", padding: "8px", margin: "8px 0", borderRadius: "4px", border: "1px solid #ccc" }} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: "100%", padding: "8px", margin: "8px 0", borderRadius: "4px", border: "1px solid #ccc" }} 
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit" disabled={loading} 
                style={{ 
                            margin: "12px", 
                            padding: "8px 16px", 
                            backgroundColor: "#007bff", 
                            color: "white", 
                            border: "none", 
                            borderRadius: "4px", 
                            cursor: "pointer"}} >
                {loading ? "Signing in..." : "Submit"}
                </button>
                <button style={{ 
                            margin: "12px", 
                            padding: "8px 16px", 
                            backgroundColor: "#cf4b1f", 
                            color: "white", 
                            border: "none", 
                            borderRadius: "4px", 
                            cursor: "pointer"}} 
                    onClick={() => setShowLogin(!showLogin)}>Cancel</button>
                </form>
            </div>
        </div>
    )
}