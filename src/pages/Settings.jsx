function Settings({ persistData, setPersistData, darkMode, setDarkMode }) {

  const resetHistory = () => {
    if (window.confirm("Yakin ingin menghapus seluruh riwayat?")) {
      localStorage.removeItem("history");
      alert("Riwayat berhasil dihapus");
    }
  };

  return (
    <div className="container about-page">
      <h2>⚙️ Pengaturan</h2>

      <div className="card">
        <label>
          <input
            type="checkbox"
            checked={persistData}
            onChange={(e) => setPersistData(e.target.checked)}
          />
          Simpan data harian
        </label>
      </div>

      

      <div className="card">
        <h3>🗑️ Reset Riwayat</h3>
        <p>Hapus seluruh data riwayat kesehatan</p>
        <button onClick={resetHistory} style={{ background: "#ef4444" }}>
          Hapus Riwayat
        </button>
      </div>
    </div>
  );
}

export default Settings;
