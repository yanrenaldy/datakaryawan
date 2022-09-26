import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid, TextField, Button } from "@mui/material";
import axios from "axios";
import { API_URL } from "../../../utils/constants";
import Swal from "sweetalert2";

function TambahDataSusunanKeluarga() {
  const navigate = useNavigate();
  const location = useLocation();

  const [dataKeluarga, setdataKeluarga] = useState({
    nama: "",
    namaSuamiIstri: "",
    tempatLahir: "",
    tanggalLahir: "",
    tglMenikah: "",
    gereja: "",
    alamatSI: "",
    pekerjaanSI: "",
    anak1: "",
    ttlanak1: "",
    anak2: "",
    ttlanak2: "",
    anak3: "",
    ttlanak3: "",
    anak4: "",
    ttlanak4: "",
    anak5: "",
    ttlanak5: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setdataKeluarga((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const upload1 = new FormData();
    upload1.append("nama", location.state.dataDiri.nama);
    upload1.append("jenisKelamin", location.state.dataDiri.jenisKelamin);
    upload1.append("status", location.state.dataDiri.status);
    upload1.append("tempatLahir", location.state.dataDiri.tempatLahir);
    upload1.append("tanggalLahir", location.state.dataDiri.tanggalLahir);
    upload1.append("alamat", location.state.dataDiri.alamat);
    upload1.append("nik", location.state.dataDiri.nik);
    upload1.append("noHP", location.state.dataDiri.noHP);
    upload1.append("namaAyah", location.state.dataDiri.namaAyah);
    upload1.append("namaIbu", location.state.dataDiri.namaIbu);
    upload1.append("alamatOrtu", location.state.dataDiri.alamatOrtu);

    const upload2 = {
      nama: location.state.dataDiri.nama,
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

    const upload3 = {
      nama: location.state.dataDiri.nama,
      noSkPertama: location.state.dataPekerjaan.noSkPertama,
      jabatan: location.state.dataPekerjaan.jabatan,
      statusPekerjaan: location.state.dataPekerjaan.statusPekerjaan,
    };

    const upload4 = {
      nama: location.state.dataDiri.nama,
      tahunPekerjaanE1: location.state.dataPekerjaan.tahunPekerjaanE1,
      jabatanE1: location.state.dataPekerjaan.jabatanE1,
      namaPerusahaanE1: location.state.dataPekerjaan.namaPerusahaanE1,
      tahunPekerjaanE2: location.state.dataPekerjaan.tahunPekerjaanE2,
      jabatanE2: location.state.dataPekerjaan.jabatanE2,
      namaPerusahaanE2: location.state.dataPekerjaan.namaPerusahaanE2,
      tahunPekerjaanE3: location.state.dataPekerjaan.tahunPekerjaanE3,
      jabatanE3: location.state.dataPekerjaan.jabatanE3,
      namaPerusahaanE3: location.state.dataPekerjaan.namaPerusahaanE3,
      tahunPekerjaanE4: location.state.dataPekerjaan.tahunPekerjaanE4,
      jabatanE4: location.state.dataPekerjaan.jabatanE4,
      namaPerusahaanE4: location.state.dataPekerjaan.namaPerusahaanE4,
      tahunPekerjaanE5: location.state.dataPekerjaan.tahunPekerjaanE5,
      jabatanE5: location.state.dataPekerjaan.jabatanE5,
      namaPerusahaanE5: location.state.dataPekerjaan.namaPerusahaanE5,
    };

    const upload5 = {
      nama: location.state.dataDiri.nama,
      namaSuamiIstri: dataKeluarga.namaSuamiIstri,
      tempatLahir: dataKeluarga.tempatLahir,
      tanggalLahir: dataKeluarga.tanggalLahir,
      tglMenikah: dataKeluarga.tglMenikah,
      gereja: dataKeluarga.gereja,
      alamatSI: dataKeluarga.alamatSI,
      pekerjaanSI: dataKeluarga.pekerjaanSI,
      anak1: dataKeluarga.anak1,
      ttlanak1: dataKeluarga.ttlanak1,
      anak2: dataKeluarga.anak2,
      ttlanak2: dataKeluarga.ttlanak2,
      anak3: dataKeluarga.anak3,
      ttlanak3: dataKeluarga.ttlanak3,
      anak4: dataKeluarga.anak4,
      ttlanak4: dataKeluarga.ttlanak4,
      anak5: dataKeluarga.anak5,
      ttlanak5: dataKeluarga.ttlanak5,
    };

    axios
      .post(API_URL + "datadiri", upload1, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .catch((error) => {
        console.log("error " + error);
      });

    axios.post(API_URL + "datapendidikan", upload2).catch((error) => {
      console.log("error" + error);
    });

    axios.post(API_URL + "datapekerjaan", upload3).catch((error) => {
      console.log("error " + error);
    });

    axios.post(API_URL + "datariwayatpekerjaan", upload4).catch((error) => {
      console.log("error" + error);
    });

    axios
      .post(API_URL + "datasusunankeluarga", upload5)
      .then((res) => {
        Swal.fire({
          title: "Success!",
          text: "Berhasil menambahkan data baru!",
          icon: "success",
          showConfirmButton: false,
          timer: 1250,
        }).then((res) => {
          navigate("/datakaryawan");
        });
      })
      .catch((error) => {
        console.log("error" + error);
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
              <h5 className="mt-4">Data Keluarga</h5>
            </Grid>

            <Grid item sm={12} xs={12}>
              <TextField
                id="namaSuamiIstri"
                name="namaSuamiIstri"
                label="Nama Suami/Istri"
                fullWidth
                inputProps={{ maxLength: 200 }}
                variant="standard"
                value={dataKeluarga.namaSuamiIstri}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="tempatLahir"
                name="tempatLahir"
                label="Tempat Lahir"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataKeluarga.tempatLahir}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="tanggalLahir"
                label="Tanggal Lahir"
                name="tanggalLahir"
                type="date"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                value={dataKeluarga.tanggalLahir}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="tglMenikah"
                label="Tanggal Menikah"
                name="tglMenikah"
                type="date"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                value={dataKeluarga.tglMenikah}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="gereja"
                name="gereja"
                label="Gereja"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataKeluarga.gereja}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={12} xs={12}>
              <TextField
                id="pekerjaanSI"
                name="pekerjaanSI"
                label="Pekerjaan Suami/Istri"
                fullWidth
                inputProps={{ maxLength: 300 }}
                variant="standard"
                value={dataKeluarga.pekerjaanSI}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={12} xs={12}>
              <TextField
                id="alamatSI"
                name="alamatSI"
                label="Alamat"
                fullWidth
                multiline
                rows={3}
                inputProps={{ maxLength: 300 }}
                variant="standard"
                value={dataKeluarga.alamatSI}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={12} xs={12}>
              <h6 className="mt-2">Anak</h6>
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="anak1"
                name="anak1"
                label="Nama Anak"
                fullWidth
                inputProps={{ maxLength: 200 }}
                variant="standard"
                value={dataKeluarga.anak1}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="ttlanak1"
                name="ttlanak1"
                label="Tanggal Lahir"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataKeluarga.ttlanak1}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="anak2"
                name="anak2"
                label="Nama Anak"
                fullWidth
                inputProps={{ maxLength: 200 }}
                variant="standard"
                value={dataKeluarga.anak2}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="ttlanak2"
                name="ttlanak2"
                label="Tanggal Lahir"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataKeluarga.ttlanak2}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="anak3"
                name="anak3"
                label="Nama Anak"
                fullWidth
                inputProps={{ maxLength: 200 }}
                variant="standard"
                value={dataKeluarga.anak3}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="ttlanak3"
                name="ttlanak3"
                label="Tanggal Lahir"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataKeluarga.ttlanak3}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="anak4"
                name="anak4"
                label="Nama Anak"
                fullWidth
                inputProps={{ maxLength: 200 }}
                variant="standard"
                value={dataKeluarga.anak4}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="ttlanak4"
                name="ttlanak4"
                label="Tanggal Lahir"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataKeluarga.ttlanak4}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="anak5"
                name="anak5"
                label="Nama Anak"
                fullWidth
                inputProps={{ maxLength: 200 }}
                variant="standard"
                value={dataKeluarga.anak5}
                onChange={onChange}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="ttlanak5"
                name="ttlanak5"
                label="Tanggal Lahir"
                fullWidth
                inputProps={{ maxLength: 100 }}
                variant="standard"
                value={dataKeluarga.ttlanak5}
                onChange={onChange}
              />
            </Grid>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="mb-3 mt-3"
            >
              Simpan
            </Button>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default TambahDataSusunanKeluarga;
