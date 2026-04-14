export default function BusinessForm({ form, setForm }) {
  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid">
      <input name="name" placeholder="Owner Name" onChange={update} />
      <input name="pan" placeholder="PAN (ABCDE1234F)" onChange={update} />

      <select name="businessType" onChange={update}>
        <option value="">Business Type</option>
        <option>Retail</option>
        <option>Manufacturing</option>
        <option>Services</option>
      </select>

      <input
        name="revenue"
        type="number"
        placeholder="Monthly Revenue"
        onChange={update}
      />
    </div>
  );
}