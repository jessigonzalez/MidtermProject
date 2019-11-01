import React, {useEffect,useState} from 'react';

import makeupData from '../../makeupInfo.js';

function Article(props){
  const [article, setArticle] = useState({});//set as empty object
  const [cf,setCF] = useState(false);

  const routeId = props.match.params.id;

  useEffect(() => {
    for(let i = 0; i<makeupData.length;i++){
      if(makeupData[i].id === routeId){
        setArticle(makeupData[i])
      }
      else{
        console.log('nope')
      }
    }
  },[]);

  console.log('brand info',article);


  function isCrueltyFree({brandChosen}){
    for(let i = 0; i<article.tag_list; i++){
      if (article.tag_list[i]){
        setCF = true;
      }
    }
  }

  
  return(
    <div className="article">

      <div>
          <h1 style={{textAlign:"left",paddingTop: "30px", marginLeft:"30%", marginRight:"30%"}}>{article.brand}</h1>
          <h3 style={{textAlign:"left", paddingBottom: "30px", marginLeft:"30%", marginRight:"30%"}}>{article.blurb}</h3>
      </div>

      <div style ={{textAlign:"left", marginLeft:"30%", marginRight:"30%"}}>
        <div className="article__text">
          {article.articleText && article.articleText.map((text,i)=> (
            <TextBlock key={i} type={text.type} data={text.data}/>
          ))}
        </div>
      </div>

    </div>
  );

}
export default Article;
