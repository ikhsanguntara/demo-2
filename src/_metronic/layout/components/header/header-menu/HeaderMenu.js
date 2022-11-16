/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function HeaderMenu({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url) => {
    return checkIsActive(location, url) ? "menu-item-active" : "";
  };

  const listMenu = [
    {
      menu_name: "Dashboard",
      title: "Dasboard",
      url: "/dashboard",
      icon: "icon-home",
      permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
      childs: [],
    },
    {
      menu_name: "layout",
      title: "layout",
      url: "/layout",
      icon: "icon-home",
      permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
      childs: [],
    },
    {
      menu_name: "Builder",
      title: "Builder",
      url: "/builder",
      icon: "icon-home",
      permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
      childs: [],
    },
    {
      menu_name: "Administration",
      title: "Administration",
      url: "/administration",
      icon: "icon-home",
      permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
      childs: [
        {
          menu_name: "Master User",
          title: "Master User",
          url: "/administration/master-user",
          icon: "icon-home",
          permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
          childs: [
            {
              menu_name: "User",
              title: "User",
              url: "/administration/master-user/user",
              icon: "icon-home",
              permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
              childs: [],
            },
            {
              menu_name: "Roles",
              title: "Roles",
              url: "/administration/master-user/roles",
              icon: "icon-home",
              permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
              childs: [],
            },
          ],
        },

        {
          menu_name: "Bussiness Parameter",
          title: "Bussiness Parameter",
          url: "/administration/bussiness-parameter",
          icon: "icon-home",
          permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
          childs: [
            {
              menu_name: "Parameter Group",
              title: "Parameter Group",
              url: "/administration/bussiness-parameter/grup",
              icon: "icon-home",
              permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
              childs: [],
            },
            {
              menu_name: "Parameter",
              title: "Parameter",
              url: "/administration/bussiness-parameter/paramater",
              icon: "icon-home",
              permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
              childs: [],
            },
          ],
        },
        {
          menu_name: "Master Menu",
          title: "Master Menu",
          url: "/administration/master-menu",
          icon: "icon-home",
          permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
          childs: [
            {
              menu_name: "Menu",
              title: "Menu",
              url: "/administration/master-menu/menu",
              icon: "icon-home",
              permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
              childs: [],
            },
            {
              menu_name: "Menu Tree",
              title: "Menu",
              url: "/administration/master-menu/menu-tree",
              icon: "icon-home",
              permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
              childs: [],
            },
          ],
        },
        {
          menu_name: "Email",
          title: "Email",
          url: "/administration/email",
          icon: "icon-home",
          permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
          childs: [
            {
              menu_name: "Template",
              title: "Template",
              url: "/administration/email/template",
              icon: "icon-home",
              permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
              childs: [],
            },
            {
              menu_name: "Account",
              title: "Account",
              url: "/administration/email/account",
              icon: "icon-home",
              permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
              childs: [],
            },
          ],
        },
        {
          menu_name: "Password Policy",
          title: "Password Policy",
          url: "/administration/Password Policy",
          icon: "icon-home",
          permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
          childs: [],
        },
        {
          menu_name: "General Setting",
          title: "General Setting",
          url: "/administration/general-setting",
          icon: "icon-home",
          permissions: ["CANCEL", "CREATE", "DELETE", "READ", "UPDATE"],
          childs: [],
        },
      ],
    },
  ];

  return (
    <div
      id="kt_header_menu"
      className={`header-menu header-menu-left header-menu-mobile ${layoutProps.ktMenuClasses}`}
      {...layoutProps.headerMenuAttributes}
    >
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {listMenu.map((menu) => {
          if (menu.childs.length === 0) {
            // Render don't have child
            return (
              <li
                className={`menu-item menu-item-rel ${getMenuItemActive(
                  "menu.url"
                )}`}
              >
                <NavLink className="menu-link" to={menu.url}>
                  <span className="menu-text">{menu.menu_name}</span>
                  {layoutProps.rootArrowEnabled && <i className="menu-arrow" />}
                </NavLink>
              </li>
            );
          } else {
            return (
              <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive(
                  ` ${menu.url}`
                )}`}
              >
                <NavLink className="menu-link menu-toggle" to={menu.url}>
                  <span className="menu-text">{menu.menu_name}</span>
                  <i className="menu-arrow"></i>
                </NavLink>
                <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                  <ul className="menu-subnav">
                    {/* Loop Menu Level 2 */}
                    {menu.childs.map((submenu) => {
                      if (submenu.childs.length === 0) {
                        // Render if don't have child
                        return (
                          <li
                            className={`menu-item ${getMenuItemActive(
                              `${submenu.url}`
                            )}`}
                          >
                            <NavLink className="menu-link" to={submenu.url}>
                              <span className="menu-text">
                                {submenu.menu_name}
                              </span>
                            </NavLink>
                          </li>
                        );
                      } else {
                        // Render if have child
                        return (
                          <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive(
                              `${submenu.url}`
                            )}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                          >
                            <NavLink
                              className="menu-link menu-toggle"
                              to={submenu.url}
                            >
                              <span className="svg-icon menu-icon">
                                <SVG
                                  src={toAbsoluteUrl(
                                    "/media/svg/icons/Design/PenAndRuller.svg"
                                  )}
                                />
                              </span>
                              <span className="menu-text">
                                {submenu.menu_name}
                              </span>
                              <i className="menu-arrow" />
                            </NavLink>
                            <div
                              className={`menu-submenu menu-submenu-classic menu-submenu-right`}
                            >
                              <ul className="menu-subnav">
                                {/* Loop Menu Level 3 */}
                                {submenu.childs.map((child) => {
                                  return (
                                    <li
                                      className={`menu-item ${getMenuItemActive(
                                        `${child.url}`
                                      )}`}
                                    >
                                      <NavLink
                                        className="menu-link"
                                        to={child.url}
                                      >
                                        <i className="menu-bullet menu-bullet-dot">
                                          <span />
                                        </i>
                                        <span className="menu-text">
                                          {child.menu_name}
                                        </span>
                                      </NavLink>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
