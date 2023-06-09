import moment from "moment";
import React from "react";
import { FcMusic, FcVideoFile } from "react-icons/fc";
const HistoryItem = ({ history }) => {
  return (
    <div className="flex gap-2 items-center border-[1px] border-base-200 max-w-full rounded-md shadow-sm shadow-base-100 bg-base-300 w-full md:max-w-md">
      <div className="flex items-center justify-center p-4 pr-2">
        {history.linkType === "audio" ? (
          <FcMusic size={50} />
        ) : (
          <FcVideoFile size={50} />
        )}
      </div>
      <div className="flex flex-col gap-2 p-4 pl-2">
        <span className="text-secondary text-2xl font-bold">
          {history?.cardName}
        </span>
        <div className="flex flex-col font-bold">
          <div>Bucket: {history?.bucketName}</div>
          <div>Played: {moment(history?.playedAt).fromNow()}</div>
          <p className="max-w-[200px] md:max-w-xs text-clip overflow-scroll text-sm text-primary-content">
            {history.link}
          </p>
        </div>
      </div>
    </div>
  );
};
export default HistoryItem;
