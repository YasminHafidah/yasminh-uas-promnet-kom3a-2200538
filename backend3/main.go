package main

import (
	"backend3/controllers/patientscontrollers"
	"backend3/models"
	"log"
	"net/http"

	"github.com/rs/cors"
	"github.com/gorilla/mux"
)

func main() {
	models.ConnectDB()

	r := mux.NewRouter()
	r.HandleFunc("/patients", patientscontrollers.Index).Methods("GET")
	r.HandleFunc("/patients/{id}", patientscontrollers.Show).Methods("GET")
	r.HandleFunc("/patients", patientscontrollers.Create).Methods("POST")
	r.HandleFunc("/patients/{id}", patientscontrollers.Update).Methods("PUT")
	r.HandleFunc("/patients/{id}", patientscontrollers.Delete).Methods("DELETE")

	corsHandler := cors.New(cors.Options{
        AllowedOrigins: []string{"http://localhost:3000"}, 
        AllowedMethods: []string{"GET", "POST", "PUT", "DELETE"},
    }).Handler(r)

    http.Handle("/", corsHandler)

	log.Fatal(http.ListenAndServe(":8080", nil))
}
