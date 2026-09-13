# EXPENSE TRACKER - 535250112

Website untuk memantau pengeluaran sehari-hari.

Website ini dibuat menggunakan HTML, CSS, dan JavaScript tanpa menggunakan back-end atau database.

## Fitur

Fitur utama website:

- Menambahkan data pengeluaran
- Menampilkan daftar pengeluaran
- Menghitung total nominal pengeluaran
- Menghitung jumlah transaksi yang telah ditambahkan
- Menghapus data pengeluaran
- Menampilkan notifikasi setelah data berhasil ditambahkan atau dihapus
- Tampilan lucu/unik
- Responsive untuk ukuran layar 768px atau lebih kecil

## Teknologi

- HTML
- CSS
- JavaScript

## Penjelasan

### HTML

HTML digunakan untuk membuat struktur website, seperti:

- header/banner dengan banner sebagai img di header
- card total pengeluaran
- card jumlah transaksi
- table transaksi
- tombol + sebagai perantara untuk memanggil form
- form untuk menambah expense

### CSS

CSS digunakan untuk mengatur tampilan dan layout website, seperti:

- warna/theme (mengatur kustomisasi warna agar tidak warna hitam putih saja)
- layout menggunakan grid
- card
- hover agar setiap kali cursor berada di card, card akan sedikit bergeser ke atas dan ada shadow-nya (agar tampilannya lebih menarik)
- tabel
- tombol
- modal
- responsive (agar tampilan tetap bagus saat ukuran layar kecil)

### JS

JavaScript digunakan untuk membuat website menjadi interaktif.

- **Array `transaction`**: tempat untuk menyimpan data pengeluarannya. Setiap transaksi disimpan sebagai object yang memiliki `id`, `date`, `description`, `category`, dan `amount`.

- **`addExpense()`**: digunakan untuk mengambil data dari form, membuat transaksi baru, lalu dimasukkan ke array menggunakan `unshift()`. `unshift()` digunakan untuk menambahkan data ke bagian paling depan array. Setelah itu tabel dan dashboard diperbarui.

- **`updateDashboard()`**: menghitung total nominal seluruh transaksi dan jumlah transaksi, kemudian menampilkannya pada dashboard.

- **`updateTransactionTable()`**: mengambil data dari array `transaction` dan membuat baris tabel menggunakan `row.innerHTML`, sehingga baris transaksi bisa dibuat langsung melalui JavaScript.

- **`deleteTransaction()`**: digunakan untuk menghapus transaksi berdasarkan `id`. `findIndex()` digunakan untuk menemukan index transaksi yang dicari, kemudian `splice()` digunakan untuk menghapus transaksi tersebut. Setelah itu dashboard dan tabel diperbarui kembali.

- **`showNotification()`**: digunakan untuk menampilkan notifikasi ketika transaksi berhasil ditambahkan atau dihapus. Fungsi ini membuat elemen notifikasi menggunakan JavaScript, kemudian menampilkan pesan tersebut di halaman. `setTimeout()` digunakan agar notifikasi otomatis dihapus setelah 3 detik.

Seluruh proses dilakukan secara client-side menggunakan JavaScript, sehingga website tidak membutuhkan back-end atau database.

