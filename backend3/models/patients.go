package models

type Patients struct {
	Id            int    `gorm:"primaryKey" json:"id"`
	Nama          string `gorm:"type:varchar(100)" json:"nama"`
	Usia          int    `gorm:"type:int(3)" json:"usia"`
	Jenis_kelamin string `gorm:"type:varchar(2)" json:"jenis_kelamin"`
	Alamat    string `gorm:"type:varchar(100)" json:"alamat"`
    Deskripsi string `gorm:"type:varchar(200)" json:"deskripsi"`
}
