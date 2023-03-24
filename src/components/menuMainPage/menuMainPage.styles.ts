import { Theme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: "6vh",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    width: "100%",
    height: "90vh",
    // este estilo se va  a remover es solo para poder visualizar el alto del componente y hasta donde llega
    border: "1px solid #000",
  },
  logo: {
    marginTop: "15%",
    width: "70%",
  },
  menuTitle: {
    fontSize: "100px",
  },
}));
export default useStyles;
