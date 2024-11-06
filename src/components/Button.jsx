import React from "react";

export default function Button({typeButton, children, styleSection,  onClickButton,title}) {
    
  return (
    <button onClick={()=>onClickButton(typeButton,title)} className={styleSection}>
      {children}
    </button>
  );
}
