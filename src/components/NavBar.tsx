import { Layout, Menu, Row } from 'antd';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RouteNames } from '../router';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { isAuth, user } = useTypedSelector(state => state.auth);
  const { logout } = useActions();
  
  return (
    <Layout.Header>
      <Row justify='end'>
        { isAuth 
          ? <>
              <div style={{color: 'white'}}>
                {user.username}
              </div>
              <Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item 
                  key={1} 
                  onClick={logout}
                >
                  Exit
                </Menu.Item>
              </Menu>
            </>
          : <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item 
                key={1} 
                onClick={() => navigate(RouteNames.LOGIN)}
              >
                Login
              </Menu.Item>
            </Menu>
        }
        
      </Row>
    </Layout.Header>
  )
};

export default Navbar;