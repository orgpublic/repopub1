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
      <div className="p-4">
        <div className="text-gray-600">
          <table className="table-auto m-4 border-spacing-2 border-separate border border-gray-400 dark:border-gray-500">
            <caption className="caption-top font-bold">Dynamic Routing</caption>
            <thead>
              <tr className="font-bold">
                <th className="border border-gray-300">Id</th>
                <th className="border border-gray-300">Name</th>
                <th className="border border-gray-300">Age</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={user.id}>
                    <td className="border border-gray-300">
                      <Link to={"/userlist/" + user.id}>{user.id}</Link>
                    </td>
                    <td className="border border-gray-300">{user.name} </td>
                    <td className="border border-gray-300"> {user.age} </td>
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
