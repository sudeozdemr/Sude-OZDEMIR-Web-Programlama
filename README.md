
Revize hakkı: 2
Yapılanlar:
Firebase:
Ürünlerin listelenmesi
Sepete ürün eklenmesi,
Sepetten ürün çıkarılması
Sepetteki ürünün sayısının güncellenmesi
Sepetteki ürünleri görüntüleme
Kullanıcı Kaydı
Kullanıcı Girişi, Çıkışı

Jest-Test:
28 Adet Test
5 Adet Component Test Edildi (23 Test)
Getters Test Edildi (1 Test)
Bir Örnek Test (4 Test)

Kullanılan test türleri 12 Adet:
snapshot,
mockFunction,
toContain
toBeTruthy
toEqual
ToBe
resolves.toBe
// Aşağıdakiler Example.spec.js te kullanımının gösterilmesi için yazılmıştır.
not.toBe
toBeGreaterThan
toBeGreaterThanOrEqual
toBeLessThan
toBeLessThanOrEqual
toBeCloseTo

yarn komutu ile gerekli kütüphanelerin yüklenmesi gerekmektedir.
Öğretim görevlisine sunulmadan önce firebase/config.js dosyası içerisindeki firebaseConfig değişkeninin güncellenmesi gerekmektedir
Güncelleme için, Firebase sitesinde yeni proje oluşturulduktan sonra Project Settings kısmından web application tanımlaması yapıldıktan sonra, your apps kısmında bulunan firebaseConfig kısmını kopyala yapıştır yapabiliriz.

db/db.json dosyası Firebase Realtime Database importlanmalı, aktarılmalıdır.
Realtime Database Rule kısmı aşağıdaki gibi olmalıdır, erişim engeli kaldırılması için gerekiyor
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
Login işlemlerinin çalışabilmesi için Firebase sitesinde Authentication kısmında email/password kısmının aktifleştirilmesi gerekmektedir.