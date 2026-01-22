function Goals({ target, setTarget }) {
    return (
      <div className="container about-page">
        <h2 className="about-title">Target Harian</h2>
        <input
          type="number"
          value={target}
          min="1"
          onChange={(e) => setTarget(Number(e.target.value))}
        />
      </div>
    );
  }
  
  export default Goals;
  