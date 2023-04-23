import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div
        data-collapse="none"
        data-animation="default"
        data-duration={400}
        fs-scrolldisable-element="smart-nav"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="rl_navbar2_component w-nav"
      >
        <div className="rl_navbar2_container">
          <a href="/" className="rl_navbar2_logo-link w-nav-brand">
            <img
              src="https://uploads-ssl.webflow.com/6403a12b27be9b59bfbca676/6403a4b3d395813429da65dd_Logo.svg"
              loading="lazy"
              alt=""
              className="rl_navbar2_logo"
            />
            <h1 className="heading">mndHv</h1>
          </a>
          <nav
            role="navigation"
            id="w-node-_21053a16-0def-d40f-4bc6-d4fe6d0df5f1-6d0df5eb"
            className="rl_navbar2_menu is-page-height-tablet w-nav-menu"
          >
            <a href="/drafts" className="rl_navbar2_link w-nav-link">
              drafts
            </a>
          </nav>
          <div
            id="w-node-_21053a16-0def-d40f-4bc6-d4fe6d0df5f6-6d0df5eb"
            className="rl_navbar2_button-wrapper"
          >
            <div
              className="rl_navbar2_menu-button w-nav-button"
              style={{ WebkitUserSelect: "text" }}
              aria-label="menu"
              role="button"
              tabIndex={0}
              aria-controls="w-nav-overlay-0"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <div className="rl_menu-icon2">
                <div className="rl_menu-icon2_line-top" />
                <div className="rl_menu-icon2_line-middle">
                  <div className="rl_menu-icon_line-middle-inner" />
                </div>
                <div className="rl_menu-icon2_line-bottom" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-nav-overlay" data-wf-ignore id="w-nav-overlay-0" />
      </div>
    </nav>
  );
};

export default Navbar;
