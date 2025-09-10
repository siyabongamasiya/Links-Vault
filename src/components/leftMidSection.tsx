import Dialog from "./dialog";

const LeftMidSection = () => {
  return (
    <div className="desktop" id="leftMidSection">
      <Dialog
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default LeftMidSection;
