import { makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    color: "black"
  }
}));
export default useStyles;
