import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  // verify on image
  const types = ['image/png', 'image/jpeg'];

  function changeHandler(e) {
    const selectedImage = e.target.files[0];

    if (selectedImage && types.includes(selectedImage.type)) {
      setFile(selectedImage);
      setError('');
    } else {
      setError('please select only image file');
      setFile(null);
    }
  }
  return (
    <>
      <form>
        <label>
          <input type='file' onChange={changeHandler} />
          <span>+</span>
        </label>

        <div className='output'>
          {error && <div className='error'>{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </>
  );
}
