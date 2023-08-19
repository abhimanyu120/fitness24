import { Button, Card, CardActions, CardContent, CardMedia, FormControl, Input, InputAdornment, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MessageIcon from '@mui/icons-material/Message';
import MergeTypeIcon from '@mui/icons-material/MergeType';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import React from 'react'
//https://dribbble.com/shots/14154368-Contact-Form-03/attachments/5780994?mode=media
export default function Contact() {
    return (
        <div>
            <div style={{ paddingTop: "5%" }}>
                <h1 style={{ textAlign: "center", display: "initial" }}>Get in touch!</h1>
                <br />
                <i>Contact us for a quote,help ot to join team</i>
                <div style={{paddingTop:"2vh"}}>
                <Button style={{marginRight:"2vh"}} variant="contained"><AddLocationIcon/></Button>
                <Button  style={{marginRight:"2vh"}} variant="contained"><LocalPhoneIcon /></Button>
                 <Button  style={{marginRight:"2vh"}} variant="contained"><EmailIcon /></Button>
                </div>
                <div id="contactDiv">
                    <h3 style={{ textAlign: "left", paddingLeft: "1vh" }}>Contact Form</h3>
                    <div style={{ textAlign: "left" }}>
                        <FormControl variant="standard" style={{ width: "98%", margin: "1vh" }}>
                            <InputLabel htmlFor="input-with-icon-adornment">
                                Name
                            </InputLabel>
                            <Input
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                        <FormControl variant="standard" style={{ width: "98%", margin: "1vh" }}>
                            <InputLabel htmlFor="input-with-icon-adornment">
                                Email
                            </InputLabel>
                            <Input
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl variant="standard" style={{ width: "98%", margin: "1vh" }}>
                            <InputLabel htmlFor="input-with-icon-adornment">
                                Phone
                            </InputLabel>
                            <Input
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <LocalPhoneIcon />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl variant="standard" style={{ width: "98%", margin: "1vh" }}>
                            <InputLabel htmlFor="input-with-icon-adornment">
                                Message
                            </InputLabel>
                            <Input
                                id="outlined-multiline-static"
                                type='textField'
                                startAdornment={
                                    <InputAdornment position="start">
                                        <MessageIcon />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl variant="standard" style={{ width: "98%", margin: "1vh" }}>
                            <InputLabel htmlFor="input-with-icon-adornment">
                                Services
                            </InputLabel>
                            <Select
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <MergeTypeIcon />
                                    </InputAdornment>
                                }
                            >
                                <MenuItem value={10}>Personal Trainer</MenuItem>
                                <MenuItem value={20}>Franchise</MenuItem>
                                <MenuItem value={30}>About Gym</MenuItem>
                                <MenuItem value={40}>About Product</MenuItem>
                                <MenuItem value={50}>Others</MenuItem>
                                </Select>
                                <Button variant="contained">Submit</Button>
                        </FormControl>
                    </div>
                </div>
            </div>
        </div>
    )
}
