/* eslint-disable @typescript-eslint/ban-ts-comment */
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface processData {
  id: number;
  title: string;
}

const processDatas: Array<processData> = [
  { id: 1, title: "Order confirmation" },
  { id: 2, title: "Verify Identity" },
  { id: 3, title: "Power of attorney" },
  { id: 4, title: "Finish" },
];

function ProcessHeader({ step }: { step: number }) {
  return (
    <div className="px-10 py-6 flex flex-col gap-8 border-b border-b-grey-400 max-lg:overflow-x-scroll">
      <div className="font-primary font-medium text-xl leading-6 text-grey-900">
        Account Removal Process
      </div>
      <div className="flex gap-2">
        {processDatas.map((data) => {
          let icon_bg = "";
          let icon = data.id.toString();
          let icon_color = "text-[#98a2b3]";
          let icon_border = "shadow-[0_0_0_1px_inset_#98a2b3]";
          let title_color = "text-[#667085]";
          let progress_color = "bg-[#EAECF0]";
          if (data.id === step) {
            icon_bg = "bg-[#5E93AB7D]";
            icon = step.toString();
            icon_color = "text-[#294653]";
          }
          if (data.id <= step) {
            title_color = "text-[#344054]";
            progress_color = "bg-[#5E93AB]";
            icon_border = "";
          }
          if (data.id < step) {
            icon_bg = "bg-[#5E93AB]";
            //@ts-ignore
            icon = (
              <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
            );
            icon_color = "text-white";
          }
          return (
            <div
              className="flex flex-col gap-3 min-w-[160px] w-full"
              key={data.id}
            >
              <div className="flex gap-2 items-center">
                <div
                  className={`h-[18px] w-[18px] flex items-center justify-center rounded-full ${icon_bg} ${icon_border}`}
                >
                  <h1
                    className={`font-secondary font-medium leading-5 text-sm ${icon_color}`}
                  >
                    {icon}
                  </h1>
                </div>
                <h1
                  className={`font-secondary text-sm whitespace-nowrap ${title_color}`}
                >
                  {data.title}
                </h1>
              </div>
              <div
                className={`w-full h-[6px] rounded-full ${progress_color}`}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProcessHeader;
