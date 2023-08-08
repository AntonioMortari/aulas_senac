import React from 'react';
import {Link} from 'react-router-dom'

import styled from 'styled-components'

const Logo = styled.h1`
    color: #262626;
    font-weight: bold;

    >span{
        color: ${({theme}) => theme.COLORS.red};
    }
`



function ComponentLogo() {
    return ( 
        <Link to='/'>
            <Logo>
                <span>F</span>oo<span>D </span>
                <span>P</span>ee<span>K</span>
            </Logo>
        </Link>
     );
}

export default ComponentLogo;