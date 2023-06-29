import React from "react";
import "./App.css";
import Button from "./components/button/Button";
import Card from "./components/pages/Card/Card";

const data = [
  {
    Url: "https://i.ytimg.com/vi/Hql2PzKGX2A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsP5KN_046pvIkQywsGgM6htfgBw",
    pName: "1.7k Views - 2 days ago",
    hName: "CSS Variables | Toggle to the Dark Mode using CSS Variables",
  },
  {
    Url: "https://i.ytimg.com/vi/Hql2PzKGX2A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsP5KN_046pvIkQywsGgM6htfgBw",
    pName: "1.7k Views - 2 days ago",
    hName: "Responsive Website Design with CSS Media Queries | Complete We...",
  },
  {
    Url: "https://i.ytimg.com/vi/Hql2PzKGX2A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsP5KN_046pvIkQywsGgM6htfgBw",
    pName: "1.7k Views - 2 days ago",
    hName: "Build this Portfolio-Gallery using CSS Grid | Complete Web...",
  },
  {
    Url: "https://i.ytimg.com/vi/Hql2PzKGX2A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsP5KN_046pvIkQywsGgM6htfgBw",
    pName: "1.7k Views - 2 days ago",
    hName: "CSS Grid Layout in One Video | Complete Web Development Course...",
  },
  {
    Url: "https://i.ytimg.com/vi/Hql2PzKGX2A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsP5KN_046pvIkQywsGgM6htfgBw",
    pName: "1.7k Views - 2 days ago",
    hName: "Build This Complete Modern Website Using Only HTML And CSS....",
  },
  {
    Url: "https://i.ytimg.com/vi/Hql2PzKGX2A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsP5KN_046pvIkQywsGgM6htfgBw",
    pName: "1.7k Views - 2 days ago",
    hName: "Flexbox in CSS in One Video | Easy Tutorial | Complete Web...",
  },
  {
    Url: "https://i.ytimg.com/vi/Hql2PzKGX2A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsP5KN_046pvIkQywsGgM6htfgBw",
    pName: "1.7k Views - 2 days ago",
    hName:
      "Make a Glassmorphic Signup Page Using Basic CSS | Mini Project | W...",
  },
  {
    Url: "https://i.ytimg.com/vi/Hql2PzKGX2A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsP5KN_046pvIkQywsGgM6htfgBw",
    pName: "1.7k Views - 2 days ago",
    hName: "CSS Variables | Toggle to the Dark Mode using CSS Variables",
  },
];
function App() {
  return (
    <div>
      <div>
        <Button
          style={{
            background: "black",
            color: "white",
            padding: "10px 20px",
            borderRadius: "10px",
            border: "1px",
          }}>
          Recently uploaded
        </Button>
        <Button
          style={{
            padding: "10px 20px",
            // background: "1d1d1d",
            borderRadius: "10px",
            border: "1px",
          }}>
          Popular
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}>
        {data.map((side) => (
          <Card image={side.Url} Hdata={side.hName} Pdata={side.pName} />
        ))}
      </div>
    </div>
  );
}

export default App;
