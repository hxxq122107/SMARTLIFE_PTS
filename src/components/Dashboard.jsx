function Dashboard({ air, setAir, target }) {
    const airValid = air > target ? target : air;
    const persen = (airValid / target) * 100;
  
    return (
      <div className="card">
        <h3>Dashboard Sehat</h3>
  
        <p className="dashboard-info">
          Air minum: {airValid} / {target} gelas
        </p>
  
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${persen}%` }} />
        </div>
  
        <button
          className="dashboard-button"
          onClick={() => airValid < target && setAir(airValid + 1)}
          disabled={airValid >= target}
        >
          {airValid >= target ? "Target Tercapai ✔" : "Tambah Air"}
        </button>
      </div>
    );
  }
  
  export default Dashboard;
  