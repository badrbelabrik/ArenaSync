import React, { useState } from "react";

export function Tabsystem({activeTab,setActiveTab}){
    return (
        <div className="tabsystem">
            <div className={`tabsystem-element ${activeTab === "info" ? "active" : ""}`}
        onClick={() => setActiveTab("info")}>Info</div>
            <div className={`tabsystem-element ${activeTab === "participants" ? "active" : ""}`}
        onClick={() => setActiveTab("participants")}>Participants</div>
            <div className={`tabsystem-element ${activeTab === "bracket" ? "active" : ""}`}
        onClick={() => setActiveTab("bracket")}>Bracket</div>
        </div>
    )
}