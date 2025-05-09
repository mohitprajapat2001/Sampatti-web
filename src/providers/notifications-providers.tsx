/* eslint-disable */
import React, { createContext, useContext, useEffect, useState } from "react";
import { getApiUrl } from "@/utils/constants";
import { getRequest } from "@/utils/axios-request";

interface NotificationContextType {
  notifications: null | object;
  getNotifications: () => Promise<void>;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

export const NotificationsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  let id = null;
  const [notifications, setNotifications] = useState([{ title: "Hello" }]);

  /**
   * Get User notifications
   */
  const getNotifications = async () => {
    /* TODO: Add Notification Logic */
  };

  useEffect(() => {
    getNotifications();
    setTimeout(() => {
      setNotifications(null);
    }, 5000);
  }, []);
  const data = {
    notifications,
    getNotifications,
  };
  return (
    <NotificationContext.Provider value={data}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useTokenContext must be used within a AuthProvider");
  }
  return context;
};
