var http = require("http");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");
var multer = require("multer");
var path2 = require("path");
const jwt = require("jsonwebtoken");

var secret_key = "a31422";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var conn = mysql.createConnection({
  host: "localhost", //nama host database mysql
  user: "root", //user mysql
  password: "", //password mysql
  database: "data_pegawai",
});

conn.connect((err) => {
  if (err) console.log("Problem with MySQL " + err);
  else {
    console.log("Connected with Database");
  }
});

// konfigurasi multer untuk upload pas foto

var fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime().toString());
  },
});

var fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  if (req.method === "OPTIONS") {
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    return res.status(200).json({});
  }
  next();
});

app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("userimg")
);

app.use(
  "/uploads/images",
  express.static(path2.join(__dirname, "uploads/images"))
);

// fetch semua karyawan aktif dalam bentuk button
app.get("/datakaryawan", (req, res) => {
  conn.query(
    "select dataDiri.id, dataDiri.nama from dataDiri join dataPekerjaan on dataDiri.nama=dataPekerjaan.nama where dataPekerjaan.statusPekerjaan='Aktif'",
    (err, rows) => {
      res.json(rows);
    }
  );
});

// fetch guru tk
app.get("/viewgurutk", (req, res) => {
  conn.query(
    "select dataDiri.id, dataDiri.nama, dataDiri.tempatLahir, dataDiri.tanggalLahir, dataDiri.noHP, dataPekerjaan.noSkPertama from dataDiri join dataPekerjaan on dataDiri.nama=dataPekerjaan.nama where dataPekerjaan.jabatan='Guru TK'",
    (err, rows) => {
      res.json(rows);
    }
  );
});

//fetch guru sd reg
app.get("/viewgurusd", (req, res) => {
  conn.query(
    "select dataDiri.id, dataDiri.nama, dataDiri.tempatLahir, dataDiri.tanggalLahir, dataDiri.noHP, dataPekerjaan.noSkPertama from dataDiri join dataPekerjaan on dataDiri.nama=dataPekerjaan.nama where dataPekerjaan.jabatan='Guru SD Reguler'",
    (err, rows) => {
      res.json(rows);
    }
  );
});

//fetch guru sd plus
app.get("/viewgurusdplus", (req, res) => {
  conn.query(
    "select dataDiri.id, dataDiri.nama, dataDiri.tempatLahir, dataDiri.tanggalLahir, dataDiri.noHP, dataPekerjaan.noSkPertama from dataDiri join dataPekerjaan on dataDiri.nama=dataPekerjaan.nama where dataPekerjaan.jabatan='Guru SD Plus'",
    (err, rows) => {
      res.json(rows);
    }
  );
});

//fetch guru smp
app.get("/viewgurusmp", (req, res) => {
  conn.query(
    "select dataDiri.id, dataDiri.nama, dataDiri.tempatLahir, dataDiri.tanggalLahir, dataDiri.noHP, dataPekerjaan.noSkPertama from dataDiri join dataPekerjaan on dataDiri.nama=dataPekerjaan.nama where dataPekerjaan.jabatan='Guru SMP'",
    (err, rows) => {
      res.json(rows);
    }
  );
});

//fetch guru sma
app.get("/viewgurusma", (req, res) => {
  conn.query(
    "select dataDiri.id, dataDiri.nama, dataDiri.tempatLahir, dataDiri.tanggalLahir, dataDiri.noHP, dataPekerjaan.noSkPertama from dataDiri join dataPekerjaan on dataDiri.nama=dataPekerjaan.nama where dataPekerjaan.jabatan='Guru SMA'",
    (err, rows) => {
      res.json(rows);
    }
  );
});

//fetch staff
app.get("/viewstaff", (req, res) => {
  conn.query(
    "select dataDiri.id, dataDiri.nama, dataDiri.tempatLahir, dataDiri.tanggalLahir, dataDiri.noHP, dataPekerjaan.noSkPertama from dataDiri join dataPekerjaan on dataDiri.nama=dataPekerjaan.nama where dataPekerjaan.jabatan='Staff'",
    (err, rows) => {
      res.json(rows);
    }
  );
});

