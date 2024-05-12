import React from "react";

function Layout({ children }) {
  return (
    <section className="crancy-adashboard crancy-show">
      <div className="w-full">
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
}

export default Layout;
