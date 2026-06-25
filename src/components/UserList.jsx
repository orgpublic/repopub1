import { Link } from "react-router";

const UserList = () => {
  const users = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Rob", age: 40 },
    { id: 3, name: "Devid", age: 50 },
    { id: 4, name: "Antony", age: 60 },
    { id: 5, name: "Ed", age: 70 },
    { id: 6, name: "Mark", age: 80 },
  ];
  return (
    <>
      <div className="bg-gray-200 p-4">
        <div className="text-gray-600">
          <p className="font-bold">Dynamic Routing</p>
          <table>
            <thead>
              <tr className=" font-bold">
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={user.id}>
                    <td>
                      <Link to={"/userlist/" + user.id}>{user.id}</Link>
                    </td>
                    <td>{user.name} </td>
                    <td> {user.age} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserList;