//fetch kepsek & wakil
app.get("/btnkepsek", (req, res) => {
  conn.query(
    "select dataDiri.id, dataDiri.nama from dataDiri join dataPekerjaan on dataDiri.nama=dataPekerjaan.nama where dataPekerjaan.jabatan='Kepala Sekolah' or dataPekerjaan.jabatan='Wakil Kepala Sekolah'",
    (err, rows) => {
      res.json(rows);
    }
  );
});

//fetch staff non aktif
app.get("/viewnonaktif", (req, res) => {
  conn.query(
    "select dataDiri.id, dataDiri.nama, dataDiri.tempatLahir, dataDiri.tanggalLahir, dataDiri.noHP, dataPekerjaan.noSkPertama from dataDiri join dataPekerjaan on dataDiri.nama=dataPekerjaan.nama where dataPekerjaan.jabatan='Non Aktif'",
    (err, rows) => {
      res.json(rows);
    }
  );
});

// fetch semua tabel berdasarkan nama untuk view data
app.get("/datadiri/:nama", (req, res) => {
  var nama = req.params.nama;
  conn.query(
    "select * FROM dataDiri WHERE nama ='" + nama + "'",
    (err, rows) => {
      res.json(rows);
    }
  );
});

app.get("/datapendidikan/:nama", (req, res) => {
  var nama = req.params.nama;
  conn.query(
    "select * from dataPendidikan where nama='" + nama + "'",
    (err, rows) => {
      res.json(rows);
    }
  );
});

app.get("/datapekerjaan/:nama", (req, res) => {
  var nama = req.params.nama;
  conn.query(
    "select * from dataPekerjaan where nama ='" + nama + "'",
    (err, rows) => {
      res.json(rows);
    }
  );
});

app.get("/datariwayatpekerjaan/:nama", (req, res) => {
  var nama = req.params.nama;
  conn.query(
    "select * from dataRiwayatPekerjaan where nama ='" + nama + "'",
    (err, rows) => {
      res.json(rows);
    }
  );
});

app.get("/datasusunankeluarga/:nama", (req, res) => {
  var nama = req.params.nama;
  conn.query(
    "select * from dataSususanKeluarga where nama ='" + nama + "'",
    (err, rows) => {
      res.json(rows);
    }
  );
});

// fetch data pas foto untuk ditampilkan
app.get("/pasfoto/:nama", (req, res) => {
  var nama = req.params.nama;
  conn.query(
    "select * from pasFoto where nama ='" + nama + "'",
    (err, rows) => {
      res.json(rows);
    }
  );
});

app.post("/token", (req, res) => {
  var payload = req.body;
  var secret_key = "a31422";
  var expire = "1d";
  var token = jwt.sign(payload, secret_key, { expiresIn: expire });

  res.json({ token: token });
});

const checkAuth = (req, res, next) => {
  try {
    var secret_key = "a31422";
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, secret_key);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Auth failed" });
  }
};

app.post("/login", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  conn.query(
    "SELECT * from users where username = '" +
      username +
      "' and password = '" +
      password +
      "'",
    (err, rows) => {
      if (rows.length > 0) {
        var payload = {
          id: rows[0].id,
          username: rows[0].username,
        };
        var token = jwt.sign(payload, secret_key, { expiresIn: "2d" });
        res.status(200).json({
          id: rows[0].id,
          token: token,
        });
      } else {
        res.status(401).json({ message: "email & password ga sesuai" });
      }
    }
  );
});

