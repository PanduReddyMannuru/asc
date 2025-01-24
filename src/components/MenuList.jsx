import React from 'react'
import { Menu } from 'antd'
import { UserOutlined,
  MessageOutlined,
  AppstoreOutlined,
  RobotOutlined,
  SolutionOutlined, 
  TeamOutlined, 
  ShareAltOutlined,
  FundOutlined 

} from '@ant-design/icons'

const MenuList = ({darkTheme}) => {
  return (
   <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" className='menu-bar'>
    <Menu.Item key="Dashboard" icon={<AppstoreOutlined/>}>
    Dashboard
    </Menu.Item>
    <Menu.Item key="MentorForYou" icon={<UserOutlined/>}>
    Mentor For You
    </Menu.Item>
    <Menu.Item key="AiInsights" icon={<FundOutlined/>}>
    Ai Insights
    </Menu.Item>
    <Menu.Item key="JobsInternships" icon={<SolutionOutlined/>}>
    Jobs & Internships
    </Menu.Item>
    <Menu.Item key="ResumeBot" icon={<RobotOutlined/>}>
    Resume Bot
    </Menu.Item>
    <Menu.Item key="CommunityForums" icon={<TeamOutlined/>}>
    Community Forums
    </Menu.Item>
    <Menu.Item key="Messages" icon={<MessageOutlined/>}>
    Messages
    </Menu.Item>
    <Menu.Item key="Referals" icon={<ShareAltOutlined/>}>
    Referals
    </Menu.Item>
   </Menu>
  );
};

export default MenuList