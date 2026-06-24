import react from "react";

const MainContent = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    picture:
      "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?b=1&s=612x612&w=0&k=20&c=VsTsa0kjyZ7ALe-nyKAUfynyRxZo8H4LRMdu_ecPuOY=",
  };
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
