import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { CNavbar } from '@coreui/react';
import { CNavbarBrand } from '@coreui/react';
import { CNavbarNav } from '@coreui/react';
import { CNavLink } from '@coreui/react';
import { CNavItem } from '@coreui/react';
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';
import { CDropdownDivider } from '@coreui/react';
import { CCollapse } from '@coreui/react';
import { CContainer } from '@coreui/react';
import { CNavbarToggler } from '@coreui/react';
function MenuBar() {

  const [visible, setVisible] = React.useState(false);

    return (
      <nav class="navbar-top bg-light">
        <CNavbar expand="lg" colorScheme="dark" className="bg-dark">
          <CContainer fluid>
            <CNavbarBrand href="/">NeoNext</CNavbarBrand>
            <CNavbarToggler
              aria-label="Toggle navigation"
              aria-expanded={visible}
              onClick={() => setVisible(!visible)}
            />
            <CCollapse className="navbar-collapse" visible={visible}>
              <CNavbarNav>
                <CNavItem>
                  <CNavLink href="/" active>
                    Home
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="/about-fangplay">About FANGPLAY</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="/experience">Experience</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="/gallery">Gallery</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="/game-list">Game List</CNavLink>
                </CNavItem>
                <CDropdown variant="nav-item" popper={false}>
                  <CDropdownToggle>Generation</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="/generation/1">Generation 1 (2006-2007)</CDropdownItem>
                    <CDropdownItem href="/generation/2">Generation 2 (2007-2009)</CDropdownItem>
                    <CDropdownItem href="/generation/3">Generation 3 (2009-2012)</CDropdownItem>
                    <CDropdownItem href="/generation/4">Generation 4 (2012-2015)</CDropdownItem>
                    <CDropdownItem href="/generation/5">Generation 5 (2015-2017)</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="/generation/spectrum">SPECTRUM Generation(2017 - 2020)</CDropdownItem>
                    <CDropdownItem href="/generation/neospectrum">NeoSPECTRUM Generation(2021 - Present)</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CNavItem>
                  <CNavLink href="/channel">NeoXFANGPLAY</CNavLink>
                </CNavItem>
              </CNavbarNav>
            </CCollapse>
          </CContainer>
        </CNavbar>
    </nav>
    );
}
export default MenuBar;