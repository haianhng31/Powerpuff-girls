import { apps, books, products, styles } from "../Components/HealthTab/HealthConstants";
import { CategoryCard } from "../Components/HealthTab/CategoryCard";

const HealthTab = () => {
  return (
    <div style={styles.container}>
      <div style={styles.maxWidth}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerTitle}>
            <span style={{ fontSize: "2.5rem", marginRight: "12px" }}>💗</span>
            <h1 style={styles.mainTitle}>Health Resources</h1>
          </div>
          <p style={styles.subtitle}>
            Discover top-rated apps, books, and products to support your health
            journey
          </p>
        </div>

        {/* Stats Banner */}
        <div style={styles.statsCard}>
          <div style={styles.statsGrid}>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <span style={{ fontSize: "1.5rem", marginRight: "8px" }}>
                  🏆
                </span>
                <span style={styles.statValue}>12</span>
              </div>
              <p style={styles.statLabel}>Highly Rated Resources</p>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <span style={{ fontSize: "1.5rem", marginRight: "8px" }}>
                  👥
                </span>
                <span style={styles.statValue}>1M+</span>
              </div>
              <p style={styles.statLabel}>Women Helped</p>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <span style={{ fontSize: "1.5rem", marginRight: "8px" }}>
                  ⭐
                </span>
                <span style={styles.statValue}>4.7</span>
              </div>
              <p style={styles.statLabel}>Average Rating</p>
            </div>
          </div>
        </div>

        {/* Main Content - Three Columns */}
        <div style={styles.mainGrid}>
          <CategoryCard
            items={apps}
            icon="📱"
            title="Top Apps"
            bgGradient="linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
          />

          <CategoryCard
            items={books}
            icon="📚"
            title="Best Books"
            bgGradient="linear-gradient(135deg, #ec4899 0%, #db2777 100%)"
          />

          <CategoryCard
            items={products}
            icon="🛍️"
            title="Top Products"
            bgGradient="linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)"
          />
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <div style={styles.footerCard}>
            <h3 style={styles.footerTitle}>Take Control of Your Health</h3>
            <p style={styles.footerText}>
              Remember to consult with healthcare professionals for personalized
              advice
            </p>
            <button
              style={styles.footerButton}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            >
              Find a Healthcare Provider
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthTab;
