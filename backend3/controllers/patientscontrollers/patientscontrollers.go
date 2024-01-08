package patientscontrollers

import (
	"backend3/helper"
	"backend3/models"
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"gorm.io/gorm"
)

var ResponseJson = helper.ResponseJson
var ResponseError = helper.ResponseJson

// End poin untuk Menampilkan semua data pasien
func Index(w http.ResponseWriter, r *http.Request) {
	var patients []models.Patients

	//kalo data engga ketemu
	if err := models.DB.Find(&patients).Error; err != nil {
		ResponseError(w, http.StatusInternalServerError, err.Error())
		return
	}

	//kalo data pasien ketemu
	ResponseJson(w, http.StatusOK, patients)

}

// Menampilkan data pasien berdasarkan id
func Show(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.ParseInt(vars["id"], 10, 64)
	if err != nil {
		ResponseError(w, http.StatusBadRequest, err.Error())
		return
	}

	var patient models.Patients
	if err := models.DB.First(&patient, id).Error; err != nil {
		switch err {
		case gorm.ErrRecordNotFound:
			ResponseError(w, http.StatusNotFound, "Pasien Tidak Ditemukan")
			return
		default:
			ResponseError(w, http.StatusInternalServerError, err.Error())
			return
		}
	}
	ResponseJson(w, http.StatusOK, patient)
}

// menambah data pasien
func Create(w http.ResponseWriter, r *http.Request) {

	var patient models.Patients
	//Menyimpan data yang diterima ke tabel patient

	decoder := json.NewDecoder(r.Body)
	//Validasi data

	if err := decoder.Decode(&patient); err != nil {
		log.Println("Error decoding request body:", err)
		ResponseError(w, http.StatusBadRequest, "Invalid request data")
		return
	}
	defer r.Body.Close()

	if err := models.DB.Create(&patient).Error; err != nil {
		//Jika ada error penyimpanan, kirimkan response 500 Internal Server Error
		ResponseError(w, http.StatusInternalServerError, err.Error())
		return
	}

	//Kirimkan response 201 Created dengan data pasien yang baru dibuat
	ResponseJson(w, http.StatusCreated, patient)

}

// Memperbarui data pasien berdasarkan id
func Update(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.ParseInt(vars["id"], 10, 64)
	if err != nil {
		ResponseError(w, http.StatusBadRequest, err.Error())
		return
	}

	var patient models.Patients

	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&patient); err != nil {
		ResponseError(w, http.StatusInternalServerError, err.Error())
		return
	}
	//kalo misalnya berhasil decode
	defer r.Body.Close()

	if err := models.DB.Where("id = ?", id).Updates(&patient).Error; err != nil {
		ResponseError(w, http.StatusInternalServerError, err.Error())
		return
	}

	patient.Id = int(id)

	ResponseJson(w, http.StatusOK, patient)

}

// Menghapus data pasien berdasarkan id
func Delete(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]

	var patient models.Patients
	if models.DB.Delete(&patient, id).RowsAffected == 0 {
		ResponseError(w, http.StatusBadRequest, "Tidak dapat menghapus data pasien")
		return
	}

	ResponseJson(w, http.StatusOK, map[string]string{"message": "Data pasien berhasil di hapus"})

}
