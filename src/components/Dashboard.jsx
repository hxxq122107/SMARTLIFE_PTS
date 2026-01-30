function Dashboard({ air, setAir, target }) {
  const airValid = air > target ? target : air;
  const persen = (airValid / target) * 100;

  // ambil tanggal hari ini (tanpa jam)
  const today = new Date().toISOString().split("T")[0];

  // ✅ SIMPAN / UPDATE HISTORY HARIAN
  const saveDailyHistory = (newAir) => {
    const history = JSON.parse(localStorage.getItem("history")) || [];

    const indexToday = history.findIndex(
      (h) => h.date === today
    );

    if (indexToday !== -1) {
      // 🔁 update data hari ini
      history[indexToday].air = newAir;
    } else {
      // ➕ tambah data baru (hari baru)
      history.push({
        date: today,
        air: newAir,
      });
    }

    localStorage.setItem("history", JSON.stringify(history));
  };

  const tambahAir = () => {
    if (airValid < target) {
      const updatedAir = airValid + 1;
      setAir(updatedAir);
      saveDailyHistory(updatedAir); // 🔥 1 hari 1 data
    }
  };

  return (
    <div className="card">
      <h3>Dashboard Sehat</h3>

      <p className="dashboard-info">
        Air minum: {airValid} / {target} gelas
      </p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${persen}%` }}
        />
      </div>

      <button
        className="dashboard-button"
        onClick={tambahAir}
        disabled={airValid >= target}
      >
        {airValid >= target ? "Target Tercapai ✔" : "Tambah Air"}
      </button>
    </div>
  );
}

export default Dashboard;
