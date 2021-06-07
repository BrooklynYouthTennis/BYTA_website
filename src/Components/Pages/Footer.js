import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Link
} from "@material-ui/core";
import {
  Security,
} from "@material-ui/icons";

const Footer = () => <>
  <Grid container justify="center" style={{ minHeight: "200px" }}>
    <Grid container item sm={7} xs={12} justify="space-between">
      {/* <Grid item sm={5} xs={12}> */}
      <Security color="action" />
      <Typography paragraph>
        The donations made on this site are sent through a secured connection and processed by Stripe. This site is compliant with the Payment Card Industry and Data Security Standard. Read more about Stripe security <Link href="https://stripe.com/docs/security/stripe" target="_blank" alt="Stripe">here</Link>.
        </Typography>
      {/* </Grid> */}
    </Grid>
  </Grid>
  <AppBar position="static" elevation={0} component="footer" color="default">
    <Toolbar style={{ justifyContent: "center" }}>
      <Typography variant="caption">©2020</Typography>
    </Toolbar>
  </AppBar>
</>

export default Footer;