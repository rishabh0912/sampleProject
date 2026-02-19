export function Pagination({ currentPage, totalPages, onPageChange }: { currentPage: number; totalPages: number; onPageChange: (page: number) => void }) {
    return (
        <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                style={{
                    padding: "8px 16px",
                    margin: "0 4px",    
                    backgroundColor: currentPage === 1 ? "#ccc" : "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: currentPage === 1 ? "not-allowed" : "pointer",
                }}
            >
                Previous
            </button>
            <span style={{ margin: "0 8px", alignSelf: "center" }}>
                Page {currentPage} of {totalPages}
            </span>
                
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                style={{
                    padding: "8px 16px",
                    margin: "0 4px",
                    backgroundColor: currentPage === totalPages ? "#ccc" : "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                }}
            >
                Next
            </button>
        </div>
    );
}
