import React, { useState } from "react";

// Sample tab data
const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];

export default function TabSwitcher() {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  const handleSelectTab = (id) => {
    setActiveTab(id);
  };

  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="tab-switcher">
      <h1>Tab Switcher</h1>

      {/* Tab buttons */}
      <div className="tab-buttons">
        {tabs.map((tab) => {
          return (
            <button
              data-testid={`tab-button-${tab.id}`}
              onClick={() => handleSelectTab(tab.id)}
              className={currentTab?.id == tab?.id ? "active" : ""}
            >
              {tab?.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="tab-content" data-testid="tab-content">
        {currentTab?.content}
      </div>
    </div>
  );
}
