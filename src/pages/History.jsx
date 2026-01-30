function History() {
  const data = JSON.parse(localStorage.getItem("history")) || [];

  const sorted = [...data].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

  const icon = (val) => (val ? "✅" : "❌");

  return (
    <div className="container about-page">
      <h2>📅 Riwayat Kesehatan</h2>
      <p>Ringkasan aktivitas harian SmartLife</p>

      {sorted.length === 0 ? (
        <div className="card">
          <p>Belum ada riwayat tersimpan</p>
        </div>
      ) : (
        sorted.map((d, i) => (
          <div key={i} className="card history-card">
            <h4>{formatDate(d.date)}</h4>

            <p>💧 Air minum: <b>{d.air}</b> gelas</p>

            <div className="history-checklist">
              <span>🏃 Olahraga {icon(d.olahraga)}</span>
              <span>😴 Tidur {icon(d.tidur)}</span>
              <span>🍽️ Sarapan {icon(d.sarapan)}</span>
              <span>🧘 Meditasi {icon(d.meditasi)}</span>
              <span>🚶 Jalan {icon(d.jalan)}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default History;
