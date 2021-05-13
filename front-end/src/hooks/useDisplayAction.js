import React, { useState, useEffect } from "react";

export default function useDisplayAction() {
  
  //list expending control
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  return { expanded, setExpanded, handleChange }
}