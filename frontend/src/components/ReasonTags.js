export default function ReasonTags({ reasons }) {
  return (
    <div className="tags">
      {reasons?.map((r, i) => (
        <span key={i} className="tag">
          {r}
        </span>
      ))}
    </div>
  );
}