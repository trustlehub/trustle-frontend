import { useState } from "react";
import { useKillAccountContext } from "../../../context/killAccountContext";
import ProcessComponent from "./processComponent";

function Processing() {
  const [expandId, setExpandId] = useState<number>(-1);
  const { killAccounts } = useKillAccountContext();

  return (
    <div className="px-10 pt-8 pb-16 flex flex-col gap-3">
      {killAccounts.map((data, index) => (
        <ProcessComponent
          data={data}
          expandId={expandId}
          setExpandId={setExpandId}
          key={index}
        />
      ))}
    </div>
  );
}

export default Processing;
