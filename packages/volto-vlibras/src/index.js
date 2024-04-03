import Libras from './components/Libras';

const applyConfig = (config) => {
  return config;
};

export const ciProfile = (config) => {
  config.settings.appExtras = [
    ...config.settings.appExtras,
    {
      match: '',
      component: Libras,
    },
  ];
  return config;
};

export default applyConfig;
