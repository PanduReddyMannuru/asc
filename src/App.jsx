import { useState } from 'react'
import { Button } from 'antd'
import { Layout } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import MenuList from './components/MenuList'

const {Sider } = Layout;
function App() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <>
     <Layout>
      <Sider collapsed={collapsed}
       collapsible
       trigger={null}
        className="sidebar">
           <Button
            type="text"
            className="toggle-btn"
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
        <MenuList />
      </Sider>
     </Layout >
    </>
  );
}

export default App
