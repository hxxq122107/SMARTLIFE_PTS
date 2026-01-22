function Checklist({
    olahraga, setOlahraga,
    tidur, setTidur,
    sarapan, setSarapan,
    meditasi, setMeditasi,
    jalan, setJalan
  }) {
    return (
      <div className="card checklist">
        <h3>Checklist Harian</h3>
  
        <label><input type="checkbox" checked={olahraga} onChange={() => setOlahraga(!olahraga)} /> Olahraga</label>
        <label><input type="checkbox" checked={tidur} onChange={() => setTidur(!tidur)} /> Tidur cukup</label>
        <label><input type="checkbox" checked={sarapan} onChange={() => setSarapan(!sarapan)} /> Sarapan sehat</label>
        <label><input type="checkbox" checked={meditasi} onChange={() => setMeditasi(!meditasi)} /> Meditasi</label>
        <label><input type="checkbox" checked={jalan} onChange={() => setJalan(!jalan)} /> Jalan kaki</label>
      </div>
    );
  }
  
  export default Checklist;
  