import React from "react";

function Layout({ children }) {
  return (
    <section className="crancy-adashboard crancy-show">
      <div className="w-full">
        <div className="grid gap-4">{children}</div>
      </div>
    </section>
  );
}

export default Layout;
