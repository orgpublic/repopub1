import { Link, useParams } from "react-router";

const UserDetails = () => {
  const param = useParams();

  return (
    <>
      <div className="p-4">
        <div className="items-center space-x-4 text-color-red text-gray-500">
          <table className="table-auto">
            <tbody>
              <tr>
                <td>UserId : {param.id}</td>
              </tr>
              <tr>
                <td>
                  <Link to="/userlist">Back to User List</Link>
                </td>
              </tr>
            </tbody>{" "}
          </table>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
