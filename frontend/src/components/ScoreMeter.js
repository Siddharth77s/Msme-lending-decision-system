export default function ScoreMeter({ score }) {
  return (
    <div className="scoreBox">
      <p>Credit Score: {score}/100</p>

      <div className="bar">
        <div className="fill" style={{ width: `${score}%` }} />
      </div>
    </div>
  );
}