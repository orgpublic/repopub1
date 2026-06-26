import axios from "axios";
import { use, useState } from "react";
import { data } from "react-router";
const ApiCall = () => {
  const [userData, setUserData] = useState({});
  const [photoList, setPhotoList] = useState([]);
  async function getDataUsingFetch() {
    const response = await fetch("https://lorem-api.com/api/users");
    const data = await response.json();
    setUserData(data);
  }

  const getDatUsingAxios = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    const data = response.data;
    setPhotoList(data);
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1">
          <button
            className="p-4 bg-green-200 rounded-2xl m-4"
            onClick={getDataUsingFetch}
          >
            Get Data Using Fetch
          </button>
        </div>
        <div className="flex-1 ml-4">
          <table className="table-auto mb-8">
            <thead>
              <tr className="border">
                <th className="border p-2">Id</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Avatar</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="border pl-2 pr-2">{userData.id}</td>
                <td className="border pl-2 pr-2">{userData.name}</td>
                <td className="border pl-2 pr-2">{userData.email}</td>
                <td className="border pl-2 pr-2">
                  <img
                    src={userData.avatar}
                    className="rounded-2xl h-20 w-20 p-2"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex-1">
          <button
            className="p-4 bg-green-600 rounded-2xl m-4"
            onClick={getDatUsingAxios}
          >
            Get Data Using Axios
          </button>
        </div>
        <div className="flex-1 ml-4">
          <table className="table-auto mb-8">
            <thead>
              <tr className="border">
                <th className="border p-2">Author</th>
                <th className="border p-2">Url</th>
                <th className="border p-2">Avatar</th>
              </tr>
            </thead>
            <tbody>
              {photoList.map((photo, index) => {
                return (
                  <tr key={index} className="border">
                    <td className="border pl-2 pr-2">{photo.author}</td>
                    <td className="border pl-2 pr-2">{photo.url}</td>
                    <td className="border pl-2 pr-2">
                      <img
                        src={photo.download_url}
                        className="rounded-2xl h-20 w-20 p-2"
                      />
                    </td>
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

export default ApiCall;
