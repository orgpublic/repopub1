import "./App.css";
import MainContent from "./components/MainContent";
const userList = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    picture:
      "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?b=1&s=612x612&w=0&k=20&c=VsTsa0kjyZ7ALe-nyKAUfynyRxZo8H4LRMdu_ecPuOY=",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    picture:
      "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?b=1&s=612x612&w=0&k=20&c=VsTsa0kjyZ7ALe-nyKAUfynyRxZo8H4LRMdu_ecPuOY=",
  },
  {
    name: "Michael Chang",
    email: "michael.chang@example.com",
    picture:
      "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?b=1&s=612x612&w=0&k=20&c=VsTsa0kjyZ7ALe-nyKAUfynyRxZo8H4LRMdu_ecPuOY=",
  },
  {
    name: "Aisha Rahman",
    email: "aisha.rahman@example.com",
    picture:
      "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?b=1&s=612x612&w=0&k=20&c=VsTsa0kjyZ7ALe-nyKAUfynyRxZo8H4LRMdu_ecPuOY=",
  },
  {
    name: "Carlos Mendez",
    email: "carlos.mendez@example.com",
    picture:
      "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?b=1&s=612x612&w=0&k=20&c=VsTsa0kjyZ7ALe-nyKAUfynyRxZo8H4LRMdu_ecPuOY=",
  },
];
function App() {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="bg-gray-800 text-white p-4">Navigation</div>
        {userList.map((user, index) => {
          return <MainContent key={index} user={user} />;
        })}
        <div className="bg-gray-400 p-4">Footer</div>
      </div>
    </>
  );
}

export default App;
