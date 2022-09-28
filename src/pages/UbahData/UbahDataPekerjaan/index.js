import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../utils/constants";
import Swal from "sweetalert2";
import {
  Grid,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";

function UbahDataPekerjaan() {
  const navigate = useNavigate();
  const location = useLocation();

  const [dataPekerjaan, setdataPekerjaan] = useState({
    nama: location.state.nama,
    noSkPertama: location.state.noSkPertama,
    jabatan: location.state.jabatan,
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

    const data = {
      noSkPertama: dataPekerjaan.noSkPertama,
      jabatan: dataPekerjaan.jabatan,
      id: location.state.id,
    };

    axios
      .put(API_URL + "datapekerjaanid/" + location.state.id, data)
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
          <h5>Ubah Data Pekerjaan {location.state.nama}</h5>
        </Col>
      </Row>
      <div style={{ padding: "15px" }}>
        <form onSubmit={onSubmit}>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item sm={6} xs={12}>
              <TextField
                id="noSkPertama"
                name="noSkPertama"
                label="No SK Pertama"
                value={dataPekerjaan.noSkPertama}
                onChange={onChange}
                variant="standard"
                fullWidth
                inputProps={{ maxLength: 30 }}
              />
            </Grid>

            <Grid item sm={6} xs={12} style={{ marginTop: "-7px" }}>
              <InputLabel id="jabatan-label">Jabatan</InputLabel>
              <Select
                labelId="jabatan-label"
                id="jabatan"
                name="jabatan"
                value={dataPekerjaan.jabatan}
                onChange={onChange}
                variant="standard"
                fullWidth
              >
                <MenuItem value="Staff">Staff</MenuItem>
                <MenuItem value="Guru TK">Guru TK</MenuItem>
                <MenuItem value="Guru SD Reguler">Guru SD Reguler</MenuItem>
                <MenuItem value="Guru SD Plus">Guru SD Plus</MenuItem>
                <MenuItem value="Guru SMP">Guru SMP</MenuItem>
                <MenuItem value="Guru SMA">Guru SMA</MenuItem>
                <MenuItem value="Kepala Sekolah">Kepala Sekolah</MenuItem>
              </Select>
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

export default UbahDataPekerjaan;
