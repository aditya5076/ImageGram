import React, { useEffect } from 'react';
import useStorage from '../customHooks/useStorage';
import { motion } from 'framer-motion';

export default function ProgressBar({ file, setFile }) {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div
      className='progress-bar'
      initial={{ width: 0 }}
      transition={{ width: progress + '%' }}></motion.div>
  );
}
