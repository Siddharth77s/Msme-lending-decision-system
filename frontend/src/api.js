export const submitApplication = async (payload) => {
  const res = await fetch("http://localhost:5000/api/decision", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const err = await res.json();
    throw err;
  }

  return res.json();
};