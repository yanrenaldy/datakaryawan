import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../utils/constants";
import Swal from "sweetalert2";
import { Grid, TextField, Button } from "@mui/material";

function UbahDataPendidikan() {
  const location = useLocation();
  const navigate = useNavigate();

  const [dataPendidikan, setdataPendidikan] = useState({
    nama: location.state.nama,
    namaTK: location.state.namaTK,
    noIjazahTK: location.state.noIjazahTK,
    namaSD: location.state.namaSD,
    noIjazahSD: location.state.noIjazahSD,
    namaSMP: location.state.namaSMP,
    noIjazahSMP: location.state.noIjazahSMP,
    namaSMA: location.state.namaSMA,
    jurusanSMA: location.state.jurusanSMA,
    noIjazahSMA: location.state.noIjazahSMA,
    namaS1: location.state.namaS1,
    jurusanS1: location.state.jurusanS1,
    noIjazahS1: location.state.noIjazahS1,
    namaS2: location.state.namaS2,
    jurusanS2: location.state.jurusanS2,
    noIjazahS2: location.state.noIjazahS2,
    nonFormal1: location.state.nonFormal1,
    jenisNonFormal1: location.state.jenisNonFormal1,
    tempatNonFormal1: location.state.tempatNonFormal1,
    nonFormal2: location.state.nonFormal2,
    jenisNonFormal2: location.state.jenisNonFormal2,
    tempatNonFormal2: location.state.tempatNonFormal2,
    nonFormal3: location.state.nonFormal3,
    jenisNonFormal3: location.state.jenisNonFormal3,
    tempatNonFormal3: location.state.tempatNonFormal3,
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

    const data = {
      namaTK: dataPendidikan.namaTK,
      noIjazahTK: dataPendidikan.noIjazahTK,
      namaSD: dataPendidikan.namaSD,
      noIjazahSD: dataPendidikan.noIjazahSD,
      namaSMP: dataPendidikan.namaSMP,
      noIjazahSMP: dataPendidikan.noIjazahSMP,
      namaSMA: dataPendidikan.namaSMA,
      jurusanSMA: dataPendidikan.jurusanSMA,
      noIjazahSMA: dataPendidikan.noIjazahSMA,
      namaS1: dataPendidikan.namaS1,
      jurusanS1: dataPendidikan.jurusanS1,
      noIjazahS1: dataPendidikan.noIjazahS1,
      namaS2: dataPendidikan.namaS2,
      jurusanS2: dataPendidikan.jurusanS2,
      noIjazahS2: dataPendidikan.noIjazahS2,
      nonFormal1: dataPendidikan.nonFormal1,
      jenisNonFormal1: dataPendidikan.jenisNonFormal1,
      tempatNonFormal1: dataPendidikan.tempatNonFormal1,
      nonFormal2: dataPendidikan.nonFormal2,
      jenisNonFormal2: dataPendidikan.jenisNonFormal2,
      tempatNonFormal2: dataPendidikan.tempatNonFormal2,
      nonFormal3: dataPendidikan.nonFormal3,
      jenisNonFormal3: dataPendidikan.jenisNonFormal3,
      tempatNonFormal3: dataPendidikan.tempatNonFormal3,
      id: location.state.id,
    };

    axios
      .put(API_URL + "datapendidikanid/" + location.state.id, data)
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
          <h5>Ubah Data Pendidikan {location.state.nama}</h5>
        </Col>
      </Row>
      <div style={{ padding: "15px" }}>
        <form onSubmit={onSubmit}>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item sm={6} xs={12}>
              <TextField
                id="namaTK"
                name="namaTK"
                label="Nama Sekolah TK"
                fullWidth
                inputProps={{ maxLength: 100 }}
                value={dataPendidikan.namaTK}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="noIjazahTK"
                name="noIjazahTK"
                label="No Ijazah"
                fullWidth
                inputProps={{ maxLength: 50 }}
                value={dataPendidikan.noIjazahTK}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="namaSD"
                name="namaSD"
                label="Nama Sekolah SD"
                fullWidth
                inputProps={{ maxLength: 100 }}
                value={dataPendidikan.namaSD}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="noIjazahSD"
                name="noIjazahSD"
                label="No Ijazah"
                fullWidth
                inputProps={{ maxLength: 50 }}
                value={dataPendidikan.noIjazahSD}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="namaSMP"
                name="namaSMP"
                label="Nama Sekolah SMP"
                fullWidth
                inputProps={{ maxLength: 100 }}
                value={dataPendidikan.namaSMP}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                id="noIjazahSMP"
                name="noIjazahSMP"
                label="No Ijazah"
                fullWidth
                inputProps={{ maxLength: 50 }}
                value={dataPendidikan.noIjazahSMP}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="namaSMA"
                name="namaSMA"
                label="Nama Sekolah SMA"
                fullWidth
                inputProps={{ maxLength: 100 }}
                value={dataPendidikan.namaSMA}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="jurusanSMA"
                name="jurusanSMA"
                label="Jurusan"
                fullWidth
                inputProps={{ maxLength: 30 }}
                value={dataPendidikan.jurusanSMA}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="noIjazahSMA"
                name="noIjazahSMA"
                label="No Ijazah"
                fullWidth
                inputProps={{ maxLength: 50 }}
                value={dataPendidikan.noIjazahSMA}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="namaS1"
                name="namaS1"
                label="Nama Universitas S1"
                fullWidth
                inputProps={{ maxLength: 100 }}
                value={dataPendidikan.namaS1}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="jurusanS1"
                name="jurusanS1"
                label="Jurusan"
                fullWidth
                inputProps={{ maxLength: 30 }}
                value={dataPendidikan.jurusanS1}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="noIjazahS1"
                name="noIjazahS1"
                label="No Ijazah S1"
                fullWidth
                inputProps={{ maxLength: 50 }}
                value={dataPendidikan.noIjazahS1}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="namaS2"
                name="namaS2"
                label="Nama Universitas S2"
                fullWidth
                inputProps={{ maxLength: 100 }}
                value={dataPendidikan.namaS2}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="jurusanS2"
                name="jurusanS2"
                label="Jurusan"
                fullWidth
                inputProps={{ maxLength: 50 }}
                value={dataPendidikan.jurusanS2}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="noIjazahS2"
                name="noIjazahS2"
                label="No Ijazah S2"
                fullWidth
                inputProps={{ maxLength: 50 }}
                value={dataPendidikan.noIjazahS2}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid item sm={12} xs={12}>
              <h6>Non Formal (Jika ada)</h6>
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="nonFormal1"
                name="nonFormal1"
                label="Tgl/Tahun"
                fullWidth
                inputProps={{ maxLength: 100 }}
                value={dataPendidikan.nonFormal1}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="jenisNonFormal1"
                name="jenisNonFormal1"
                label="Jenis Kegiatan"
                fullWidth
                inputProps={{ maxLength: 200 }}
                value={dataPendidikan.jenisNonFormal1}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="tempatNonFormal1"
                name="tempatNonFormal1"
                label="Tempat Kegiatan"
                fullWidth
                inputProps={{ maxLength: 200 }}
                value={dataPendidikan.tempatNonFormal1}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="nonFormal2"
                name="nonFormal2"
                label="Tgl/Tahun"
                fullWidth
                inputProps={{ maxLength: 100 }}
                value={dataPendidikan.nonFormal2}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="jenisNonFormal2"
                name="jenisNonFormal2"
                label="Jenis Kegiatan"
                fullWidth
                inputProps={{ maxLength: 200 }}
                value={dataPendidikan.jenisNonFormal2}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="tempatNonFormal2"
                name="tempatNonFormal2"
                label="Tempat Kegiatan"
                fullWidth
                inputProps={{ maxLength: 200 }}
                value={dataPendidikan.tempatNonFormal2}
                onChange={onChange}
                variant="standard"
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <TextField
                id="nonFormal3"
                name="nonFormal3"
                label="Tgl/Tahun"
                fullWidth
                inputProps={{ maxLength: 100 }}
                value={dataPendidikan.nonFormal3}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="jenisNonFormal3"
                name="jenisNonFormal3"
                label="Jenis Kegiatan"
                fullWidth
                inputProps={{ maxLength: 200 }}
                value={dataPendidikan.jenisNonFormal3}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid item sm={4} xs={12}>
              <TextField
                id="tempatNonFormal3"
                name="tempatNonFormal3"
                label="Tempat Kegiatan"
                fullWidth
                inputProps={{ maxLength: 200 }}
                value={dataPendidikan.tempatNonFormal3}
                onChange={onChange}
                variant="standard"
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

export default UbahDataPendidikan;
