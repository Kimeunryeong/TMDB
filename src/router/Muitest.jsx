import React from "react";
import Layout from "../components/Layout";
import { Button, TextField } from "@mui/material";
import { VscDebugStart } from "react-icons/vsc";


export default function Muitest() {
  return (
    <Layout>
      <div className="w-full flex justify-center py-16">
        <div className="w-[1200px] flex flex-col space-y-2">
          <h1>Mui test</h1>
          <Button variant="text">버튼</Button>
          <Button variant="contained" color="success">
            Contained
          </Button>
          <Button variant="outlined" color="warning" startIcon={<VscDebugStart />}>
            Outlined
          </Button>
          <TextField id="outlined-basic" label="이름" varient="outlined" />
          <TextField id="outlined-basic" label="이메일" varient="outlined" />
        </div>
      </div>
    </Layout>
  );
}
