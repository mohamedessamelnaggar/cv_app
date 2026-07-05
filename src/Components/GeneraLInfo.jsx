import "../Styles/GeneralInfo.css";

function GeneralInfo({ generalInfo, setGeneralInfo }) {
  return (
    <div className="general" style={{color:"red"}}>
      <h2>General Information</h2>

      <input
        type="text"
        placeholder="Name"
        value={generalInfo.name}
        onChange={(e) =>
          setGeneralInfo({
            ...generalInfo,
            name: e.target.value,
          })
        }
      />

      <input
        type="email"
        placeholder="Email"
        value={generalInfo.email}
        onChange={(e) =>
          setGeneralInfo({
            ...generalInfo,
            email: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Phone"
        value={generalInfo.phone}
        onChange={(e) =>
          setGeneralInfo({
            ...generalInfo,
            phone: e.target.value,
          })
        }
      />
    </div>
  );
}

export default GeneralInfo;