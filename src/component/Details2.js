import React, { useEffect, useState } from "react";
import { Link,  useParams } from "react-router-dom";
import ConnectBackend from "../services/ConnectBackend";

function Details(){
    const {id} = useParams()
    const [Data, SetData] = useState([])

    useEffect(() =>{
        ConnectBackend.getUserById(id)
        .then(res=>SetData(res.data))
        .catch(err=>console.log(err))
    })

    return(
        <div className="flex flex-col mt-5">
          <div className="w-full">
          <h3 className="font-bold text-center  bg-[#6eaa5e] p-5 text-white">Data Pasien</h3>
            <div className="relative shadow rounded-lg mt-3">
            <table className="w-full text-sm text-left text-gray-500">
                <tr  className="text-xs text-gray-700 uppercase bg-gray-100">
                  <td className="py-3 px-6 w-full">Nama</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="py-3 px-6 font-medium text-gray-900">{Data.nama}</td>
                </tr>
                <tr className="text-xs text-gray-700 uppercase bg-gray-100">
                  <td className="py-3 px-6 w-full">Usia</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="py-3 px-6 font-medium text-gray-900">{Data.usia}</td>
                </tr>
                <tr className="text-xs text-gray-700 uppercase bg-gray-100">
                  <td className="py-3 px-6 w-full">Jenis Kelamin</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="py-3 px-6 font-medium text-gray-900">{Data.jenis_kelamin}</td>
                </tr>
                <tr className="text-xs text-gray-700 uppercase bg-gray-100">
                  <td className="py-3 px-6 w-full">Alamat</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="py-3 px-6 font-medium text-gray-900">{Data.alamat}</td>
                </tr>
                <tr className="text-xs text-gray-700 uppercase bg-gray-100">
                  <td className="py-3 px-6 w-full">Deskripsi</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="py-3 px-6 font-medium text-gray-900">{Data.deskripsi}</td>
                </tr>  
                <tr>
                    <td className="py-3 px-1 text-left">
                      <Link to={`/antrian`} className="font-medium bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded text-white mr-1" >
                        Back
                    </Link>
                    </td>
                  </tr>
            </table>
          </div>
        </div>  
      </div>
    )
}

export default Details;




