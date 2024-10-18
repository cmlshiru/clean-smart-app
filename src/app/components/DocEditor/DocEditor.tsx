import { useEffect, useRef, FC } from 'react';
// import WebViewer from '@pdftron/webviewer';

interface DocEditorProps {
  title?:string;
}

const DocEditor:FC<DocEditorProps> = () => {
  const viewer = useRef(null);

  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: '/webviewer/lib',
          enableOfficeEditing: true,
          licenseKey: 'demo:1729229268549:7e1e416903000000008e4b5889f61d21e6fc074abd352a8327b6412434'  // sign up to get a free trial key at https://dev.apryse.com
        },
        viewer.current
      ).then((instance) => {
        const { docViewer } = instance;
        // you can now call WebViewer APIs here...
      });
    });
  }, []);

  return (
    <div className='MyComponent'>
      <div className='webviewer' ref={viewer} style={{ height: '100vh' }}></div>
    </div>
  );
}


export default DocEditor;