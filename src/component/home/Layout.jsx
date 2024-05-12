import React from "react";

function Layout({ children }) {
  return (
    <section className="crancy-adashboard crancy-show w-full">
      <div className="w-full">
        <div className="grid gap-4 w-full">{children}</div>
      </div>
    </section>
  );
}

export default Layout;
