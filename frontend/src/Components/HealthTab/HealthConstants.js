export const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #fdf2f8 0%, #faf5ff 100%)",
    padding: "24px",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  maxWidth: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "32px",
  },
  headerTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
  },
  mainTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#1f2937",
    margin: 0,
  },
  subtitle: {
    fontSize: "1.125rem",
    color: "#6b7280",
    maxWidth: "600px",
    margin: "0 auto",
  },
  statsCard: {
    background: "white",
    borderRadius: "12px",
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    padding: "24px",
    marginBottom: "32px",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "24px",
  },
  statItem: {
    textAlign: "center",
  },
  statNumber: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "8px",
  },
  statValue: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#1f2937",
  },
  statLabel: {
    color: "#6b7280",
  },
  mainGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "32px",
    marginBottom: "48px",
  },
  categoryCard: {
    background: "white",
    borderRadius: "12px",
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    padding: "24px",
    height: "fit-content",
  },
  categoryHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: "24px",
    padding: "12px",
    borderRadius: "8px",
    color: "white",
  },
  categoryTitle: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    margin: 0,
  },
  itemCard: {
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    transition: "box-shadow 0.2s ease",
    cursor: "pointer",
  },
  itemHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "8px",
  },
  itemName: {
    fontWeight: "600",
    color: "#1f2937",
    fontSize: "1.125rem",
    margin: 0,
  },
  rating: {
    display: "flex",
    alignItems: "center",
  },
  ratingText: {
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "#6b7280",
    marginLeft: "4px",
  },
  author: {
    fontSize: "0.875rem",
    color: "#9ca3af",
    marginBottom: "8px",
  },
  description: {
    color: "#6b7280",
    fontSize: "0.875rem",
    marginBottom: "12px",
    lineHeight: "1.4",
  },
  featuresContainer: {
    marginBottom: "12px",
  },
  featuresGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "4px",
  },
  featureTag: {
    background: "#f3f4f6",
    color: "#374151",
    padding: "4px 8px",
    borderRadius: "12px",
    fontSize: "0.75rem",
  },
  itemFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "#059669",
  },
  button: {
    background: "#ec4899",
    color: "white",
    padding: "8px 16px",
    borderRadius: "8px",
    fontSize: "0.875rem",
    fontWeight: "500",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
  footer: {
    textAlign: "center",
  },
  footerCard: {
    background: "white",
    borderRadius: "12px",
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    padding: "24px",
  },
  footerTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "8px",
  },
  footerText: {
    color: "#6b7280",
    marginBottom: "16px",
  },
  footerButton: {
    background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
    color: "white",
    padding: "12px 32px",
    borderRadius: "8px",
    fontWeight: "500",
    border: "none",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  },
};
