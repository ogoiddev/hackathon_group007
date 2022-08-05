import { FC } from 'react';
import { namespaces } from 'i18n/i18n.constants';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';

export const About: FC = () => {
  const { t } = useTranslation(namespaces.about);
  const navigate = useNavigate();
  return(
    <S.AboutContainer>
    
      <S.AboutTitle>
          {t('texts.beWine')}
          <span>
            {t('texts.signUp')}
          </span>
          <span>
            {t('texts.signUpBonus')}
          </span>
        <S.Button onClick={() => navigate('/signup')}>{t('texts.signUpBtn')}</S.Button>
      </S.AboutTitle>
    
  </S.AboutContainer>
  );
}
