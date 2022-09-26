import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid, TextField, Button } from "@mui/material";

function TambahDataPendidikan() {
  const navigate = useNavigate();
  const location = useLocation();

  const [dataDiri, setdataDiri] = useState({
    nama: location.state.nama,
    jenisKelamin: location.state.jenisKelamin,
    status: location.state.status,
    tempatLahir: location.state.tempatLahir,
    tanggalLahir: location.state.tanggalLahir,
    alamat: location.state.alamat,
    nik: location.state.nik,
    noHP: location.state.noHP,
    namaAyah: location.state.namaAyah,
    namaIbu: location.state.namaIbu,
    alamatOrtu: location.state.alamatOrtu,
  });

  const [dataPendidikan, setdataPendidikan] = useState({
    nama: "",
    namaTK: "",
    noIjazahTK: "",
    namaSD: "",
    noIjazahSD: "",
    namaSMP: "",
    noIjazahSMP: "",
    namaSMA: "",
    jurusanSMA: "",
    noIjazahSMA: "",
    namaS1: "",
    jurusanS1: "",
    noIjazahS1: "",
    namaS2: "",
    jurusanS2: "",
    noIjazahS2: "",
    nonFormal1: "",
    jenisNonFormal1: "",
    tempatNonFormal1: "",
    nonFormal2: "",
    jenisNonFormal2: "",
    tempatNonFormal2: "",
    nonFormal3: "",
    jenisNonFormal3: "",
    tempatNonFormal3: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setdataPendidikan((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/tambahdatapekerjaan", {
      state: { dataDiri: dataDiri, dataPendidikan: dataPendidikan },
    });
  };

  return (
    <div>
      <Row
        style={{
          paddingTop: "25px",
          marginLeft: "-20px",
          paddingLeft: "15px",
          paddingBottom: "20px",
          backgroundColor: "aqua",
        }}
      >
        <Col xs={1}>
          <FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)} />
        </Col>
        <Col xs={10}>
          <h5>Tambah Data</h5>
        </Col>
      </Row>

      <div style={{ padding: "15px" }}>
        <form onSubmit={onSubmit}>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item sm={12} xs={12}>
              <h5 className="mt-4">Data Pendidikan</h5>
              <h6>Formal</h6>
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="namaTK"
                name="namaTK"
                label="Nama Sekolah TK"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataPendidikan.namaTK}
                onChange={onChange}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                id="noIjazahTK"
                name="noIjazahTK"
                label="No Ijazah"
                fullWidth
                inputProps={{ maxLength: 50 }}
                variant="standard"
                value={dataPendidikan.noIjazahTK}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="namaSD"
                name="namaSD"
                label="Nama Sekolah SD"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataPendidikan.namaSD}
                onChange={onChange}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                id="noIjazahSD"
                name="noIjazahSD"
                label="No Ijazah"
                fullWidth
                inputProps={{ maxLength: 50 }}
                variant="standard"
                value={dataPendidikan.noIjazahSD}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="namaSMP"
                name="namaSMP"
                label="Nama Sekolah SMP"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataPendidikan.namaSMP}
                onChange={onChange}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                id="noIjazahSMP"
                name="noIjazahSMP"
                label="No Ijazah"
                fullWidth
                inputProps={{ maxLength: 50 }}
                variant="standard"
                value={dataPendidikan.noIjazahSMP}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="namaSMA"
                name="namaSMA"
                label="Nama Sekolah SMA"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataPendidikan.namaSMA}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="jurusanSMA"
                name="jurusanSMA"
                label="Jurusan"
                fullWidth
                inputProps={{ maxLength: 30 }}
                variant="standard"
                value={dataPendidikan.jurusanSMA}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="noIjazahSMA"
                name="noIjazahSMA"
                label="No Ijazah"
                fullWidth
                inputProps={{ maxLength: 50 }}
                variant="standard"
                value={dataPendidikan.noIjazahSMA}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="namaS1"
                name="namaS1"
                label="Nama Universitas S1"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataPendidikan.namaS1}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="jurusanS1"
                name="jurusanS1"
                label="Jurusan"
                fullWidth
                inputProps={{ maxLength: 30 }}
                variant="standard"
                value={dataPendidikan.jurusanS1}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="noIjazahS1"
                name="noIjazahS1"
                label="No Ijazah S1"
                fullWidth
                inputProps={{ maxLength: 50 }}
                variant="standard"
                value={dataPendidikan.noIjazahS1}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="namaS2"
                name="namaS2"
                label="Nama Universitas S2"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataPendidikan.namaS2}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="jurusanS2"
                name="jurusanS2"
                label="Jurusan"
                fullWidth
                inputProps={{ maxLength: 50 }}
                variant="standard"
                value={dataPendidikan.jurusanS2}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="noIjazahS2"
                name="noIjazahS2"
                label="No Ijazah S2"
                fullWidth
                inputProps={{ maxLength: 50 }}
                variant="standard"
                value={dataPendidikan.noIjazahS2}
                onChange={onChange}
              />
            </Grid>
            <Grid item sm={12} xs={12}>
              <h6>Non Formal (Jika ada)</h6>
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="nonFormal1"
                name="nonFormal1"
                label="Tahun"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataPendidikan.nonFormal1}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="jenisNonFormal1"
                name="jenisNonFormal1"
                label="Jenis Kegiatan"
                fullWidth
                inputProps={{ maxLength: 200 }}
                variant="standard"
                value={dataPendidikan.jenisNonFormal1}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="tempatNonFormal1"
                name="tempatNonFormal1"
                label="Tempat Kegiatan"
                fullWidth
                inputProps={{ maxLength: 200 }}
                variant="standard"
                value={dataPendidikan.tempatNonFormal1}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="nonFormal2"
                name="nonFormal2"
                label="Tahun"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataPendidikan.nonFormal2}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="jenisNonFormal2"
                name="jenisNonFormal2"
                label="Jenis Kegiatan"
                fullWidth
                inputProps={{ maxLength: 200 }}
                variant="standard"
                value={dataPendidikan.jenisNonFormal2}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="tempatNonFormal2"
                name="tempatNonFormal2"
                label="Tempat Kegiatan"
                fullWidth
                inputProps={{ maxLength: 200 }}
                variant="standard"
                value={dataPendidikan.tempatNonFormal2}
                onChange={onChange}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <TextField
                id="nonFormal3"
                name="nonFormal3"
                label="Tahun"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataPendidikan.nonFormal3}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="jenisNonFormal3"
                name="jenisNonFormal3"
                label="Jenis Kegiatan"
                fullWidth
                inputProps={{ maxLength: 200 }}
                variant="standard"
                value={dataPendidikan.jenisNonFormal3}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="tempatNonFormal3"
                name="tempatNonFormal3"
                label="Tempat Kegiatan"
                fullWidth
                inputProps={{ maxLength: 200 }}
                variant="standard"
                value={dataPendidikan.tempatNonFormal3}
                onChange={onChange}
              />
            </Grid>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="mb-3 mt-4"
            >
              Selanjutnya
            </Button>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default TambahDataPendidikan;
