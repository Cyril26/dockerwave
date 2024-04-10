import React, { useState, useEffect } from "react";
import httpClient from "../httpClient";
import NewContainerModal from "./NewContainerModal";
import { HiOutlineTrash, HiOutlineEye } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import ImagePushForm from "./ImagePushForm";

function RenderContainersPage(body, onSearchTextChange, fetchContainers) {
  const [toggleNewContainerModal, setToggleNewContainerModal] = useState(false);
  const [togglePushImageModal, setTogglePushImageModal] = useState(false);

  const handlePullContainerClick = () => {
    setToggleNewContainerModal((prevState) => !prevState);
  };

  const handlePushImageClick = () => {
    setTogglePushImageModal((prevState) => !prevState);
  };

  const handleCloseModal = () => {
    setToggleNewContainerModal(false);
    setTogglePushImageModal(false);
  };

  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="text-4xl text-gray-600 font-semibold">Containers</h2>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex bg-gray-50 items-center p-2 px-10 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
            </svg>
            <input
              className="bg-gray-50 outline-none ml-1 block w"
              type="text"
              name=""
              id=""
              placeholder="Search by name or status"
              onChange={onSearchTextChange}
            />
          </div>
          <div className="lg:ml-40 ml-10 space-x-8">
            <button
              className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
              onClick={handlePullContainerClick}
            >
              Pull New Image
            </button>
            <button
              className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
              onClick={handlePushImageClick}
            >
              Push Image
            </button>
          </div>
          {toggleNewContainerModal && (
            <NewContainerModal onClose={handleCloseModal} />
          )}
          {togglePushImageModal && <ImagePushForm onClose={handleCloseModal} />}
        </div>
      </div>
      {body}
    </div>
  );
}

export default function ContainersList() {
  const [loading, setLoading] = useState(true);
  const [loadedContainers, setLoadedContainers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const fetchContainers = async (
    searchTerm = "",
    sortColumn = "name",
    sortOrder = "asc"
  ) => {
    try {
      const response = await httpClient.get(
        `/containers?search_term=${searchTerm}&sort_column=${sortColumn}&sort_order=${sortOrder}`
      );
      setLoadedContainers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching containers:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContainers(searchTerm, sortColumn, sortOrder);
  }, [searchTerm, sortColumn, sortOrder, status]);

  const onSearchTextChange = (e) => {
    setLoading(true);
    setSearchTerm(e.target.value);
  };

  const handleHeaderClick = (clickedSortColumn) => {
    if (clickedSortColumn === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(clickedSortColumn);
      setSortOrder("asc");
    }
  };

  const handleContainerAction = async (containerId, containerStatus) => {
    try {
      if (containerStatus === "running") {
        await httpClient.post("/stop_container", { container_id: containerId });
      } else {
        await httpClient.post("/start_container", {
          container_id: containerId,
        });
      }
      setStatus((prevStatus) => !prevStatus);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteContainer = async (containerId) => {
    try {
      await httpClient.delete("/delete_container", {
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          container_id: containerId,
        },
      });
      fetchContainers();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const viewContainer = async (containerId) => {
    navigate(`/containers/${containerId}`);
  };

  const loadingSection = <Loader />;
  const tableHeaderClass =
    "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider";
  const dataSection = (
    <div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  className={`${tableHeaderClass} cursor-pointer`}
                  onClick={(clickedSortColumn) => handleHeaderClick("name")}
                >
                  {sortColumn === "name" && sortOrder === "asc" && "Name ↓"}
                  {sortColumn === "name" && sortOrder === "desc" && "Name ↑"}
                  {sortColumn !== "name" && "Name"}
                </th>
                <th className={tableHeaderClass}>ID</th>
                <th className={tableHeaderClass}>State</th>
                <th className={tableHeaderClass}>Action</th>
                <th className={tableHeaderClass}>Delete</th>
                <th className={tableHeaderClass}>View</th>
              </tr>
            </thead>
            <tbody>
              {loadedContainers.map((container, index) => {
                return (
                  <tr key={index}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {container.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {container.id}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {container.status}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <button
                        onClick={() =>
                          handleContainerAction(container.id, container.status)
                        }
                        className={`px-4 py-2 rounded ${
                          container.status === "running"
                            ? "bg-orange-500"
                            : "bg-blue-500"
                        } text-white`}
                      >
                        {container.status === "running"
                          ? "Stop Container"
                          : "Start Container"}
                      </button>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <button
                        onClick={() => deleteContainer(container.id)}
                        className=" text-red-500"
                      >
                        <HiOutlineTrash className="inline-block mr-1" />
                      </button>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <button
                        onClick={() => viewContainer(container.id)}
                        className="0 text-blue-500"
                      >
                        <HiOutlineEye className="inline-block mr-1" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return RenderContainersPage(
      loadingSection,
      onSearchTextChange,
      fetchContainers
    );
  } else {
    return RenderContainersPage(
      dataSection,
      onSearchTextChange,
      fetchContainers
    );
  }
}
