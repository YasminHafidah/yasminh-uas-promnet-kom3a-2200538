package models

import "gorm.io/gorm"
import "gorm.io/driver/mysql"

var DB *gorm.DB

func ConnectDB(){
	db,err:= gorm.Open(mysql.Open("root.@tcp(localhost:3306)/db_2200538_yasminhafidahalqanit_uas"))
	if err!= nil{
		panic(err)
	}
	db.AutoMigrate(&Patients{})
	DB = db
}