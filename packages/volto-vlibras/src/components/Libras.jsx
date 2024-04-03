import React, { useEffect, useState } from 'react';
import { isCmsUi } from '@plone/volto/helpers';

const widgetSrc = 'https://vlibras.gov.br/app';
const scriptId = 'VLibras';
const scriptSrc = `https://vlibras.gov.br/app/vlibras-plugin.js`;

const loadVLibras = (callback) => {
  const existingScript = document.getElementById(scriptId);
  if (existingScript && callback) {
    callback(true);
  } else {
    if (callback) callback(false);
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.id = scriptId;
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      if (callback) callback(true);
      if (typeof window !== 'undefined') {
        new window.VLibras.Widget(widgetSrc);
      }
    };
  }
};

const Libras = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [status, setStatus] = useState('enabled');
  const { location } = props;
  const pathName = location.pathname;

  useEffect(() => {
    loadVLibras(setLoaded);
  }, [loaded]);

  useEffect(() => {
    // Disable widget on non content routes
    if (isCmsUi(pathName)) {
      setStatus('disabled');
    } else {
      setStatus('enabled');
    }
  }, [pathName]);
  return (
    <div vw="true" className={status} id={'vlibras-wrapper'}>
      <div vw-access-button="true" className="active"></div>
      <div vw-plugin-wrapper="true">
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
};

export default Libras;
