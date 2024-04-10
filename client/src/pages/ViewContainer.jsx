import React, { useState, useEffect } from "react";
import httpClient from "../httpClient";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Terminal from "../components/Terminal";
import Tile from "../components/Tile";

const ViewContainer = () => {
  const [containerDetails, setContainerDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchContainerDetails = async () => {
      try {
        const response = await httpClient.get(`/container_details/${id}`);
        setContainerDetails(response.data);
      } catch (error) {
        console.error("Error fetching container details:", error);
      }
    };

    fetchContainerDetails();
  }, [id]);

  return (
    <div>
      {containerDetails ? (
        <div className="my-10">
          <div className="flex justify-between">
            <Tile title="Name" detail={containerDetails.name} />
            <Tile title="ID" detail={containerDetails.id} />
            <Tile title="Status" detail={containerDetails.status} />
            <Tile title="Port" detail={containerDetails.ports} />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold m-10">Container Logs</h2>
            <Terminal logs={containerDetails.logs} />
          </div>
          
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ViewContainer;
