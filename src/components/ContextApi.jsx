import { useContext } from "react";
import { ThemeDataContext } from "./contexts/ThemeContext";

const ContextApi = () => {
  const data = useContext(ThemeDataContext);

  return (
    <>
      <table className="table-auto m-4">
        <tbody>
          <tr>
            <td>{data}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ContextApi;
