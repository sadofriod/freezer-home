import { useTranslation } from "next-i18next";
import AppleIcon from '@mui/icons-material/Apple';

const FeaturesList: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <div className="feature-container">
      <div>
        <h2 className="feature-title">{t('feature.download')}</h2>
        <a className="download-button" href="https://apps.apple.com/cn/app/freezernote/id6689519241?l=en-GB">
          <AppleIcon />
          Apple Store
        </a>
      </div>
      <div>
        <h2 className="feature-title">{t('feature.title')}</h2>
        <div className="page-tags">
          <div className="page-tag" id="ticket">{t('feature.tab1')}</div>
          <div className="page-tag" id="fruit">{t('feature.tab2')}</div>
          <div className="page-tag" id="info">{t('feature.tab3')}</div>
        </div>
        <div className="feature-list">
          <div className="feature" >1. {t('feature.subtitle1')}</div>
          <div className="feature" >2. {t('feature.subtitle2')}</div>
          <div className="feature" >3. {t('feature.subtitle3')}</div>
        </div>
      </div>
    </div>
  )
};

export default FeaturesList;