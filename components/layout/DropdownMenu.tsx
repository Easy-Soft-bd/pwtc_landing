"use client";

import { useState, useEffect, useRef } from "react";

const DropdownMenu: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-1 text-foreground hover:text-secondary transition-colors font-medium"
      >
        How It Works
        <svg
          className={`w-4 h-4 transition-transform ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-surface rounded-lg shadow-lg border border-light/20 py-2 z-50">
          <a
            href="#how-it-works-1"
            className="block px-4 py-2 text-secondary hover:bg-light/20 transition-colors"
            onClick={() => setIsDropdownOpen(false)}
          >
            Step 1
          </a>
          <a
            href="#how-it-works-2"
            className="block px-4 py-2 text-secondary hover:bg-light/20 transition-colors"
            onClick={() => setIsDropdownOpen(false)}
          >
            Step 2
          </a>
          <a
            href="#how-it-works-3"
            className="block px-4 py-2 text-secondary hover:bg-light/20 transition-colors"
            onClick={() => setIsDropdownOpen(false)}
          >
            Step 3
          </a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

