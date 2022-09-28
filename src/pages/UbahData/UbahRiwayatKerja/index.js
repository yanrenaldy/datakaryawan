import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../utils/constants";
import Swal from "sweetalert2";
import { Grid, TextField, Button } from "@mui/material";

function UbahRiwayatKerja() {
  const navigate = useNavigate();
  const location = useLocation();

  const [dataRiwayatKerja, setdataRiwayatKerja] = useState({
    nama: location.state.nama,
    tahunPekerjaanE1: location.state.tahunPekerjaanE1,
    jabatanE1: location.state.jabatanE1,
    namaPerusahaanE1: location.state.namaPerusahaanE1,
    tahunPekerjaanE2: location.state.tahunPekerjaanE2,
    jabatanE2: location.state.jabatanE2,
    namaPerusahaanE2: location.state.namaPerusahaanE2,
    tahunPekerjaanE3: location.state.tahunPekerjaanE3,
    jabatanE3: location.state.jabatanE3,
    namaPerusahaanE3: location.state.namaPerusahaanE3,
    tahunPekerjaanE4: location.state.tahunPekerjaanE4,
    jabatanE4: location.state.jabatanE4,
    namaPerusahaanE4: location.state.namaPerusahaanE4,
    tahunPekerjaanE5: location.state.tahunPekerjaanE5,
    jabatanE5: location.state.jabatanE5,
    namaPerusahaanE5: location.state.namaPerusahaanE5,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setdataRiwayatKerja((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      tahunPekerjaanE1: dataRiwayatKerja.tahunPekerjaanE1,
      jabatanE1: dataRiwayatKerja.jabatanE1,
      namaPerusahaanE1: dataRiwayatKerja.namaPerusahaanE1,
      tahunPekerjaanE2: dataRiwayatKerja.tahunPekerjaanE2,
      jabatanE2: dataRiwayatKerja.jabatanE2,
      namaPerusahaanE2: dataRiwayatKerja.namaPerusahaanE2,
      tahunPekerjaanE3: dataRiwayatKerja.tahunPekerjaanE3,
      jabatanE3: dataRiwayatKerja.jabatanE3,
      namaPerusahaanE3: dataRiwayatKerja.namaPerusahaanE3,
      tahunPekerjaanE4: dataRiwayatKerja.tahunPekerjaanE4,
      jabatanE4: dataRiwayatKerja.jabatanE4,
      namaPerusahaanE4: dataRiwayatKerja.namaPerusahaanE4,
      tahunPekerjaanE5: dataRiwayatKerja.tahunPekerjaanE5,
      jabatanE5: dataRiwayatKerja.jabatanE5,
      namaPerusahaanE5: dataRiwayatKerja.namaPerusahaanE5,
      id: location.state.id,
    };

    axios
      .put(API_URL + "datariwayatpekerjaanid/" + location.state.id, data)
      .then((res) => {
        Swal.fire({
          title: "Success!",
          text: "Berhasil mengubah data!",
          icon: "success",
          showConfirmButton: false,
          timer: 1250,
        }).then((res) => {
          navigate(-1);
        });
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
          <h5>Ubah Data Riwayat Pekerjaan {location.state.nama}</h5>
        </Col>
      </Row>

      <div style={{ padding: "15px" }}>
        <form onSubmit={onSubmit}>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item sm={4} xs={12}>
              <TextField
                id="tahunPekerjaanE1"
                name="tahunPekerjaanE1"
                label="Tahun"
                value={dataRiwayatKerja.tahunPekerjaanE1}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 100 }}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="jabatanE1"
                name="jabatanE1"
                label="Jabatan"
                value={dataRiwayatKerja.jabatanE1}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 100 }}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="namaPerusahaanE1"
                name="namaPerusahaanE1"
                label="Nama Perusahaan"
                value={dataRiwayatKerja.namaPerusahaanE1}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 200 }}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="tahunPekerjaanE2"
                name="tahunPekerjaanE2"
                label="Tahun"
                value={dataRiwayatKerja.tahunPekerjaanE2}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 100 }}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="jabatanE2"
                name="jabatanE2"
                label="Jabatan"
                value={dataRiwayatKerja.jabatanE2}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 100 }}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="namaPerusahaanE2"
                name="namaPerusahaanE2"
                label="Nama Perusahaan"
                value={dataRiwayatKerja.namaPerusahaanE2}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 200 }}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="tahunPekerjaanE3"
                name="tahunPekerjaanE3"
                label="Tahun"
                value={dataRiwayatKerja.tahunPekerjaanE3}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 100 }}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="jabatanE3"
                name="jabatanE3"
                label="Jabatan"
                value={dataRiwayatKerja.jabatanE3}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 100 }}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="namaPerusahaanE3"
                name="namaPerusahaanE3"
                label="Nama Perusahaan"
                value={dataRiwayatKerja.namaPerusahaanE3}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 200 }}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="tahunPekerjaanE4"
                name="tahunPekerjaanE4"
                label="Tahun"
                value={dataRiwayatKerja.tahunPekerjaanE4}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 100 }}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="jabatanE4"
                name="jabatanE4"
                label="Jabatan"
                value={dataRiwayatKerja.jabatanE4}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 100 }}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="namaPerusahaanE4"
                name="namaPerusahaanE4"
                label="Nama Perusahaan"
                value={dataRiwayatKerja.namaPerusahaanE4}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 200 }}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="tahunPekerjaanE5"
                name="tahunPekerjaanE5"
                label="Tahun"
                value={dataRiwayatKerja.tahunPekerjaanE5}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 100 }}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="jabatanE5"
                name="jabatanE5"
                label="Jabatan"
                value={dataRiwayatKerja.jabatanE5}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 100 }}
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="namaPerusahaanE5"
                name="namaPerusahaanE5"
                label="Nama Perusahaan"
                value={dataRiwayatKerja.namaPerusahaanE5}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 200 }}
              />
            </Grid>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="mb-3 mt-4 ms-3"
            >
              Simpan
            </Button>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default UbahRiwayatKerja;
