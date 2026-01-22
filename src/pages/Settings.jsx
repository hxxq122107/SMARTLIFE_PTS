function Settings({ persistData, setPersistData }) {
    return (
      <div className="container about-page">
        <h2 className="about-title">Pengaturan</h2>
        <label>
          <input
            type="checkbox"
            checked={persistData}
            onChange={() => setPersistData(!persistData)}
          />
          Simpan data
        </label>
      </div>
    );
  }
  
  export default Settings;
  