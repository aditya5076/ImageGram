import React from 'react';
import useFirestore from '../customHooks/useFirestore';
import { motion } from 'framer-motion';

export default function ImageGrid({ setSelectedImg }) {
  const { docs } = useFirestore('images');
  console.log(docs);
  return (
    <>
      <div className='img-grid'>
        {docs &&
          docs.map((doc) => (
            <motion.div
              className='img-wrap'
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}
              onClick={() => setSelectedImg(doc.url)}>
              {doc.id && (
                <motion.img
                  src={doc.url}
                  alt='uploaded'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                />
              )}
            </motion.div>
          ))}
      </div>
    </>
  );
}
