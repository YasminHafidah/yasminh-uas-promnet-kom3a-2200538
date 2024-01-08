import React, {useState} from "react";
import ConnectBackend from "../services/ConnectBackend";
import { useNavigate } from "react-router-dom";

const Add5 = () =>{
    const [nama, setNama] = useState("");
    const [usia, setUsia] = useState();
    const [jenis_kelamin, setGender] = useState("Male");
    const [alamat, setAlamat] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const navigate = useNavigate();

    const saveUser = async (e) =>{
        e.preventDefault();
        try{
            const usiaInt = parseInt(usia,10);
            await ConnectBackend.createUser({
            nama,
            usia: usiaInt,
            jenis_kelamin,
            alamat,
            deskripsi  
            });
            alert("Data has been added successfully!");
            navigate("/")
        }catch (error){
            console.log(error);
        }
    }

        return(
            <div className="max-w-lg mx-auto my-10 bg-[#dbead5] p-8 rounded-xl shadow shadow-slate-300">
                <h3 className="font-bold text-center mt-3 bg-[#6eaa5e] p-5">Registrasi Pasien Baru</h3>
                 <form onSubmit={saveUser} className="my-10">
                            <div className="flex flex-col">
                                <div className="mb-5">
                                    <label className="font-bold text-slate-700">Nama Lengkap</label>
                                    <input type="text" 
                                    className="w-full py-3 mt-1 border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" 
                                    value = {nama}
                                    onChange={(e)=>setNama(e.target.value)}
                                    placeholder="Masukkan nama lengkap"
                                    required/>
                                </div>

                                    {/* Form Pengisian Usia */}
                                <div className="mb-5">  
                                        <label className="font-bold text-slate-700">Usia</label>
                                        <input type="number"
                                        className="w-full py-3 mt-1 border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                        value = {usia}
                                        onChange={(e)=>setUsia(e.target.value)} 
                                        placeholder="Masukkan Usia"
                                        required/>
                                </div>

                                <div className="mb-5">
                                <label className="font-bold text-slate-700">Jenis Kelamin</label>
                                        <br/>
                                        <input
                                            type="radio"
                                            name="jenis_kelamin"
                                            value={"L"}
                                            checked={jenis_kelamin==="L"}
                                            onChange={(e)=>setGender(e.target.value)}
                                            className="py-3 mt-1 hover:shadow"
                                            required
                                        />Laki-laki
                                        <br/>
                                        <input
                                                type="radio"
                                                name="jenis_kelamin"
                                                value={"P"}
                                                checked={jenis_kelamin==="P"}
                                                onChange={(e)=>setGender(e.target.value)}
                                                className="py-3 mt-1 hover:shadow"
                                                required
                                        />Perempuan
                                </div>

                                <div className="mb-5">
                                <label className="font-bold text-slate-700">Alamat</label>
                                    <br/>
                                    <input type="text"
                                    className="w-full py-3 mt-1 border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    value = {alamat}
                                    onChange={(e)=>setAlamat(e.target.value)} 
                                    placeholder="Alamat"/>
                                </div>

                                <div className="mb-5">
                                    <label className="font-bold text-slate-700">Deskripsi</label>
                                        <br/>
                                        <textarea 
                                        className="w-full py-3 mt-1 border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                        value = {deskripsi}
                                        onChange={(e)=>setDeskripsi(e.target.value)} 
                                        placeholder="Deskripsi"/>
                                </div>
                                <div>

                                </div>
                                <button type="submit" className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow">Save</button>
                            </div>
                        </form>
            </div>  
        )
}

export default Add5