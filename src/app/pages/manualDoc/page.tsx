'use client';
import WebViewer from '@pdftron/webviewer';
import { useRef, useEffect } from 'react';

export default function ManualDoc()  {
  
  const viewer = useRef(null);

  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: '/webviewer/lib',
          licenseKey: 'demo:1729229268549:7e1e416903000000008e4b5889f61d21e6fc074abd352a8327b6412434', // sign up to get a key at https://dev.apryse.com
          initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
        },
        viewer.current,
      ).then((instance) => {
          const { docViewer } = instance;
          // you can now call WebViewer APIs here...
        });
    })
  }, []);

  return ( 
    <div className="MyComponent">
    <div className="header">React sample</div>
    <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
  </div>
   ); 
  }