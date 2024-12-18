import { useTranslation } from "next-i18next";
import MUIAppleIcon from '@mui/icons-material/Apple';
import { sendGTMEvent } from '@next/third-parties/google'

const FeaturesList: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className="feature-container">
      <div>
        <h2 className="feature-title">{t('feature.download')}</h2>
        <a id="freezer_note_download" onClick={()=> sendGTMEvent({
          trigger: 'download',
        },'freezer_note_download')} className="download-button" href="https://apps.apple.com/cn/app/freezernote/id6689519241?l=en-GB">
          <MUIAppleIcon />
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