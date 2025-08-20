export const apps = [
  {
    name: "Clue",
    rating: 4.8,
    description:
      "Science-based period and ovulation tracker with detailed insights",
    features: ["Cycle predictions", "Symptom tracking", "Health insights"],
    price: "Free with premium options",
  },
  {
    name: "Flo",
    rating: 4.7,
    description: "AI-powered period tracker with personalized health insights",
    features: ["Period prediction", "Pregnancy mode", "Health articles"],
    price: "Free with premium options",
  },
  {
    name: "Ovia",
    rating: 4.6,
    description: "Comprehensive fertility and period tracking app",
    features: ["Fertility tracking", "Cycle analysis", "Health tips"],
    price: "Free",
  },
  {
    name: "Period Tracker",
    rating: 4.5,
    description: "Simple and intuitive menstrual cycle tracking",
    features: ["Easy logging", "Calendar view", "Reminders"],
    price: "Free with ads",
  },
];

export const books = [
  {
    name: "Period Repair Manual",
    rating: 4.9,
    description: "Natural treatment for better hormones and better periods",
    author: "Lara Briden",
    features: ["Hormone health", "Natural remedies", "Evidence-based"],
    price: "$15-20",
  },
  {
    name: "The Fifth Vital Sign",
    rating: 4.8,
    description: "Master your cycles and optimize your fertility",
    author: "Lisa Hendrickson-Jack",
    features: ["Cycle awareness", "Fertility signs", "Health education"],
    price: "$16-22",
  },
  {
    name: "Beyond the Pill",
    rating: 4.7,
    description: "A 30-day program to balance hormones and reclaim your body",
    author: "Jolene Brighten",
    features: ["Post-pill support", "Hormone balance", "Nutrition guide"],
    price: "$14-18",
  },
  {
    name: "WomanCode",
    rating: 4.6,
    description:
      "Perfect your cycle, amplify your fertility, supercharge your sex drive",
    author: "Alisa Vitti",
    features: ["Hormone optimization", "Lifestyle tips", "Cycle syncing"],
    price: "$13-17",
  },
];

export const products = [
  {
    name: "DivaCup",
    rating: 4.8,
    description: "Reusable menstrual cup - eco-friendly and cost-effective",
    features: ["12-hour protection", "Eco-friendly", "Multiple sizes"],
    price: "$25-35",
  },
  {
    name: "Thinx Period Underwear",
    rating: 4.7,
    description: "Absorbent underwear that replaces pads and tampons",
    features: ["All-day protection", "Comfortable fit", "Various styles"],
    price: "$24-38",
  },
  {
    name: "Heating Pad - Sunbeam",
    rating: 4.6,
    description: "Electric heating pad for menstrual cramp relief",
    features: ["Multiple heat settings", "Auto shut-off", "Soft fabric"],
    price: "$20-30",
  },
  {
    name: "Organic Cotton Tampons",
    rating: 4.5,
    description: "Chemical-free tampons made from 100% organic cotton",
    features: ["No chemicals", "Biodegradable", "Comfortable"],
    price: "$8-12",
  },
];

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

// Modal styles
export const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "2rem",
    maxWidth: "800px",
    width: "90%",
    maxHeight: "80vh",
    overflow: "auto",
    position: "relative",
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
  closeButton: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#6b7280",
    padding: "0.5rem",
  },
  modalTitle: {
    fontSize: "1.75rem",
    fontWeight: "700",
    marginBottom: "1.5rem",
    color: "#1f2937",
  },
  searchForm: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginBottom: "2rem",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  label: {
    fontSize: "0.875rem",
    fontWeight: "600",
    color: "#374151",
  },
  input: {
    padding: "0.75rem",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "1rem",
  },
  select: {
    padding: "0.75rem",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "1rem",
    backgroundColor: "white",
  },
  searchButton: {
    backgroundColor: "#8b5cf6",
    color: "white",
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s",
  },
  resultsContainer: {
    marginTop: "2rem",
  },
  resultCard: {
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    padding: "1rem",
    marginBottom: "1rem",
    backgroundColor: "#f9fafb",
  },
  providerName: {
    fontSize: "1.125rem",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "0.5rem",
  },
  providerInfo: {
    fontSize: "0.875rem",
    color: "#6b7280",
    marginBottom: "0.25rem",
  },
  loading: {
    textAlign: "center",
    padding: "2rem",
    color: "#6b7280",
  },
  error: {
    color: "#ef4444",
    padding: "1rem",
    backgroundColor: "#fef2f2",
    border: "1px solid #fecaca",
    borderRadius: "8px",
    marginTop: "1rem",
  },
};
