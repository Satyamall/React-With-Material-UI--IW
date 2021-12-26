import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import { Checkbox } from "@mui/material";
import Favorite from '@mui/icons-material/Favorite';
import { TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from "@mui/styles";

const currencies = [
    {
        value: 'INDIA',
        label: '₹',
    },
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

  const useStyles = makeStyles((theme) => ({
    paper: {
      margin: "1rem",
      padding: "1rem",
      textAlign: "center",
      backgroundColor: "antiquewhite"
    }
  }));

export default function Element() {
 
    const classes = useStyles();

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const [value, setValue] = React.useState('Satya');

    const handleChangeText = (event) => {
        setValue(event.target.value);
    };

   
 const [currency, setCurrency] = React.useState('INDIA');

  const handleChangeCurrency = (event) => {
    setCurrency(event.target.value);
  };

    return (
        <>
           <Box style={{textAlign: "center"}}>
             <h1>Problems 2 : ELements</h1>
           </Box>
            <Box className={classes.paper} >
                <Button
                    color="error"
                    size="large"
                    variant="contained"
                    startIcon={<UploadIcon />}
                    endIcon={<UploadIcon />}
                >
                    Text
                </Button>
            </Box>
            <Box className={classes.paper}>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    checkedIcon={<Favorite />}
                    size="large"
                    color="secondary"
                />
            </Box>
            <Box className={classes.paper}>
                <TextField
                    required
                    error
                    label="Name"
                    value={value}
                    variant="filled"
                    helperText="Type Your Name In Text Box"
                    color="secondary"
                    onChange={handleChangeText}
                />
            </Box>
            <Box className={classes.paper}>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChangeCurrency}
                    helperText="Please select your currency"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>
            <Box className={classes.paper}>
               <TextField inputProps={{ type: 'date'}} />
            </Box>
        </>
    )
} 