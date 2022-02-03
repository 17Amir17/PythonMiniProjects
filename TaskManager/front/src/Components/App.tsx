import React, { useEffect, useMemo } from "react";
import { useRecoilState } from "recoil";
import { runNetworking } from "../Networking";
import { statsState } from "../recoil/stats";
import Loader from "./Loader";
import Meter from "./Meter";
import ProcessTable from "./ProcessTable";

function App() {
  const [stats, setStats] = useRecoilState(statsState);

  useEffect(() => {
    runNetworking(setStats);
  }, []);

  if (!stats) return <Loader />;
  
  return (
    <div className="App">
      <header className="hostname">{stats.host}</header>
      <div className="stats">
        <Meter value={stats.cpu_usage} title={'CPU Usage'}/>
        <Meter value={stats.ram_usage} title={'RAM Usage'}/>
      </div>
      <ProcessTable processes={stats.processes}/>
    </div>
  );
}

export default App;
