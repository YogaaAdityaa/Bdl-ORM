# Judul Proyek

Ini merupakan sebuah project percobaan untuk penggunaan ORM Prisma yang dimana terdapat 2 model, yaitu user dan post

Pada Project ini terdapat penggunaan Select, Insert, Update, Delete serta join.

Ada juga fitur tambahan yang digunakan yaitu Migrations dan Seeder. Migrations merupakan sebuah perintah untuk merubah rancangan table database, sedangkan Seeder merupakan sebuah perintah untuk membuat table di database.


## Instalasi

1.  Instal dependensi: `npm install prisma --save-dev`,`npm install @prisma/client`


## Konfigurasi Database
DATABASE_URL="file:./dev.db"

Database yang digunakan adalah sqlite, apabila menggunakan database jenis lain url dapat diubah.

## Buat mitgrate dan juga seeder 
npx prisma migrate dev --name init
npx prisma db seed (menambahkan seeder)



## Jalankan Program
npx ts-node src/index.ts

