import React, { useState } from 'react';
import Navbar from './Navbar';
import Editor from './Editor';
import Previewer from './Previewer';

const BodyComponent = () => {
  const [markdown, setMarkdown] = useState('');
  const [style, setStyle] = useState('default'); // State to manage selected style

  const handleEditorChange = (event) => {
    setMarkdown(event.target.value);
  };

  const handleStyleChange = (selectedStyle) => {
    setStyle(selectedStyle);
  };

  return (
    <div className={`flex flex-col h-screen ${style}`}>
      {/* Pass handleStyleChange function to Navbar */}
      <Navbar onStyleChange={handleStyleChange} />
      <div className="flex-grow flex flex-row">
        <div className="md:w-1/2 m-2">
          <Editor onChange={handleEditorChange} value={markdown} />
        </div>
        <div className="md:w-1/2 m-2 overflow-auto">
          <Previewer markdown={markdown} />
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
