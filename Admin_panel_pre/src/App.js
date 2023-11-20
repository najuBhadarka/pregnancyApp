import { connect } from "react-redux";
import { useRoutes } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { bindActionCreators } from "redux";
import io from "socket.io-client";
import { actions as user } from "./redux/user/userAction";
//scss
import "./assets/scss/aanch.scss";
import Routers from "./router";
import { useEffect, useState } from "react";

const socketURL = process.env.REACT_APP_BASE_URL;

function App(props) {
  const [socketId, setSocketId] = useState();
  const userId = props?.user?.data?.id;
  useEffect(() => {
    if (!socketId && userId !== undefined) {
      setSocketId(
        io(socketURL, {
          auth: { user_id: userId },
          reconnection: true,
          reconnectionDelay: 1000,
          reconnectionDelayMax: 5000,
          reconnectionAttempts: 99999,
        })
      );
    }
    if (socketId && userId) {
      socketId.on("connect", () => {
        socketId.on("order", (data) => {});
        socketId.on("add-order", (data) => {
          if (data) {
            props.actions.getOrderDataSocket(data);
          }
        });
        socketId.on("delivery-boy-decline", (data) => {
          if (data) {
            props.actions.getDeliveryDataSocket(data);
          }
        });
      });
    }
  }, [props.actions, socketId, userId]);
  const routes = useRoutes(Routers);
  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition classNames="fadein" timeout={100}>
          {routes}
        </CSSTransition>
      </TransitionGroup>
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
