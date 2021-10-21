import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const StyledNavbarWrapper = styled.header`
  width: 1280px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled.div`
  font-weight: 700;
`;

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledUl = styled.ul`
  display: flex;
`;

export const StyledLi = styled.li`
  list-style: none;
  margin-right: 20px;

  a {
    text-decoration: none;
    color: black;
    font-family: Manrope;
  }
`;

export const NavbarSeparator = styled.div`
  height: 24px;
  border: 1px solid #939191;
  opacity: 0.36;
`;

export const StyledNavbarContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .phoneLogo {
    margin-left: 15px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #61c4a1;

    color: #fff;
  }

  p {
    padding: 0;
    margin: 0;
  }
`;
