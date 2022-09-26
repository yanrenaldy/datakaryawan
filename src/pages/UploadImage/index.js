import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Grid, InputLabel, Button } from "@mui/material";
import axios from "axios";
import { API_URL } from "../../utils/constants";
import Swal from "sweetalert2";

function UploadImage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userImg, setuserImg] = useState();

  const setImage = (e) => {
    setuserImg(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const upload = new FormData();
    upload.append("nama", location.state.nama);
    upload.append("userimg", userImg);

    axios.get(API_URL + "pasfoto/" + location.state.nama).then((res) => {
      if (res.data.length === 0) {
        axios
          .post(API_URL + "pasfoto", upload, {
            headers: {
              "content-type": "multipart/form-data",
            },
          })
          .then((res) => {
            Swal.fire({
              title: "Success!",
              text: "Berhasil mengupload foto!",
              icon: "success",
              showConfirmButton: false,
              timer: 1250,
            }).then((res) => {
              navigate("/view", {
                state: {
                  nama: location.state.nama,
                  tingkat: location.state.tingkat,
                },
              });
            });
          })
          .catch((error) => {
            console.log("error " + error);
          });
      } else {
        axios
          .put(API_URL + "pasfoto/" + location.state.nama, upload, {
            headers: {
              "content-type": "multipart/form-data",
            },
          })
          .then((res) => {
            Swal.fire({
              title: "Success!",
              text: "Berhasil mengupload foto!",
              icon: "success",
              showConfirmButton: false,
              timer: 1250,
            }).then((res) => {
              navigate("/view", {
                state: {
                  nama: location.state.nama,
                  tingkat: location.state.tingkat,
                },
              });
            });
          })
          .catch((error) => {
            console.log("error " + error);
          });
      }
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
          <h5>Upload Foto untuk {location.state.nama}</h5>
        </Col>
      </Row>
      <form onSubmit={onSubmit}>
        <Grid item sm={12}>
          <InputLabel shrink>Pas Foto</InputLabel>
          <input
            type="file"
            accept="image/*"
            id="userimg"
            name="userimg"
            onChange={setImage}
          />
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="mb-3 mt-2"
        >
          Upload
        </Button>
      </form>
    </div>
  );
}

export default UploadImage;
