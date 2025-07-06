# **Panduan Memulai Pengembangan dengan Template MERN**

Asumsi: Anda sudah memiliki Node.js, npm, dan MongoDB terinstal di sistem Anda.

## **Langkah 0: Setup Awal (Hanya Sekali untuk Template Ini)**

Jika Anda belum melakukannya, Anda perlu menginstal semua dependensi untuk template ini. Lakukan ini hanya sekali setelah Anda pertama kali mendapatkan template (misalnya, setelah mengkloning repositori ini).

1. **Buka Terminal** di direktori root proyek Anda (`D:\Development\Proyek\Web\Fullstack\MERN\my-mern-project`).
2. **Instal Dependensi Root:**

    ```bash
    npm install
    ```

3. **Instal Dependensi Backend:**

    ```bash
    cd backend
    npm install
    cd .. # Kembali ke direktori root
    ```

4. **Instal Dependensi Frontend:**

    ```bash
    cd frontend
    npm install
    cd .. # Kembali ke direktori root
    ```

5. **Konfigurasi Variabel Lingkungan Backend:**

    * Di direktori `backend/`, buat file baru bernama `.env`.
    * Salin isi dari `backend/.env.example` ke dalam file `.env` yang baru Anda buat.
        * **Windows Command Prompt:** `copy backend\.env.example backend\.env`
        * **Git Bash/WSL/Linux/macOS:** `cp backend/.env.example backend/.env`
    * Pastikan `MONGODB_URI` di `.env` sesuai dengan konfigurasi MongoDB Anda (misalnya, `mongodb://localhost:27017/mern_boilerplate`).

## **Langkah 1: Membuat Branch Baru untuk Proyek Anda**

Setiap kali Anda ingin memulai proyek baru atau fitur baru, buatlah *branch* baru dari *branch* `main` (atau `master` jika itu nama *branch* utama Anda).

1. **Pastikan Anda berada di *branch* utama:**

    ```bash
    git checkout main
    ```

    *(Jika Anda menggunakan `master` sebagai branch utama, ganti `main` dengan `master`)*

2. **Tarik perubahan terbaru (opsional, tapi disarankan):**

    ```bash
    git pull origin main
    ```

3. **Buat dan pindah ke *branch* baru Anda:**

    ```bash
    git checkout -b nama-proyek-baru-anda
    ```

    Ganti `nama-proyek-baru-anda` dengan nama yang relevan untuk proyek atau fitur yang akan Anda kerjakan (misalnya, `fitur-autentikasi`, `proyek-ecommerce-v1`).

## **Langkah 2: Memulai Aplikasi (Backend & Frontend)**

Setelah Anda berada di *branch* proyek baru Anda, Anda bisa memulai server backend dan frontend secara bersamaan.

1. **Pastikan Anda berada di direktori root proyek (`my-mern-project`).**
2. **Jalankan aplikasi:**

    ```bash
    npm run dev
    ```

    Ini akan menjalankan skrip `dev` yang kita konfigurasi di `package.json` root, yang secara otomatis akan memulai:

    * Server backend (biasanya di `http://localhost:5000` atau port yang Anda tentukan di `.env`).
    * Server pengembangan frontend (biasanya di `http://localhost:5173` atau port default Vite).

## **Langkah 3: Mulai Pengembangan**

Sekarang Anda siap untuk mulai menulis kode!

* **Untuk Backend:**
  * Buka file-file di direktori `backend/`.
  * Anda bisa mulai menambahkan model Mongoose, rute Express, dan *controller* di sini.
  * Setiap perubahan pada file backend akan secara otomatis me-restart server berkat `nodemon`.
* **Untuk Frontend:**
  * Buka file-file di direktori `frontend/`.
  * Anda bisa mulai membangun komponen React, mengelola *state*, dan melakukan permintaan HTTP ke backend menggunakan `axios`.
  * Perubahan pada file frontend akan secara otomatis di-reload di browser Anda.

## **Langkah 4: Menyimpan Perubahan Anda (Git Workflow)**

Saat Anda membuat kemajuan, penting untuk menyimpan perubahan Anda secara teratur ke Git.

1. **Lihat perubahan yang ada:**

    ```bash
    git status
    ```

2. **Tambahkan file yang berubah ke *staging area*:**

    ```bash
    git add .
    ```

    *(Atau `git add nama/file/anda.js` untuk menambahkan file tertentu)*

3. **Buat *commit* dengan pesan yang deskriptif:**

    ```bash
    git commit -m "feat: Menambahkan fitur autentikasi dasar"
    ```

    *(Gunakan pesan commit yang jelas dan ringkas)*

4. **Dorong perubahan Anda ke repositori remote (jika ada):**

    ```bash
    git push origin nama-proyek-baru-anda
    ```

## **Langkah 5: Menggabungkan Perubahan (Opsional, Setelah Selesai)**

Setelah Anda selesai dengan proyek atau fitur di *branch* baru Anda, Anda mungkin ingin menggabungkannya kembali ke *branch* utama (`main`).

1. **Pastikan semua perubahan di *branch* Anda sudah di-*commit* dan di-*push*.**
2. **Pindah ke *branch* utama:**

    ```bash
    git checkout main
    ```

3. **Tarik perubahan terbaru dari *remote*:**

    ```bash
    git pull origin main
    ```

4. **Gabungkan *branch* Anda:**

    ```bash
    git merge nama-proyek-baru-anda
    ```

5. **Dorong perubahan yang sudah digabungkan:**

    ```bash
    git push origin main
    ```

6. **Hapus *branch* lama (opsional):**

    ```bash
    git branch -d nama-proyek-baru-anda # Hapus lokal
    git push origin --delete nama-proyek-baru-anda # Hapus remote
    ```
