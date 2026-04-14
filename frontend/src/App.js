import { useState } from "react";
import "./App.css";

import BusinessForm from "./components/BusinessForm";
import LoanForm from "./components/LoanForm";
import ScoreMeter from "./components/ScoreMeter";
import ReasonTags from "./components/ReasonTags";
import { submitApplication } from "./api";

function App() {
  const [form, setForm] = useState({
    name: "",
    pan: "",
    businessType: "",
    revenue: "",
    loanAmount: "",
    tenure: "",
    purpose: ""
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const data = await submitApplication(form);
      setResult(data);
    } catch (err) {
      setError(err.error || "Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="container">

      <h1 className="title">MSME Lending Decision System</h1>

      <div className="card">
        <BusinessForm form={form} setForm={setForm} />
        <LoanForm form={form} setForm={setForm} />

        {error && <p className="error">{error}</p>}

        <button className="btn" onClick={handleSubmit}>
          Check Eligibility
        </button>
      </div>

      {loading && (
        <div className="loader">
          <p>Analyzing financial profile...</p>
          <p>Running credit engine...</p>
          <p>Generating decision...</p>
        </div>
      )}

      {result && (
        <div className="card">
          <h2>Decision: {result.decision}</h2>

          <ScoreMeter score={result.creditScore} />

          <ReasonTags reasons={result.reasons} />
        </div>
      )}

    </div>
  );
}

export default App;