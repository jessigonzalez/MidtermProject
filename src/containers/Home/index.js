import React, {useEffect, useState} from 'react';
import makeupData from '../../components/SiteData/makeupInfo';

//import brandAssessment from '../../components/brandAssessment/index.js';
//import adoptionPrompt from '../../components/adoptionPrompt/index.js';
//import '../../ldHigmVe_orgs_1.json.parse';

function Home(props){
  const [brand, setBrand] = useState({});
  const arr = []

  function ArticleCard({articleContent}){
    return(
      <div className="ArticleCard">
        <a href={`/article/${articleContent.brand}`}>
          <button className="title">{articleContent.brand}</button>
        </a>
      </div>
    )
  }

  function queryCompanies(queryName){
    for(var i = 0; i < 51; i++) {
      if (!(queryName[i] in arr)){
        arr.push(queryName[i]);
      }
    }
  }

  useEffect(() => {
    queryCompanies(makeupData);
  },[brand]);
console.log('brand',brand);

var toDisplay = queryCompanies(makeupData);

console.log(arr);
  return (
    <div className="PageData">
      <h1 style={{textAlign:"center"}}>Find out if your preferred makeup brand is cruelty-free</h1>
        {arr.map((brand, i) => (
          <div>
            <ArticleCard key={i} articleContent={brand}/>
          </div>
        ))}
    </div>

  );
}
export default Home
//  <a href="#" class="btn btn-info" role="button">Link Button</a>



/*
{arr.map((brand, i) => (
  <div key={brand.id}>
    <button>{brand.brand}</button>
  </div>
))}
*/
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
