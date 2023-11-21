import { connect } from "react-redux";
import { useRoutes } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actions as user } from "./redux/user/userAction";
//scss
import "./assets/scss/aanch.scss";
import Routers from "./router";

function App(props) {
  const routes = useRoutes(Routers);
  return (
    <div className="App">
          {routes}
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  actions: { ...bindActionCreators({ ...user }, dispatch) },
});
const mapStateToProps = (state) => ({
  user: state.user
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
