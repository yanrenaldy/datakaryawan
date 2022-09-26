import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Grid,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function TambahDataPekerjaan() {
  const navigate = useNavigate();
  const location = useLocation();

  const dataDiri = {
    nama: location.state.dataDiri.nama,
    jenisKelamin: location.state.dataDiri.jenisKelamin,
    status: location.state.dataDiri.status,
    tempatLahir: location.state.dataDiri.tempatLahir,
    tanggalLahir: location.state.dataDiri.tanggalLahir,
    alamat: location.state.dataDiri.alamat,
    nik: location.state.dataDiri.nik,
    noHP: location.state.dataDiri.noHP,
    namaAyah: location.state.dataDiri.namaAyah,
    namaIbu: location.state.dataDiri.namaIbu,
    alamatOrtu: location.state.dataDiri.alamatOrtu,
  };

  const dataPendidikan = {
    nama: location.state.dataPendidikan.nama,
    namaTK: location.state.dataPendidikan.namaTK,
    noIjazahTK: location.state.dataPendidikan.noIjazahTK,
    namaSD: location.state.dataPendidikan.namaSD,
    noIjazahSD: location.state.dataPendidikan.noIjazahSD,
    namaSMP: location.state.dataPendidikan.namaSMP,
    noIjazahSMP: location.state.dataPendidikan.noIjazahSMP,
    namaSMA: location.state.dataPendidikan.namaSMA,
    jurusanSMA: location.state.dataPendidikan.jurusanSMA,
    noIjazahSMA: location.state.dataPendidikan.noIjazahSMA,
    namaS1: location.state.dataPendidikan.namaS1,
    jurusanS1: location.state.dataPendidikan.jurusanS1,
    noIjazahS1: location.state.dataPendidikan.noIjazahS1,
    namaS2: location.state.dataPendidikan.namaS2,
    jurusanS2: location.state.dataPendidikan.jurusanS2,
    noIjazahS2: location.state.dataPendidikan.noIjazahS2,
    nonFormal1: location.state.dataPendidikan.nonFormal1,
    jenisNonFormal1: location.state.dataPendidikan.jenisNonFormal1,
    tempatNonFormal1: location.state.dataPendidikan.tempatNonFormal1,
    nonFormal2: location.state.dataPendidikan.nonFormal2,
    jenisNonFormal2: location.state.dataPendidikan.jenisNonFormal2,
    tempatNonFormal2: location.state.dataPendidikan.tempatNonFormal2,
    nonFormal3: location.state.dataPendidikan.nonFormal3,
    jenisNonFormal3: location.state.dataPendidikan.jenisNonFormal3,
    tempatNonFormal3: location.state.dataPendidikan.tempatNonFormal3,
  };

  const [dataPekerjaan, setdataPekerjaan] = useState({
    nama: "",
    noSkPertama: "",
    jabatan: "",
    tahunPekerjaanE1: "",
    jabatanE1: "",
    statusPekerjaan: "Aktif",
    namaPerusahaanE1: "",
    tahunPekerjaanE2: "",
    jabatanE2: "",
    namaPerusahaanE2: "",
    tahunPekerjaanE3: "",
    jabatanE3: "",
    namaPerusahaanE3: "",
    tahunPekerjaanE4: "",
    jabatanE4: "",
    namaPerusahaanE4: "",
    tahunPekerjaanE5: "",
    jabatanE5: "",
    namaPerusahaanE5: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setdataPekerjaan((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/tambahdatakeluarga", {
      state: {
        dataDiri: dataDiri,
        dataPendidikan: dataPendidikan,
        dataPekerjaan: dataPekerjaan,
      },
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
              <h5 className="mt-4">Data Pekerjaan</h5>
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="noSkPertama"
                name="noSkPertama"
                label="No SK Pertama"
                fullWidth
                inputProps={{ maxLength: 30 }}
                variant="standard"
                value={dataPekerjaan.noSkPertama}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={6} xs={12} style={{ marginTop: "-7px" }}>
              <InputLabel id="jabatan-label">Jabatan</InputLabel>
              <Select
                labelId="jabatan-label"
                id="jabatan"
                name="jabatan"
                fullWidth
                variant="standard"
                value={dataPekerjaan.jabatan}
                onChange={onChange}
              >
                <MenuItem value="Staff">Staff</MenuItem>
                <MenuItem value="Guru TK">Guru TK</MenuItem>
                <MenuItem value="Guru SD Reguler">Guru SD Reguler</MenuItem>
                <MenuItem value="Guru SD Plus">Guru SD Plus</MenuItem>
                <MenuItem value="Guru SMP">Guru SMP</MenuItem>
                <MenuItem value="Guru SMA">Guru SMA</MenuItem>
              </Select>
            </Grid>

            <Grid item sm={12} xs={12} className="mt-2">
              <h5>Riwayat Pekerjaan</h5>
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="tahunPekerjaanE1"
                name="tahunPekerjaanE1"
                label="Tahun"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataPekerjaan.tahunPekerjaanE1}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="jabatanE1"
                name="jabatanE1"
                label="Jabatan"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataPekerjaan.jabatanE1}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="namaPerusahaanE1"
                name="namaPerusahaanE1"
                label="Nama Perusahaan"
                fullWidth
                inputProps={{ maxLength: 200 }}
                variant="standard"
                value={dataPekerjaan.namaPerusahaanE1}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="tahunPekerjaanE2"
                name="tahunPekerjaanE2"
                label="Tahun"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataPekerjaan.tahunPekerjaanE2}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="jabatanE2"
                name="jabatanE2"
                label="Jabatan"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataPekerjaan.jabatanE2}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="namaPerusahaanE2"
                name="namaPerusahaanE2"
                label="Nama Perusahaan"
                fullWidth
                inputProps={{ maxLength: 200 }}
                variant="standard"
                value={dataPekerjaan.namaPerusahaanE2}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="tahunPekerjaanE3"
                name="tahunPekerjaanE3"
                label="Tahun"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataPekerjaan.tahunPekerjaanE3}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="jabatanE3"
                name="jabatanE3"
                label="Jabatan"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataPekerjaan.jabatanE3}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="namaPerusahaanE3"
                name="namaPerusahaanE3"
                label="Nama Perusahaan"
                fullWidth
                inputProps={{ maxLength: 200 }}
                variant="standard"
                value={dataPekerjaan.namaPerusahaanE3}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="tahunPekerjaanE4"
                name="tahunPekerjaanE4"
                label="Tahun"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataPekerjaan.tahunPekerjaanE4}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="jabatanE4"
                name="jabatanE4"
                label="Jabatan"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataPekerjaan.jabatanE4}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="namaPerusahaanE4"
                name="namaPerusahaanE4"
                label="Nama Perusahaan"
                fullWidth
                inputProps={{ maxLength: 200 }}
                variant="standard"
                value={dataPekerjaan.namaPerusahaanE4}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="tahunPekerjaanE5"
                name="tahunPekerjaanE5"
                label="Tahun"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataPekerjaan.tahunPekerjaanE5}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="jabatanE5"
                name="jabatanE5"
                label="Jabatan"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataPekerjaan.jabatanE5}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="namaPerusahaanE5"
                name="namaPerusahaanE5"
                label="Nama Perusahaan"
                fullWidth
                inputProps={{ maxLength: 200 }}
                variant="standard"
                value={dataPekerjaan.namaPerusahaanE5}
                onChange={onChange}
              />
            </Grid>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="mb-3 mt-3"
            >
              Selanjutnya
            </Button>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default TambahDataPekerjaan;
