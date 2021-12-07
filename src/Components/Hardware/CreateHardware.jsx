import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import Hardware from "./Hardware";

export default function CreateHardware() {
  const [department, setDepartment] = React.useState("");
  const [gen,setGen] = React.useState("");

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleRam = (event) => {
    setGen(event.target.value);
  }
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            fullWidth
            required
            variant="outlined"
            id="networkName"
            label="Brand"
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <TextField
            fullWidth
            required
            variant="outlined"
            id="networkName"
            label="Model"
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <TextField
            fullWidth
            required
            variant="outlined"
            id="networkName"
            label="Network Name"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            required
            fullWidth
            variant="outlined"
            id="outlined-required"
            label="Mac Address"
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <TextField
            required
            fullWidth
            variant="outlined"
            id="outlined-required"
            label="Serial Number"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            required
            fullWidth
            variant="outlined"
            id="outlined-required"
            label="CPU"
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Department</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={department}
              label="Departmentcd Pro"
              onChange={handleChange}
              variant="outlined"
              required
            >
              <MenuItem value={"IT"}>Information Technology</MenuItem>
              <MenuItem value={"QC"}>Quality Control</MenuItem>
              <MenuItem value={"QA"}>Quality Assurance</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
        <Grid container spacing={2}>
        <Grid item xs={6}>
        <TextField
            required
            fullWidth
            variant="outlined"
            id="outlined-required"
            label="Ram"
          />
        </Grid>

        <Grid item xs={6}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Generation</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={department}
              label="Generation"
              onChange={handleChange}
              variant="outlined"
              required
            >
              <MenuItem value={"DDR"}>DDR</MenuItem>
              <MenuItem value={"DDR2"}>DDR2</MenuItem>
              <MenuItem value={"DDR3"}>DDR3</MenuItem>
              <MenuItem value={"DDR4"}>DDR4</MenuItem>
              <MenuItem value={"LPDDR4X"}>LPDDR4X</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        </Grid>
          
        </Grid>

      </Grid>

      <Hardware />
    </Box>
  );
}
