import React from 'react';

const ALLOWED_PROJECT_KEYS = [
    "octalume-iot-dashboard",
    "octalume-dashboard",
    "ufbrand-salwar-ecommerce",
    "ufbrand-salwar",
    "multi-city-travel-planner",
    "website-revamp",
    "thinkstack-core",
    "thinkstack"
];

const isBadgeAllowed = (project) => {
    if (!project) return false;
    if (project.showBadge === false) return false;
    if (project.showBadge === true) return true;

    const id = (project.id || "").toLowerCase();
    const slug = (project.slug || "").toLowerCase();
    const title = (project.title || "").toLowerCase();

    if (ALLOWED_PROJECT_KEYS.includes(id) || ALLOWED_PROJECT_KEYS.includes(slug)) {
        return true;
    }

    if (
        title.includes("octalume") ||
        title.includes("uf brand") ||
        title.includes("ufbrand") ||
        title.includes("multi-city") ||
        (title.includes("website") && project.client?.toLowerCase().includes("pickcel")) ||
        title.includes("thinkstack")
    ) {
        return true;
    }

    return false;
};

const ProjectBadge = ({ project, text }) => {
    if (!isBadgeAllowed(project)) {
        return null;
    }

    const badgeStr = project?.badgeText || project?.badge || text || "Designed & Developed";

    return (
        <div className="project-badge-pill">
            <svg className="badge-bolt-icon" width="12" height="12" viewBox="0 0 24 24" fill="#ff4d12">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span className="badge-text">{badgeStr}</span>
        </div>
    );
};

export default ProjectBadge;
