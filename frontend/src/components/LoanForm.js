export default function LoanForm({ form, setForm }) {
  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid">
      <input
        name="loanAmount"
        type="number"
        placeholder="Loan Amount"
        onChange={update}
      />

      <input
        name="tenure"
        type="number"
        placeholder="Tenure (months)"
        onChange={update}
      />

      <input
        name="purpose"
        placeholder="Loan Purpose"
        onChange={update}
      />
    </div>
  );
}