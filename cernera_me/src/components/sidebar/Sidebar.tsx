import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import log from "loglevel";
import style from "./Sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserInfoType } from "types";
import "icons";
import appleIcon from "../../assets/images/apple-touch-icon.png";

const Sidebar = ({
  sm,
  user,
  slideIn,
}: {
  sm: boolean;
  user: UserInfoType;
  slideIn?: boolean | undefined;
}) => {
  const [showSidebar, setShowSidebar] = useState(
    slideIn ? style["sidebar-hide-left"] : ""
  );
  let navigate = useNavigate();
  let location = useLocation();

  const [isHomeItemHovered, setIsHomeItemHovered] = useState<boolean>(false);
  const [isUserItemHovered, setIsUserItemHovered] = useState<boolean>(false);
  const [isProjectsItemHovered, setIsProjectsItemHovered] =
    useState<boolean>(false);
  const [isResumeItemHovered, setIsResumeItemHovered] =
    useState<boolean>(false);
  const [isContactItemHovered, setIsContactItemHovered] =
    useState<boolean>(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  useEffect(() => {
    slideIn ? setShowSidebar(style["sidebar-slide-right"]) : setShowSidebar("");
  }, [slideIn]);

  const sidebarType = sm ? "small" : "full";
  const sidebarMenuItemIconClass = `sidebar__${sidebarType}__menu__main__menu-item__icon`;
  const sidebarMenuItemLabelClass = `sidebar__${sidebarType}__menu__main__menu-item__label`;

  const homePageSelected      = location.pathname === "/";
  const aboutPageSelected     = !!(user && location.pathname.endsWith(user.name));
  const projectsPageSelected  = location.pathname.endsWith("projects");
  const resumePageSelected    = location.pathname.endsWith("resume");
  const contactPageSelected   = location.pathname.endsWith("contact");

  const navIcon = (icon: [string, string], isSelected: boolean, isHovered: boolean) =>
    [
      style[sidebarMenuItemIconClass],
      isSelected                    ? style["nav-icon-active"] : "",
      isHovered && !isSelected      ? style["nav-icon-hidden"] : "",
    ].filter(Boolean).join(" ");

  const navLabel = (isSelected: boolean, isHovered: boolean) =>
    [
      style[sidebarMenuItemLabelClass],
      isHovered && !isSelected      ? style["nav-label-visible"] : "",
    ].filter(Boolean).join(" ");
  log.info("About Page Selected? : " + aboutPageSelected);

  return (
    <div id="Sidebar" className={[style["sidebar"], showSidebar].join(" ")}>
      <div className={style[`sidebar__${sidebarType}`]}>
        <Link to="/">
          <div className={style[`sidebar__${sidebarType}__brand`]}>
            <img src={appleIcon} alt="cernera.me" />
          </div>
        </Link>
        <div className={style[`sidebar__${sidebarType}__menu`]}>
          <div className={style[`sidebar__${sidebarType}__menu__main`]}>
            <div
              className={
                style[`sidebar__${sidebarType}__menu__main__menu-item`]
              }
              onClick={() => {
                navigate("/");
              }}
              onMouseEnter={() => setIsHomeItemHovered(true)}
              onMouseLeave={() => setIsHomeItemHovered(false)}
            >
              <FontAwesomeIcon className={navIcon(["fast", "home"], homePageSelected, isHomeItemHovered)} icon={["fast", "home"]} />
              <div className={navLabel(homePageSelected, isHomeItemHovered)}>Home</div>
            </div>
            <div
              className={
                style[`sidebar__${sidebarType}__menu__main__menu-item`]
              }
              onClick={() => {
                navigate(user.rootRoute);
              }}
              onMouseEnter={() => setIsUserItemHovered(true)}
              onMouseLeave={() => setIsUserItemHovered(false)}
            >
              <FontAwesomeIcon className={navIcon(["fast", "user"], aboutPageSelected, isUserItemHovered)} icon={["fast", "user"]} />
              <div className={navLabel(aboutPageSelected, isUserItemHovered)}>About</div>
            </div>
            {user.showProjects ? (
              <div
                className={
                  style[`sidebar__${sidebarType}__menu__main__menu-item`]
                }
                onClick={() => {
                  navigate(`${user.rootRoute}/projects`);
                }}
                onMouseEnter={() => setIsProjectsItemHovered(true)}
                onMouseLeave={() => setIsProjectsItemHovered(false)}
              >
                <FontAwesomeIcon className={navIcon(["fast", "project-diagram"], projectsPageSelected, isProjectsItemHovered)} icon={["fast", "project-diagram"]} />
                <div className={navLabel(projectsPageSelected, isProjectsItemHovered)}>Projects</div>
              </div>
            ) : null}
            <div
              className={
                style[`sidebar__${sidebarType}__menu__main__menu-item`]
              }
              onClick={() => {
                navigate(`${user.rootRoute}/resume`);
              }}
              onMouseEnter={() => setIsResumeItemHovered(true)}
              onMouseLeave={() => setIsResumeItemHovered(false)}
            >
              <FontAwesomeIcon className={navIcon(["fast", "file-alt"], resumePageSelected, isResumeItemHovered)} icon={["fast", "file-alt"]} />
              <div className={navLabel(resumePageSelected, isResumeItemHovered)}>Resume</div>
            </div>
            {/*
            <div className={style[`sidebar__${sidebarType}__menu__main__menu-item`]}
                onClick={() => { navigate(`${user.rootRoute}/contact`) }}
                onMouseEnter={() => setIsContactItemHovered(true)}
                onMouseLeave={() => setIsContactItemHovered(false)}>
                {!contactPageSelected && !isContactItemHovered ?
                    <>
                        <FontAwesomeIcon className={style[sidebarMenuItemIconClass]} icon={["fast", "envelope"]} />
                    </> : <div className={style[sidebarMenuItemLabelClass]}>Contact</div>}
            </div>
            */}
          </div>

          <div className={style[`sidebar__${sidebarType}__menu__footer`]}>
            {user.socialMedia.github !== undefined ? (() => {
              const url = `https://github.com/${user.socialMedia.github}`;
              return (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <div
                    className={style[`sidebar__${sidebarType}__menu__footer__menu-item`]}
                    onMouseEnter={() => setHoveredSocial("github")}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} />
                    <div className={[style["social-tooltip"], hoveredSocial === "github" ? style["social-tooltip--visible"] : ""].join(" ")}>
                      {url}
                    </div>
                  </div>
                </a>
              );
            })() : null}

            {user.socialMedia.medium !== undefined ? (() => {
              const url = user.socialMedia.medium!;
              return (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <div
                    className={style[`sidebar__${sidebarType}__menu__footer__menu-item`]}
                    onMouseEnter={() => setHoveredSocial("medium")}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <FontAwesomeIcon icon={["fab", "medium"]} />
                    <div className={[style["social-tooltip"], hoveredSocial === "medium" ? style["social-tooltip--visible"] : ""].join(" ")}>
                      {url}
                    </div>
                  </div>
                </a>
              );
            })() : null}

            {user.socialMedia.linkedin !== undefined ? (() => {
              const url = `https://linkedin.com/in/${user.socialMedia.linkedin}`;
              return (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <div
                    className={style[`sidebar__${sidebarType}__menu__footer__menu-item`]}
                    onMouseEnter={() => setHoveredSocial("linkedin")}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    <div className={[style["social-tooltip"], hoveredSocial === "linkedin" ? style["social-tooltip--visible"] : ""].join(" ")}>
                      {url}
                    </div>
                  </div>
                </a>
              );
            })() : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
