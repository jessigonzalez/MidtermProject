import React from 'react';
import makeupData from '../../makeupInfo.js';

export default function BrandAssessment(props){
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
    let getBrandName = makeupData.brand;
    let getCFvalue = makeupData.tag_list;
    setBrand(getBrandName);
    setCF(getCFvalue);
  },[brand]);
console.log('brand',brand);

var toDisplay = queryCompanies(makeupData);

console.log(arr);
  return (
    <div>
    <h1>Hello!</h1>
    </div>
  );
}
