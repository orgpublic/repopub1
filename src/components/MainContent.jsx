import react from "react";

const MainContent = ({ user }) => {
  console.log(user);
  return (
    <>
      <div className="bg-gray-200 p-4">
        <div className="flex items-center space-x-4">
          <img
            src={user.picture}
            alt="User"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
