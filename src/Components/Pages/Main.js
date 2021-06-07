// import React from "react";
// import { Container, Paper, Box, } from "@material-ui/core";
// import { makeStyles, } from '@material-ui/core/styles';
// import { loadStripe } from '@stripe/stripe-js';
// import Stepper from '../../Components/Pages/Stepper'
// import { Elements, } from "@stripe/react-stripe-js";

// const useStyles = makeStyles(() => ({
//   boxWrapper: {
//     marginBottom: "55px",
//     minHeight: "calc(26vh + 260px)"
//   },
//   container: {
//     position: "relative",
//     zIndex: "1100",
//     marginTop: "-95px",
//     marginBottom: "45px",
//   }
// }));



// const Main = () => {
//   const stripe = loadStripe('pk_live_ys5SwCNLJFwWJqab6JIRDkiV00HsMPmI4j');

//   const classes = useStyles();

//   return <Box component="main" className={classes.boxWrapper}>
//     <Container maxWidth="md" className={classes.container}>
//       <Paper elevation={5}>
//         <Elements
//           stripe={stripe}
//         >
//           <Stepper />
//         </Elements>
//       </Paper>
//     </Container>
//   </Box>
// }

// export default Main;