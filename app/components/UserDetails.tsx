export function UserDetails({ username, setUsername, setPassword, setLoggedin}: { username: string, setUsername: any, setPassword: any, setLoggedin: any }) {
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        setUsername("");
        setPassword("");
        setLoggedin(false);
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
                alignItems: "center",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                textAlign: "center",
            }}>
                <p>You are logged in as {username}!</p>
                <button style={{ 
                            marginTop: "12px", 
                            padding: "8px 16px", 
                            backgroundColor: "#007bff", 
                            color: "white", 
                            border: "none", 
                            borderRadius: "4px", 
                            cursor: "pointer"}} 
                     onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>

    )
}