import ConnectBackend from "../services/ConnectBackend";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Antrian2() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    ConnectBackend.getUsers()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = async (id) => {
    try {
      const shouldDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");

      if (shouldDelete) {
        await ConnectBackend.deleteUser(id);
        setData((prevData) => prevData.filter((user) => user.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredData = data.filter((user) =>
    user.nama.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col mt-5">
      <div className="w-full">
        <h3 className="font-bold text-center  bg-[#6eaa5e] p-5 text-white">Daftar Pasien</h3>
        <div className="relative shadow rounded-lg mt-3">
          <div className="mb-4">
            <label className="text-gray-700 px-2 font-semibold">Cari Pasien: </label>
            <input
              type="text"
              className="border rounded px-3 py-1"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="py-3 px-1 text-center">No</th>
                <th className="py-3 px-6">Nama</th>
                <th className="py-3 px-1 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((user, index) => (
                <tr className="bg-white border-b" key={index}>
                  <td className="py-3 px-1 text-center">{index + 1}</td>
                  <td className="py-3 px-6 font-medium text-gray-900">{user.nama}</td>
                  <td className="py-3 px-1 text-center">
                    <Link
                      to={`/update/${user.id}`}
                      className="font-medium bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded text-white mr-1"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => deleteUser(user.id)}
                      type="button"
                      className="font-medium bg-red-400 hover:bg-red-500 px-3 py-1 rounded text-white mr-1"
                    >
                      Delete
                    </button>
                    <Link
                      to={`/details/${user.id}`}
                      className="font-medium bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded text-white"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Antrian2;
