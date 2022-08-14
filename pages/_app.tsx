import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
// import React, { useState } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText,
// } from 'reactstrap';

// const Header: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar>
//         <NavbarBrand href='/'>乗りレコ</NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className='me-auto' navbar>
//             <NavItem>
//               <NavLink href='/components/'>Components</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href='https://github.com/reactstrap/reactstrap'>GitHub</NavLink>
//             </NavItem>
//           </Nav>
//           <NavbarText>Simple Text</NavbarText>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// };

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>乗りレコ</title>
        <meta
          name='description'
          content='何の曲のどんな乗り番を経験したか簡単マークアップ！乗りレコを共有して経験を共有しよう！'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Header /> */}
      <main className='container'>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
