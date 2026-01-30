function Goals({ target, setTarget }) {
  return (
    <div className="container about-page">
      <h2 className="about-title">🎯 Target Harian</h2>

      <div className="goals-wrapper">
        <div className="goals-card">
          <h3>Target Minum Air</h3>
          <p>Atur jumlah gelas air yang ingin kamu capai setiap hari</p>

          <input
            type="number"
            min="1"
            className="goals-input"
            value={target}
            onChange={(e) => setTarget(Number(e.target.value))}
          />

          <div className="goals-badge">
            💧 {target} gelas per hari
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goals;
