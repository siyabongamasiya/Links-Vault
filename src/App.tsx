import { useState } from "react";
import "./App.css";
import TopSection from "./components/topSection";
import MidSection from "./components/midSection";
import Footer from "./components/footer";
import FloatingButton from "./components/floatingbutton";
import Modal from "./components/modal";

function App() {
  return (
    <>
      <Modal isOpen={false} onClose={() => {}} />
      <TopSection />
      <MidSection />
      <Footer />
      <FloatingButton />
    </>
  );
}

export default App;
