import React from "react";
import useSelector from "../utils/use-selector";

/**
 * Приложение
 */
function App() {
  const select = useSelector((state) => ({
    // name: state.modals.name,
  }));

  return (
    <>
      <h1>SIMPLE REACT-TELEGRAM WEBAPP</h1>
      <div>SOME TEXT SOME TEXT SOME TEXT</div>
    </>
  );
}

export default React.memo(App);
