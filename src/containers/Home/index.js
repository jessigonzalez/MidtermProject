import React, {useEffect, useState} from 'react';
import makeupData from '../../makeupInfo.js';

//import brandAssessment from '../../components/brandAssessment/index.js';
//import adoptionPrompt from '../../components/adoptionPrompt/index.js';
//import '../../ldHigmVe_orgs_1.json.parse';


function Home(props){
  const [brand, setBrand] = useState({});
  const [cf,setCF] = useState('');
  const arr = []
  function queryCompanies(queryName){
    for(var i = 0; i < 51; i++) {
      if (!(queryName[i] in arr)){
        arr.push(queryName[i]);
      }
    }
  }

  function isCrueltyFree(brandChosen){

  }
  useEffect(() => {
    queryCompanies(makeupData);
  },[brand]);
console.log('brand',brand);

var toDisplay = queryCompanies(makeupData);

console.log(arr);
  return (
    <div>
        {arr.map((brand, i) => (
          <div key={brand.id}>
            <button>{brand.brand}</button>
          </div>
        ))}
    </div>

  );
}
export default Home


/*
useEffect(() => {
  let getBrandName = makeupData.brand;
  let getCFvalue = makeupData.tag_list;
  setBrand(getBrandName);
  setCF(getCFvalue);
}, [brand]);




function Home(props){
  const [brand, setBrand] = useState({});
  const [cf,setCF] = useState('');
  const arr = []
  return (
    <div>
        {makeupData.map((brand, i) => (
          <div key={brand.id}>
            <h1>{brand.brand}, {brand.id}</h1>
          </div>
        ))}
    </div>
  );
}
export default Home
*/
