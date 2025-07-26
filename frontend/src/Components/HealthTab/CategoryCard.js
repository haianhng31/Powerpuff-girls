import { styles } from "./HealthConstants";

export const CategoryCard = ({ items, icon, title, bgGradient }) => (
  <div style={styles.categoryCard}>
    <div style={{ ...styles.categoryHeader, background: bgGradient }}>
      <span style={{ fontSize: "1.5rem", marginRight: "12px" }}>{icon}</span>
      <h3 style={styles.categoryTitle}>{title}</h3>
    </div>

    <div>
      {items.map((item, index) => (
        <div
          key={index}
          style={styles.itemCard}
          onMouseEnter={(e) => {
            e.target.style.boxShadow =
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
          }}
          onMouseLeave={(e) => {
            e.target.style.boxShadow = "none";
          }}
        >
          <div style={styles.itemHeader}>
            <h4 style={styles.itemName}>{item.name}</h4>
            <div style={styles.rating}>
              <span style={{ color: "#fbbf24" }}>⭐</span>
              <span style={styles.ratingText}>{item.rating}</span>
            </div>
          </div>

          {item.author && <p style={styles.author}>by {item.author}</p>}

          <p style={styles.description}>{item.description}</p>

          <div style={styles.featuresContainer}>
            <div style={styles.featuresGrid}>
              {item.features.map((feature, idx) => (
                <span key={idx} style={styles.featureTag}>
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div style={styles.itemFooter}>
            <span style={styles.price}>{item.price}</span>
            <button
              style={styles.button}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#db2777";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#ec4899";
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
