export const FilterPopup = ({ onClose }) => {
  return (
    <div className="filter-overlay" onClick={onClose}>
      <div className="filter-popup" onClick={(e) => e.stopPropagation()}>
        <div className="filter-popup-header">
          <h3>Filters</h3>
          <button className="filter-popup-close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="filter-popup-content">
          <p>Select a sport</p>

          <div className="filter-popup-options">
            <button className="filter-popup-option">All</button>
            <button className="filter-popup-option">Badminton</button>
            <button className="filter-popup-option">Basketball</button>
            <button className="filter-popup-option">Chess</button>
            <button className="filter-popup-option">Football</button>
            <button className="filter-popup-option">Table Tennis</button>
          </div>
        </div>
      </div>
    </div>
  );
};
