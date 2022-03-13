import React, { useState } from "react";
import { Upload, message, Button } from "antd";
import { InboxOutlined } from "@ant-design/icons";

function Shabeer() {
  const [targetedNumber, setTargetedNumber] = useState(532);
  const [csvNumbers, setcsvNumbers] = useState([3, 4, 8, 7, 12]);

  const getEquations = () => {
    let csvMuliply = csvNumbers[0];
    for (let i = 1; i < csvNumbers.length; i++) {
      csvMuliply = csvMuliply * csvNumbers[i];
    }
    console.log(csvMuliply);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Tageted Number</h1>
      <h2>{targetedNumber}</h2>

      <h1>CSV Number</h1>
      {csvNumbers.map((e) => {
        return <h2>{e}</h2>;
      })}

      <input
        value={targetedNumber}
        placeholder="please enter tageted number"
        onChange={(e) => {
          if (!Number(e.target.value)) {
            return;
          }
          console.log(e.target.value);
          setTargetedNumber(e.target.value);
        }}
      />

      <Upload
        accept=".csv"
        showUploadList={false}
        beforeUpload={(file) => {
          const reader = new FileReader();
          let temp = [];
          reader.onload = (e) => {
            setcsvNumbers(e.target.result.split("\n"));
          };

          reader.readAsText(file);

          // Prevent upload
          return false;
        }}
      >
        <Button>
          <InboxOutlined /> Click to Upload
        </Button>
      </Upload>

      <Button
        onClick={() => {
          getEquations();
        }}
      >
        get equations
      </Button>
    </div>
  );
}

export default Shabeer;
