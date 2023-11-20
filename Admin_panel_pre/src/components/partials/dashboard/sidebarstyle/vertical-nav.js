import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Accordion,
  useAccordionButton,
  AccordionContext,
} from "react-bootstrap";

import { sidebarItems } from "./sidebarItems";

const CustomToggle = ({ children, eventKey, onClick, isGrouped }) => {
  const { activeEventKey } = useContext(AccordionContext);
  const checkEventKey = isGrouped ? eventKey : null;

  const decoratedOnClick = useAccordionButton(eventKey, (active) =>
    onClick({ state: !active, eventKey: eventKey })
  );

  const isCurrentEventKey = activeEventKey === checkEventKey;

  return eventKey !== "dashboard" ? (
    <div
      to={eventKey === "category" ? "/app/product-category" : "/admin"}
      aria-expanded={isCurrentEventKey ? "true" : "false"}
      className="nav-link"
      role="button"
      onClick={() => {
        decoratedOnClick(isCurrentEventKey);
      }}
    >
      {children}
    </div>
  ) : (
    <Link
      to={"/admin"}
      aria-expanded={isCurrentEventKey ? "true" : "false"}
      className="nav-link"
      role="button"
      onClick={() => {
        decoratedOnClick(isCurrentEventKey);
      }}
    >
      {children}
    </Link>
  );
};

const loggedInUserRole = "Admin";

const VerticalNav = () => {
  // const { closeSidebar } = props;
  const [activeMenu, setActiveMenu] = useState(false); // activeMenu
  const [isGrouped, setIsGrouped] = useState(false);
  //location
  let location = useLocation();

  return (
    <Accordion as="ul" className="navbar-nav iq-main-menu mt-4">
      {sidebarItems.map(({ icon: Icon, ...sidebarItem }, id) =>
        sidebarItem?.roleTypes &&
        !sidebarItem?.roleTypes?.includes(loggedInUserRole) ? null : (
          <div key={id}>
            {sidebarItem.isLabel ? (
              <li className="nav-item static-item">
                <Link
                  className="nav-link static-item disabled"
                  to="#"
                  tabIndex="-1"
                >
                  <span className="default-icon">{sidebarItem.name}</span>
                  <span className="mini-icon">{sidebarItem.shortHand}</span>
                </Link>
              </li>
            ) : null}
            {sidebarItem.isMenu ? (
              <Accordion.Item
                as="li"
                eventKey={sidebarItem.eventKey}
                bsPrefix="nav-item"
              >
                <CustomToggle
                  eventKey={sidebarItem.eventKey}
                  onClick={(activeKey) => {
                    setActiveMenu(activeKey);
                    setIsGrouped(true);
                  }} //activekey ===> {state: true, eventKey: 'horizontal-menu'}
                  isGrouped={isGrouped}
                >
                  <i className="icon">
                    <Icon />
                  </i>
                  <span className="item-name">{sidebarItem.name}</span>
                  {sidebarItem.eventKey === "dashboard" ? null : (
                    <i className="right-ico">
                    </i>
                  )}
                </CustomToggle>
                <Accordion.Collapse eventKey={sidebarItem.eventKey}>
                  <ul className="sub-nav">
                    {sidebarItem.children &&
                      sidebarItem.children.map(({ icon: Icon, ...child }, id) =>
                        child?.roleTypes &&
                        !child.roleTypes.includes(loggedInUserRole) ? null : (
                          <li
                            className="nav-item"
                            key={id}
                            onClick={() => setIsGrouped(true)}
                          >
                            <Link
                              className={`${
                                location.pathname ===
                                  (sidebarItem.path ? sidebarItem.path : "") +
                                    child.path && isGrouped
                                  ? "active"
                                  : ""
                              } nav-link`}
                              to={`${sidebarItem.path ? sidebarItem.path : ""}${
                                child.path
                              }`}
                            >
                              <i className="icon">
                                <Icon />
                              </i>
                              {child.shortHand ? (
                                <i className="sidenav-mini-icon">
                                  {child.shortHand}
                                </i>
                              ) : null}
                              <span className="item-name">{child.name}</span>
                            </Link>
                          </li>
                        )
                      )}
                  </ul>
                </Accordion.Collapse>
              </Accordion.Item>
            ) : (
              !sidebarItem.isLabel && (
                <Accordion.Item
                  as="li"
                  eventKey={sidebarItem.eventKey}
                  bsPrefix="nav-item"
                  onClick={() => {
                    setIsGrouped(false);
                    setActiveMenu({ state: false, eventKey: "" });
                  }}
                >
                  <Link
                    className={`${
                      location.pathname === sidebarItem.path &&
                      !activeMenu.state
                        ? "active"
                        : ""
                    } nav-link`}
                    to={`${sidebarItem.path ? sidebarItem.path : ""}`}
                  >
                    {Icon ? (
                      <i className="icon">
                        <Icon />
                      </i>
                    ) : null}
                    {sidebarItem.shortHand ? (
                      <i className="sidenav-mini-icon">
                        {sidebarItem.shortHand}
                      </i>
                    ) : null}
                    <span className="item-name">{sidebarItem.name}</span>
                  </Link>
                </Accordion.Item>
              )
            )}
          </div>
        )
      )}
    </Accordion>
  );
};

export default VerticalNav;
