function History() {
    const data = JSON.parse(localStorage.getItem("history")) || [];
  
    return (
      <div className="container about-page">
        <h2 className="about-title">Riwayat</h2>
        {data.length === 0 ? <p>Belum ada data.</p> :
          data.map((d, i) => (
            <div key={i} className="card">{d.date} - Air: {d.air}</div>
          ))
        }
      </div>
    );
  }
  
  export default History;
  