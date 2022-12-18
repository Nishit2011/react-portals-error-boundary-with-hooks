import { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import Posts from "./Posts";
import "./styles.css";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      {/* <ErrorBoundary>
        <Posts />
      </ErrorBoundary> */}

      <button onClick={() => setShowModal(true)}>Show modal</button>
      {showModal && (
        <Modal>
          <p>This is a modal</p>
          <button onClick={() => setShowModal(false)}>Close</button>
        </Modal>
      )}
    </div>
  );
}
