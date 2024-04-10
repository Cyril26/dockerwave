import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import httpClient from "../httpClient";

export const ProtectedRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await httpClient.get("/@me");
        if (response.status !== 200) navigate("/");
      } catch (error) {
        console.log("Not authenticated");
        navigate("/");
      }
    };

    checkAuthentication();
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
