"use client";
import React from "react";
import { usePathname } from "next/navigation";

const activeLinkStyle: React.CSSProperties = {
  background: "#4fd1c5",
  color: "#1a202c",
  fontWeight: 700,
};

const sidebarStyle: React.CSSProperties = {
  width: "240px",
  height: "100vh",
  background: "#1a202c",
  color: "#fff",
  padding: "32px 16px 16px 16px",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  position: "fixed",
  left: 0,
  top: 0,
};

const titleStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 700,
  marginBottom: "32px",
  letterSpacing: "1px",
  textAlign: "center",
};

const navStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const linkStyle: React.CSSProperties = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "1.1rem",
  fontWeight: 500,
  padding: "8px 12px",
  borderRadius: "6px",
  transition: "background 0.2s",
};

const linkHoverStyle: React.CSSProperties = {
  background: "#2d3748",
};

const modules = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Product", href: "/product" },
  { name: "Categories", href: "/categories" },
  { name: "User", href: "/users" },
];

export default function Sidebar() {
  const [hovered, setHovered] = React.useState<number | null>(null);
  const pathname = usePathname();
  return (
    <aside style={sidebarStyle}>
      <div style={titleStyle}>Stock Control</div>
      <nav style={navStyle}>
        {modules.map((mod, idx) => {
          const isActive = pathname === mod.href;
          return (
            <a
              key={mod.name}
              href={mod.href}
              style={
                isActive
                  ? { ...linkStyle, ...activeLinkStyle }
                  : hovered === idx
                    ? { ...linkStyle, ...linkHoverStyle }
                    : linkStyle
              }
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {mod.name}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
