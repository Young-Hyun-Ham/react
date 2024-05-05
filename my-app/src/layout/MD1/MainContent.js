import React from 'react';
import { Route, Routes } from 'react-router-dom';


/* lifeCycle */
import R003 from '../../exam/lifeCycle/R003';
import R004 from '../../exam/lifeCycle/R004';
import R005 from '../../exam/lifeCycle/R005';
import R006 from '../../exam/lifeCycle/R006';
import R007 from '../../exam/lifeCycle/R007';
import R008 from '../../exam/lifeCycle/R008';

/* Es6 */
import R009 from '../../exam/es6/R009';
import R010 from '../../exam/es6/R010';
import R011 from '../../exam/es6/R011';
import R012 from '../../exam/es6/R012';
import R013 from '../../exam/es6/R013';
import R014 from '../../exam/es6/R014';
import R015 from '../../exam/es6/R015';
import R016 from '../../exam/es6/R016';

/* basic */
import R017 from '../../exam/basic/R017';
import R018 from '../../exam/basic/R018';
import R019 from '../../exam/basic/R019';
import R020 from '../../exam/basic/R020';
import R021 from '../../exam/basic/R021';
import R022 from '../../exam/basic/R022';
import R023 from '../../exam/basic/R023';
import R024 from '../../exam/basic/R024';
import R025 from '../../exam/basic/R025';
import R026 from '../../exam/basic/R026';
import R027 from '../../exam/basic/R027';
import R028 from '../../exam/basic/R028';
import R029 from '../../exam/basic/R029';
import R030 from '../../exam/basic/R030';
import R031 from '../../exam/basic/R031';
import R032 from '../../exam/basic/R032';
import R033 from '../../exam/basic/R033';
import R034 from '../../exam/basic/R034';
import R035 from '../../exam/basic/R035';
import R036 from '../../exam/basic/R036';


const MainContent = () => {
  return (
    <>
    {/* Route configuration */}
    <Routes>
      <Route path="/lifeCycle/R003" element={<R003 />} />
      <Route path="/lifeCycle/R004" element={<R004 />} />
      <Route path="/lifeCycle/R005" element={<R005 />} />
      <Route path="/lifeCycle/R006" element={<R006 />} />
      <Route path="/lifeCycle/R007" element={<R007 />} />
      <Route path="/lifeCycle/R008" element={<R008 />} />

      <Route path="/es6/R009" element={<R009 />} />
      <Route path="/es6/R010" element={<R010 />} />
      <Route path="/es6/R011" element={<R011 />} />
      <Route path="/es6/R012" element={<R012 />} />
      <Route path="/es6/R013" element={<R013 />} />
      <Route path="/es6/R014" element={<R014 />} />
      <Route path="/es6/R015" element={<R015 />} />
      <Route path="/es6/R016" element={<R016 />} />

      <Route path="/basic/R017" element={<R017 />} />
      <Route path="/basic/R018" element={<R018 />} />
      <Route path="/basic/R019" element={<R019 />} />
      <Route path="/basic/R020" element={<R020 />} />
      <Route path="/basic/R021" element={<R021 str="200"/>} />
      <Route path="/basic/R022" element={<R022 />} />
      <Route path="/basic/R023" element={<R023 />} />
      <Route path="/basic/R024" element={<R024 />} />
      <Route path="/basic/R025" element={<R025 />} />
      <Route path="/basic/R026" element={<R026 />} />
      <Route path="/basic/R027" element={<R027 />} />
      <Route path="/basic/R028" element={<R028 />} />
      <Route path="/basic/R029" element={<R029 />} />
      <Route path="/basic/R030" element={<R030 />} />
      <Route path="/basic/R031" element={<R031 />} />
      <Route path="/basic/R032" element={<R032 />} />
      <Route path="/basic/R033" element={<R033 />} />
      <Route path="/basic/R034" element={<R034 />} />
      <Route path="/basic/R035/:userId" element={<R035 />} />
      <Route path="/basic/R036" element={<R036 />} />
    </Routes>
  </>
  );
};

export default MainContent;