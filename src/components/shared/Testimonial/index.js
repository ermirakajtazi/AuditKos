import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from "./Avatar"
import test1 from "../../../assets/test1.png"
import test2 from "../../../assets/test2.png"
import test3 from "../../../assets/test3.png"
import TestimonialBody from "./TestimonialBody"
import { useTranslation } from 'react-i18next';

function TabPanel(props) {
  
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}


const Testimonial = () => {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="testimonial">
      <div className="cases-title">
        <h2>{t('cases-title')}</h2>
      </div>
      <div className="test-header">
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            indicatorColor="secondary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab icon={<Avatar img={test1} />} {...a11yProps(0)} />
            <Tab icon={<Avatar img={test2} />} {...a11yProps(1)} />
            <Tab icon={<Avatar img={test3} />} {...a11yProps(2)} />
          </Tabs>
        </AppBar>
      </div>
      <div className="test-body">
        <TabPanel value={value} index={0}>
          <TestimonialBody name={t('testimonial.name')} job={t('testimonial.job')}
            quotes={t('testimonial.paragraph')} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TestimonialBody name={t('testimonial.name1')} job={t('testimonial.job1')} quotes={t('testimonial.paragraph1')} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TestimonialBody name={t('testimonial.name2')} job={t('testimonial.job2')} quotes={t('testimonial.paragraph2')} />
        </TabPanel>
      </div>
    </div>
  );
}

export default Testimonial