// untuk post pasfoto
app.post("/pasfoto", (req, res) => {
  var nama = req.body.nama;
  var userimg = "http://192.168.0.112:8000/" + req.file.path;
  var query =
    "insert into pasFoto (nama, userimg)values ('" +
    nama +
    "','" +
    userimg +
    "')";
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

// untuk post data diri hal 1
app.post("/datadiri", (req, res) => {
  var nama = req.body.nama;
  var jenisKelamin = req.body.jenisKelamin;
  var status = req.body.status;
  var tempatLahir = req.body.tempatLahir;
  var tanggalLahir = req.body.tanggalLahir;
  var alamat = req.body.alamat;
  var nik = req.body.nik;
  var noHP = req.body.noHP;
  var namaAyah = req.body.namaAyah;
  var namaIbu = req.body.namaIbu;
  var alamatOrtu = req.body.alamatOrtu;
  var query =
    "insert into dataDiri (nama, jenisKelamin, status, tempatLahir, tanggalLahir, alamat, nik, noHP, namaAyah, namaIbu, alamatOrtu) values ('" +
    nama +
    "','" +
    jenisKelamin +
    "','" +
    status +
    "','" +
    tempatLahir +
    "','" +
    tanggalLahir +
    "','" +
    alamat +
    "','" +
    nik +
    "','" +
    noHP +
    "','" +
    namaAyah +
    "','" +
    namaIbu +
    "','" +
    alamatOrtu +
    "')";
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

//untuk post data pendidikan/hal 2
app.post("/datapendidikan", (req, res) => {
  var nama = req.body.nama;
  var namaTK = req.body.namaTK;
  var noIjazahTK = req.body.noIjazahTK;
  var namaSD = req.body.namaSD;
  var noIjazahSD = req.body.noIjazahSD;
  var namaSMP = req.body.namaSMP;
  var noIjazahSMP = req.body.noIjazahSMP;
  var namaSMA = req.body.namaSMA;
  var jurusanSMA = req.body.jurusanSMA;
  var noIjazahSMA = req.body.noIjazahSMA;
  var namaS1 = req.body.namaS1;
  var jurusanS1 = req.body.jurusanS1;
  var noIjazahS1 = req.body.noIjazahS1;
  var namaS2 = req.body.namaS2;
  var jurusanS2 = req.body.jurusanS2;
  var noIjazahS2 = req.body.noIjazahS2;
  var nonFormal1 = req.body.nonFormal1;
  var jenisNonFormal1 = req.body.jenisNonFormal1;
  var tempatNonFormal1 = req.body.tempatNonFormal1;
  var nonFormal2 = req.body.nonFormal2;
  var jenisNonFormal2 = req.body.jenisNonFormal2;
  var tempatNonFormal2 = req.body.tempatNonFormal2;
  var nonFormal3 = req.body.nonFormal3;
  var jenisNonFormal3 = req.body.jenisNonFormal3;
  var tempatNonFormal3 = req.body.tempatNonFormal3;
  var query =
    "insert into dataPendidikan (nama, namaTK, noIjazahTK, namaSD, noIjazahSD, namaSMP, noIjazahSMP, namaSMA, jurusanSMA, noIjazahSMA, namaS1, jurusanS1, noIjazahS1, namaS2, jurusanS2, noIjazahS2, nonFormal1, jenisNonFormal1, tempatNonFormal1, nonFormal2, jenisNonFormal2, tempatNonFormal2, nonFormal3, jenisNonFormal3, tempatNonFormal3) values ('" +
    nama +
    "','" +
    namaTK +
    "','" +
    noIjazahTK +
    "','" +
    namaSD +
    "','" +
    noIjazahSD +
    "','" +
    namaSMP +
    "','" +
    noIjazahSMP +
    "','" +
    namaSMA +
    "','" +
    jurusanSMA +
    "','" +
    noIjazahSMA +
    "','" +
    namaS1 +
    "','" +
    jurusanS1 +
    "','" +
    noIjazahS1 +
    "','" +
    namaS2 +
    "','" +
    jurusanS2 +
    "','" +
    noIjazahS2 +
    "','" +
    nonFormal1 +
    "','" +
    jenisNonFormal1 +
    "','" +
    tempatNonFormal1 +
    "','" +
    nonFormal2 +
    "','" +
    jenisNonFormal2 +
    "','" +
    tempatNonFormal2 +
    "','" +
    nonFormal3 +
    "','" +
    jenisNonFormal3 +
    "','" +
    tempatNonFormal3 +
    "')";
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

// untuk post data status pekerjaan sekarang
app.post("/datapekerjaan", (req, res) => {
  var noSkPertama = req.body.noSkPertama;
  var jabatan = req.body.jabatan;
  var statusPekerjaan = req.body.statusPekerjaan;
  var nama = req.body.nama;
  var query =
    "insert into dataPekerjaan (noSkPertama, jabatan, statusPekerjaan, nama) values ('" +
    noSkPertama +
    "','" +
    jabatan +
    "','" +
    statusPekerjaan +
    "','" +
    nama +
    "')";
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

// untuk post data riwayat pekerjaan
app.post("/datariwayatpekerjaan", (req, res) => {
  var nama = req.body.nama;
  var tahunPekerjaanE1 = req.body.tahunPekerjaanE1;
  var jabatanE1 = req.body.jabatanE1;
  var namaPerusahaanE1 = req.body.namaPerusahaanE1;
  var tahunPekerjaanE2 = req.body.tahunPekerjaanE2;
  var jabatanE2 = req.body.jabatanE2;
  var namaPerusahaanE2 = req.body.namaPerusahaanE2;
  var tahunPekerjaanE3 = req.body.tahunPekerjaanE3;
  var jabatanE3 = req.body.jabatanE3;
  var namaPerusahaanE3 = req.body.namaPerusahaanE3;
  var tahunPekerjaanE4 = req.body.tahunPekerjaanE4;
  var jabatanE4 = req.body.jabatanE4;
  var namaPerusahaanE4 = req.body.namaPerusahaanE4;
  var tahunPekerjaanE5 = req.body.tahunPekerjaanE5;
  var jabatanE5 = req.body.jabatanE5;
  var namaPerusahaanE5 = req.body.namaPerusahaanE5;
  var query =
    "insert into dataRiwayatPekerjaan (nama, tahunPekerjaanE1, jabatanE1, namaPerusahaanE1, tahunPekerjaanE2, jabatanE2, namaPerusahaanE2, tahunPekerjaanE3, jabatanE3, namaPerusahaanE3, tahunPekerjaanE4, jabatanE4, namaPerusahaanE4, tahunPekerjaanE5, jabatanE5, namaPerusahaanE5) values ('" +
    nama +
    "','" +
    tahunPekerjaanE1 +
    "','" +
    jabatanE1 +
    "','" +
    namaPerusahaanE1 +
    "','" +
    tahunPekerjaanE2 +
    "','" +
    jabatanE2 +
    "','" +
    namaPerusahaanE2 +
    "','" +
    tahunPekerjaanE3 +
    "','" +
    jabatanE3 +
    "','" +
    namaPerusahaanE3 +
    "','" +
    tahunPekerjaanE4 +
    "','" +
    jabatanE4 +
    "','" +
    namaPerusahaanE4 +
    "','" +
    tahunPekerjaanE5 +
    "','" +
    jabatanE5 +
    "','" +
    namaPerusahaanE5 +
    "')";
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

// untuk post data susunan keluarga
app.post("/datasusunankeluarga", (req, res) => {
  var nama = req.body.nama;
  var namaSuamiIstri = req.body.namaSuamiIstri;
  var tempatLahir = req.body.tempatLahir;
  var tanggalLahir = req.body.tanggalLahir;
  var tglMenikah = req.body.tglMenikah;
  var gereja = req.body.gereja;
  var alamatSI = req.body.alamatSI;
  var pekerjaanSI = req.body.pekerjaanSI;
  var anak1 = req.body.anak1;
  var ttlanak1 = req.body.ttlanak1;
  var anak2 = req.body.anak2;
  var ttlanak2 = req.body.ttlanak2;
  var anak3 = req.body.anak3;
  var ttlanak3 = req.body.ttlanak3;
  var anak4 = req.body.anak4;
  var ttlanak4 = req.body.ttlanak4;
  var anak5 = req.body.anak5;
  var ttlanak5 = req.body.ttlanak5;
  var query =
    "insert into dataSususanKeluarga (nama, namaSuamiIstri, tempatLahir, tanggalLahir, tglMenikah, gereja, alamatSI, pekerjaanSI, anak1, ttlanak1, anak2, ttlanak2, anak3, ttlanak3, anak4, ttlanak4, anak5, ttlanak5) values ('" +
    nama +
    "','" +
    namaSuamiIstri +
    "','" +
    tempatLahir +
    "','" +
    tanggalLahir +
    "','" +
    tglMenikah +
    "','" +
    gereja +
    "','" +
    alamatSI +
    "','" +
    pekerjaanSI +
    "','" +
    anak1 +
    "','" +
    ttlanak1 +
    "','" +
    anak2 +
    "','" +
    ttlanak2 +
    "','" +
    anak3 +
    "','" +
    ttlanak3 +
    "','" +
    anak4 +
    "','" +
    ttlanak4 +
    "','" +
    anak5 +
    "','" +
    ttlanak5 +
    "')";
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

//untuk hapus datadiri karyawan
app.delete("/datadiri/:nama", (req, res) => {
  var nama = req.params.nama;
  var query = "delete from dataDiri where nama='" + nama + "'";
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

//untuk hapus datapekerjaan karyawan
app.delete("/datapekerjaan/:nama", (req, res) => {
  var nama = req.params.nama;
  var query = "delete from dataPekerjaan where nama='" + nama + "'";
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

//untuk hapus datapendidikan karyawan
app.delete("/datapendidikan/:nama", (req, res) => {
  var nama = req.params.nama;
  var query = "delete from dataPendidikan where nama='" + nama + "'";
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

//untuk hapus datariwayatpekerjaan karyawan
app.delete("/datariwayatpekerjaan/:nama", (req, res) => {
  var nama = req.params.nama;
  var query = "delete from dataRiwayatPekerjaan where nama='" + nama + "'";
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

//untuk hapus datasusunankeluarga karyawan
app.delete("/datasusunankeluarga/:nama", (req, res) => {
  var nama = req.params.nama;
  var query = "delete from dataSususanKeluarga where nama='" + nama + "'";
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

//untuk mengganti status pekerjaan jadi non aktif
app.put("/datapekerjaan/:nama", (req, res) => {
  var nama = req.body.nama;
  var tglNonAktif = req.body.tglNonAktif;
  var disable = req.body.disable;
  var query =
    "update dataPekerjaan set statusPekerjaan='Non Aktif', tglNonAktif = '" +
    tglNonAktif +
    "', disable ='" +
    disable +
    "' WHERE dataPekerjaan.nama='" +
    nama +
    "'";
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

// edit pas foto
app.put("/pasfoto/:nama", (req, res) => {
  var nama = req.body.nama;
  var userimg = "http://localhost:8000/" + req.file.path;
  var query =
    "update pasFoto set userimg='" +
    userimg +
    "' where pasFoto.nama='" +
    nama +
    "'";
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

//edit datadiri karyawan
app.put("/datadiriid/:id", (req, res) => {
  var jenisKelamin = req.body.jenisKelamin;
  var status = req.body.status;
  var tempatLahir = req.body.tempatLahir;
  var tanggalLahir = req.body.tanggalLahir;
  var alamat = req.body.alamat;
  var nik = req.body.nik;
  var noHP = req.body.noHP;
  var namaAyah = req.body.namaAyah;
  var namaIbu = req.body.namaIbu;
  var alamatOrtu = req.body.alamatOrtu;
  var id = req.body.id;
  var query =
    "UPDATE dataDiri SET jenisKelamin = '" +
    jenisKelamin +
    "', status = '" +
    status +
    "', tempatLahir = '" +
    tempatLahir +
    "', tanggalLahir = '" +
    tanggalLahir +
    "', alamat = '" +
    alamat +
    "', nik = '" +
    nik +
    "', noHP = '" +
    noHP +
    "', namaAyah = '" +
    namaAyah +
    "', namaIbu = '" +
    namaIbu +
    "', alamatOrtu = '" +
    alamatOrtu +
    "' WHERE id = " +
    id;
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

app.put("/datapekerjaanid/:id", (req, res) => {
  var noSkPertama = req.body.noSkPertama;
  var jabatan = req.body.jabatan;
  var id = req.body.id;
  var query =
    "update dataPekerjaan set noSkPertama= '" +
    noSkPertama +
    "', jabatan= '" +
    jabatan +
    "' where id=" +
    id;
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

app.put("/datapendidikanid/:id", (req, res) => {
  var id = req.body.id;
  var namaTK = req.body.namaTK;
  var noIjazahTK = req.body.noIjazahTK;
  var namaSD = req.body.namaSD;
  var noIjazahSD = req.body.noIjazahSD;
  var namaSMP = req.body.namaSMP;
  var noIjazahSMP = req.body.noIjazahSMP;
  var namaSMA = req.body.namaSMA;
  var jurusanSMA = req.body.jurusanSMA;
  var noIjazahSMA = req.body.noIjazahSMA;
  var namaS1 = req.body.namaS1;
  var jurusanS1 = req.body.jurusanS1;
  var noIjazahS1 = req.body.noIjazahS1;
  var namaS2 = req.body.namaS2;
  var jurusanS2 = req.body.jurusanS2;
  var noIjazahS2 = req.body.noIjazahS2;
  var nonFormal1 = req.body.nonFormal1;
  var jenisNonFormal1 = req.body.jenisNonFormal1;
  var tempatNonFormal1 = req.body.tempatNonFormal1;
  var nonFormal2 = req.body.nonFormal2;
  var jenisNonFormal2 = req.body.jenisNonFormal2;
  var tempatNonFormal2 = req.body.tempatNonFormal2;
  var nonFormal3 = req.body.nonFormal3;
  var jenisNonFormal3 = req.body.jenisNonFormal3;
  var tempatNonFormal3 = req.body.tempatNonFormal3;
  var query =
    "update dataPendidikan set namaTK= '" +
    namaTK +
    "', noIjazahTK= '" +
    noIjazahTK +
    "', namaSD= '" +
    namaSD +
    "', noIjazahSD ='" +
    noIjazahSD +
    "', namaSMP ='" +
    namaSMP +
    "', noIjazahSMP ='" +
    noIjazahSMP +
    "', namaSMA ='" +
    namaSMA +
    "', jurusanSMA ='" +
    jurusanSMA +
    "', noIjazahSMA ='" +
    noIjazahSMA +
    "', namaS1 ='" +
    namaS1 +
    "', jurusanS1 ='" +
    jurusanS1 +
    "', noIjazahS1= '" +
    noIjazahS1 +
    "', namaS2= '" +
    namaS2 +
    "', jurusanS2= '" +
    jurusanS2 +
    "', noIjazahS2= '" +
    noIjazahS2 +
    "', nonFormal1= '" +
    nonFormal1 +
    "', jenisNonFormal1= '" +
    jenisNonFormal1 +
    "', tempatNonFormal1= '" +
    tempatNonFormal1 +
    "', nonFormal2= '" +
    nonFormal2 +
    "', jenisNonFormal2= '" +
    jenisNonFormal2 +
    "', tempatNonFormal2= '" +
    tempatNonFormal2 +
    "', nonFormal3= '" +
    nonFormal3 +
    "', jenisNonFormal3= '" +
    jenisNonFormal3 +
    "', tempatNonFormal3= '" +
    tempatNonFormal3 +
    "' where id=" +
    id;
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

app.put("/datariwayatpekerjaanid/:id", (req, res) => {
  var tahunPekerjaanE1 = req.body.tahunPekerjaanE1;
  var jabatanE1 = req.body.jabatanE1;
  var namaPerusahaanE1 = req.body.namaPerusahaanE1;
  var tahunPekerjaanE2 = req.body.tahunPekerjaanE2;
  var jabatanE2 = req.body.jabatanE2;
  var namaPerusahaanE2 = req.body.namaPerusahaanE2;
  var tahunPekerjaanE3 = req.body.tahunPekerjaanE3;
  var jabatanE3 = req.body.jabatanE3;
  var namaPerusahaanE3 = req.body.namaPerusahaanE3;
  var tahunPekerjaanE4 = req.body.tahunPekerjaanE4;
  var jabatanE4 = req.body.jabatanE4;
  var namaPerusahaanE4 = req.body.namaPerusahaanE4;
  var tahunPekerjaanE5 = req.body.tahunPekerjaanE5;
  var jabatanE5 = req.body.jabatanE5;
  var namaPerusahaanE5 = req.body.namaPerusahaanE5;
  var id = req.body.id;
  var query =
    "update dataRiwayatPekerjaan set tahunPekerjaanE1= '" +
    tahunPekerjaanE1 +
    "', jabatanE1= '" +
    jabatanE1 +
    "', namaPerusahaanE1= '" +
    namaPerusahaanE1 +
    "', tahunPekerjaanE2= '" +
    tahunPekerjaanE2 +
    "', jabatanE2= '" +
    jabatanE2 +
    "', namaPerusahaanE2= '" +
    namaPerusahaanE2 +
    "', tahunPekerjaanE3= '" +
    tahunPekerjaanE3 +
    "', jabatanE3= '" +
    jabatanE3 +
    "', namaPerusahaanE3= '" +
    namaPerusahaanE3 +
    "', tahunPekerjaanE4= '" +
    tahunPekerjaanE4 +
    "', jabatanE4= '" +
    jabatanE4 +
    "', namaPerusahaanE4= '" +
    namaPerusahaanE4 +
    "', tahunPekerjaanE5= '" +
    tahunPekerjaanE5 +
    "', jabatanE5= '" +
    jabatanE5 +
    "', namaPerusahaanE5= '" +
    namaPerusahaanE5 +
    "' where id=" +
    id;
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

app.put("/datasusunankeluargaid/:id", (req, res) => {
  var namaSuamiIstri = req.body.namaSuamiIstri;
  var tempatLahir = req.body.tempatLahir;
  var tanggalLahir = req.body.tanggalLahir;
  var tglMenikah = req.body.tglMenikah;
  var gereja = req.body.gereja;
  var alamatSI = req.body.alamatSI;
  var pekerjaanSI = req.body.pekerjaanSI;
  var anak1 = req.body.anak1;
  var ttlanak1 = req.body.ttlanak1;
  var anak2 = req.body.anak2;
  var ttlanak2 = req.body.ttlanak2;
  var anak3 = req.body.anak3;
  var ttlanak3 = req.body.ttlanak3;
  var anak4 = req.body.anak4;
  var ttlanak4 = req.body.ttlanak4;
  var anak5 = req.body.anak5;
  var ttlanak5 = req.body.ttlanak5;
  var id = req.body.id;
  var query =
    "update dataSususanKeluarga set namaSuamiIstri= '" +
    namaSuamiIstri +
    "', tempatLahir= '" +
    tempatLahir +
    "', tanggalLahir= '" +
    tanggalLahir +
    "', tglMenikah= '" +
    tglMenikah +
    "', gereja= '" +
    gereja +
    "', alamatSI= '" +
    alamatSI +
    "', pekerjaanSI= '" +
    pekerjaanSI +
    "', anak1= '" +
    anak1 +
    "', ttlanak1= '" +
    ttlanak1 +
    "', anak2= '" +
    anak2 +
    "', ttlanak2= '" +
    ttlanak2 +
    "', anak3= '" +
    anak3 +
    "', ttlanak3= '" +
    ttlanak3 +
    "', anak4= '" +
    anak4 +
    "', ttlanak4= '" +
    ttlanak4 +
    "', anak5= '" +
    anak5 +
    "', ttlanak5= '" +
    ttlanak5 +
    "' where id=" +
    id;
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});

http.createServer(app).listen(8000, () => {
  console.log("Server is running on port 8000");
});
