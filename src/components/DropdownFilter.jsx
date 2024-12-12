import React, { useState } from "react";
import "../styling/DropdownFilter.css";

export function DropdownFilter({ filters, onFilterChange }) {
  const [selectedFilters, setSelectedFilters] = useState(
    Object.fromEntries(filters.map((filter) => [filter.key, ""]))
  );

  const handleFilterChange = (key, value) => {
    const updatedFilters = { ...selectedFilters, [key]: value };
    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="filter-dropdown">
      {filters.map((filter) => (
        <div key={filter.key} className="filter-dropdown-container">
          <label className="filter-dropdown-label">{filter.label}</label>
          <select
            className="filter-dropdown-select"
            onChange={(e) => handleFilterChange(filter.key, e.target.value)}
          >
            <option value="">Select {filter.label}</option>
            {filter.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}
