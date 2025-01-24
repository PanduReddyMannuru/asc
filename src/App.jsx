import { useState } from 'react'
import { Button } from 'antd'
import { Layout, Menu, theme } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import Logo from './components/Logo.jsx'
import MenuList from './components/MenuList'
import ToggleThemeButton from './components/ToggleThemeButton';
import useToken from 'antd/es/theme/useToken'

const {Header, Sider } = Layout;
function App() {
const [darkTheme, setDarkTheme] = useState(true)
const [collapsed, setCollapsed] = useState(true)

const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
const {
    token:{ColorBgContainer}
}= theme.useToken();
  return (
    <>
     <Layout>
      <Sider collapsed={collapsed}
       collapsible
       trigger
        theme={ darkTheme ? 'dark' : 'light'} 
        className="sidebar">
        <Logo />
        <MenuList darkTheme = {darkTheme} />
        <ToggleThemeButton darkTheme={darkTheme} 
        toggleTheme={toggleTheme} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: ColorBgContainer }}>
          <Button type="text"
          className="toggle"
          onClick={() => setCollapsed(!collapsed)}
          icon={ collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} />
        </Header>
      </Layout>
     </Layout >
    </>
  );
}

export default App
