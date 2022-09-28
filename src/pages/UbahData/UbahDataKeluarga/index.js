import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../utils/constants";
import Swal from "sweetalert2";
import { Grid, TextField, Button } from "@mui/material";

function UbahDataKeluarga() {
  const location = useLocation();
  const navigate = useNavigate();

  const [dataKeluarga, setdataKeluarga] = useState({
    nama: location.state.nama,
    namaSuamiIstri: location.state.namaSuamiIstri,
    tempatLahir: location.state.tempatLahir,
    tanggalLahir: location.state.tanggalLahir,
    tglMenikah: location.state.tglMenikah,
    gereja: location.state.gereja,
    alamatSI: location.state.alamatSI,
    pekerjaanSI: location.state.pekerjaanSI,
    anak1: location.state.anak1,
    ttlanak1: location.state.ttlanak1,
    anak2: location.state.anak2,
    ttlanak2: location.state.ttlanak2,
    anak3: location.state.anak3,
    ttlanak3: location.state.ttlanak3,
    anak4: location.state.anak4,
    ttlanak4: location.state.ttlanak4,
    anak5: location.state.anak5,
    ttlanak5: location.state.ttlanak5,
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
    const data = {
      namaSuamiIstri: dataKeluarga.namaSuamiIstri,
      tanggalLahir: dataKeluarga.tanggalLahir,
      tempatLahir: dataKeluarga.tempatLahir,
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
      id: location.state.id,
    };

    axios
      .put(API_URL + "datasusunankeluargaid/" + location.state.id, data)
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
          <h5>Ubah Data Susunan Keluarga {location.state.nama}</h5>
        </Col>
      </Row>
      <div style={{ padding: "15px" }}>
        <form onSubmit={onSubmit}>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item sm={12} xs={12}>
              <h6 className="mt-2">Suami/Istri</h6>
            </Grid>

            <Grid item sm={12} xs={12}>
              <TextField
                id="namaSuamiIstri"
                name="namaSuamiIstri"
                label="Nama Suami/Istri"
                value={dataKeluarga.namaSuamiIstri}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 200 }}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="tempatLahir"
                name="tempatLahir"
                label="Tempat Lahir"
                value={dataKeluarga.tempatLahir}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 100 }}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="tanggalLahir"
                label="Tanggal Lahir"
                name="tanggalLahir"
                type="date"
                value={dataKeluarga.tanggalLahir}
                onChange={onChange}
                variant="standard"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="tglMenikah"
                label="Tanggal Menikah"
                name="tglMenikah"
                type="date"
                value={dataKeluarga.tglMenikah}
                onChange={onChange}
                variant="standard"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="gereja"
                name="gereja"
                label="Gereja"
                fullWidth
                inputProps={{ maxLength: 100 }}
                value={dataKeluarga.gereja}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid item sm={12} xs={12}>
              <TextField
                id="pekerjaanSI"
                name="pekerjaanSI"
                label="Pekerjaan Suami/Istri"
                value={dataKeluarga.pekerjaanSI}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 300 }}
              />
            </Grid>

            <Grid item sm={12} xs={12}>
              <TextField
                id="alamatSI"
                name="alamatSI"
                label="Alamat"
                value={dataKeluarga.alamatSI}
                onChange={onChange}
                variant="standard"
                fullWidth
                multiline
                rows={3}
                inputProps={{ maxLength: 300 }}
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
                value={dataKeluarga.anak1}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 200 }}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="ttlanak1"
                name="ttlanak1"
                label="Tanggal Lahir"
                value={dataKeluarga.ttlanak1}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 100 }}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="anak2"
                name="anak2"
                label="Nama Anak"
                value={dataKeluarga.anak2}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 200 }}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="ttlanak2"
                name="ttlanak2"
                label="Tanggal Lahir"
                value={dataKeluarga.ttlanak2}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 100 }}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="anak3"
                name="anak3"
                label="Nama Anak"
                value={dataKeluarga.anak3}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 200 }}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="ttlanak3"
                name="ttlanak3"
                label="Tanggal Lahir"
                value={dataKeluarga.ttlanak3}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 100 }}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="anak4"
                name="anak4"
                label="Nama Anak"
                value={dataKeluarga.anak4}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 200 }}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="ttlanak4"
                name="ttlanak4"
                label="Tanggal Lahir"
                value={dataKeluarga.ttlanak4}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 100 }}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="anak5"
                name="anak5"
                label="Nama Anak"
                value={dataKeluarga.anak5}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 200 }}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="ttlanak5"
                name="ttlanak5"
                label="Tanggal Lahir"
                value={dataKeluarga.ttlanak5}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 100 }}
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

export default UbahDataKeluarga;
