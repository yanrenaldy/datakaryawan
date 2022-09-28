import React, { useState } from "react";
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../utils/constants";
import Swal from "sweetalert2";

function UbahDataDiri() {
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

  const onChange = (e) => {
    const { name, value } = e.target;
    setdataDiri((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      jenisKelamin: dataDiri.jenisKelamin,
      status: dataDiri.status,
      tempatLahir: dataDiri.tempatLahir,
      tanggalLahir: dataDiri.tanggalLahir,
      alamat: dataDiri.alamat,
      nik: dataDiri.nik,
      noHP: dataDiri.noHP,
      namaAyah: dataDiri.namaAyah,
      namaIbu: dataDiri.namaIbu,
      alamatOrtu: dataDiri.alamatOrtu,
      id: location.state.id,
    };

    axios.put(API_URL + "datadiriid/" + location.state.id, data).then((res) => {
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
          <h5>Ubah Identitas {location.state.nama}</h5>
        </Col>
      </Row>
      <div style={{ padding: "15px" }}>
        <form onSubmit={onSubmit}>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item sm={12} xs={12}>
              <TextField
                disabled
                id="nama"
                name="nama"
                label="Nama"
                variant="standard"
                fullWidth
                value={dataDiri.nama}
                onChange={onChange}
                inputProps={{ maxLength: 200 }}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="jenisKelamin">Jenis Kelamin</InputLabel>
                <Select
                  labelId="jenisKelamin-label"
                  id="jenisKelamin"
                  name="jenisKelamin"
                  variant="standard"
                  value={dataDiri.jenisKelamin}
                  onChange={onChange}
                >
                  <MenuItem value="Laki-Laki">Laki-Laki</MenuItem>
                  <MenuItem value="Perempuan">Perempuan</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item sm={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="status">Status</InputLabel>
                <Select
                  labelId="status-label"
                  id="status"
                  name="status"
                  variant="standard"
                  value={dataDiri.status}
                  onChange={onChange}
                >
                  <MenuItem value="Belum Menikah">Belum Menikah</MenuItem>
                  <MenuItem value="Menikah">Menikah</MenuItem>
                  <MenuItem value="Cerai Mati">Cerai Mati</MenuItem>
                  <MenuItem value="Cerai Hidup">Cerai Hidup</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                required
                id="tempatLahir"
                name="tempatLahir"
                label="Tempat Lahir"
                inputProps={{ maxLength: 150 }}
                value={dataDiri.tempatLahir}
                onChange={onChange}
                fullWidth
                variant="standard"
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
                value={dataDiri.tanggalLahir}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid item sm={12} xs={12}>
              <TextField
                required
                multiline
                rows={3}
                id="alamat"
                name="alamat"
                label="Alamat"
                inputProps={{ maxLength: 300 }}
                value={dataDiri.alamat}
                onChange={onChange}
                fullWidth
                variant="standard"
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                required
                id="nik"
                name="nik"
                label="NIK/No. KTP"
                fullWidth
                type="number"
                variant="standard"
                value={dataDiri.nik}
                onChange={onChange}
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 20);
                }}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                required
                id="noHP"
                name="noHP"
                label="No Handphone"
                fullWidth
                type="number"
                variant="standard"
                value={dataDiri.noHP}
                onChange={onChange}
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 20);
                }}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                required
                id="namaAyah"
                name="namaAyah"
                label="Nama Ayah"
                variant="standard"
                value={dataDiri.namaAyah}
                onChange={onChange}
                fullWidth
                inputProps={{ maxLength: 200 }}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                required
                id="namaIbu"
                name="namaIbu"
                label="Nama Ibu"
                variant="standard"
                value={dataDiri.namaIbu}
                onChange={onChange}
                fullWidth
                inputProps={{ maxLength: 200 }}
              />
            </Grid>

            <Grid item sm={12} xs={12}>
              <TextField
                required
                multiline
                rows={3}
                id="alamatOrtu"
                name="alamatOrtu"
                variant="standard"
                label="Alamat Orang Tua"
                value={dataDiri.alamatOrtu}
                onChange={onChange}
                fullWidth
                inputProps={{ maxLength: 300 }}
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

export default UbahDataDiri;
