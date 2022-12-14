import { CustomLink } from 'components/CustomLink';
import { namespaces } from 'i18n/i18n.constants';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { List, X } from 'phosphor-react';
import { headerLinks } from 'services/data/header/links';

import * as S from './styles';
import { MenuProps } from './@types';

export const Menu: FC = () => {
  const { t } = useTranslation(namespaces.header);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const iconProp = {
    size: 36,
    color: '#fdfdfd',
  };

  return (
    <S.MenuContainer>
      <S.MenuButton type="button" onClick={() => setIsMenuOpen(prev => !prev)}>
        {isMenuOpen ? <X {...iconProp} /> : <List {...iconProp} />}
      </S.MenuButton>
      <S.LinksContainer isMenuOpen={isMenuOpen}>
        {headerLinks?.navLinks?.map(
          ({ id, text, link, isExternal, options }) => (
            <CustomLink
              key={id}
              to={link}
              isExternal={isExternal}
              {...(options || {})}
            >
              {t(text)}
            </CustomLink>
          ),
        )}
      </S.LinksContainer>
    </S.MenuContainer>
  );
};
