import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { BoxToggle, BrandTitle, ContainerNav, Link, LinksBox } from './style';
import { BiHome, BiCodeAlt } from 'react-icons/bi';
import { BsFillPersonFill, BsFillChatLeftFill } from 'react-icons/bs';
import { MdWorkOutline } from 'react-icons/md';

interface Props {
  toggleTheme(): void;
}

// Component
const NavBar: React.FC<Props> = ({ toggleTheme }) => {
  const {colors, title} = useContext(ThemeContext);

  return (
    <nav>
      <ContainerNav>
        <BrandTitle>Daniela Moreira</BrandTitle>

        <LinksBox>
          <Link href="/">
          <BiHome/> 
          <span>Home</span>
          </Link>

          <Link href="#about">
            <BsFillPersonFill/> 
            <span>Sobre</span>
          </Link>

          <Link href="#skills">
            <BiCodeAlt/>
            <span>Skills</span>
          </Link>

          <Link href="#projects">
            <MdWorkOutline/>
            <span>Projetos</span>
          </Link>

          <Link href="#contact">
            <BsFillChatLeftFill/>
            <span>Contato</span>
          </Link>
        </LinksBox>

        <BoxToggle>
          <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={40}
          handleDiameter={25}
          offColor={colors.secundary}
          onColor="#eee"
          onHandleColor={colors.secundary}
          offHandleColor="#fff"
          />
        </BoxToggle>


      </ContainerNav>
    </nav>
  );
}

export default NavBar;