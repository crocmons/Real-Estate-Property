import React from 'react';
import { useRouterContext, TitleProps } from '@pankod/refine-core';
import { Button } from '@pankod/refine-mui';

// import { logo, yariga } from 'assets';

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src="https://w7.pngwing.com/pngs/927/735/png-transparent-logo-graphic-design-dashboard-vertical-miscellaneous-text-orange.png" alt="Yariga" width="60px" />
        ) : (
          <img src="https://w7.pngwing.com/pngs/927/735/png-transparent-logo-graphic-design-dashboard-vertical-miscellaneous-text-orange.png" alt="Yariga" width="110px" style={{ padding: '10px' }} />
        )}
      </Link>
    </Button>
  );
};
