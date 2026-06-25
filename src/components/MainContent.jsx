import React, { useState, useEffect } from "react";

const MainContent = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/userlist.json");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      {users.map((user, index) => {
        return (
          <div className="bg-gray-200 p-4" key={user.email}>
            <div className="flex items-center space-x-4">
              <img
                src={user.picture}
                alt="User"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-gray-600 text-lg font-semibold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MainContent;
