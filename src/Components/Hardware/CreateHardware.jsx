import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React from "react";

export default function CreateHardware() {
  const [department, setDepartment] = React.useState("");

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };
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


      </Grid>
    </Box>
  );
}
