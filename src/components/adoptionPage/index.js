import React, {useEffect,useState} from 'react';
import makeupData from '../SiteData/makeupInfo';
import orgs from '../SiteData/ldHigmVe_orgs_1.js';

const path = require('path');


function Article(props){
  const [article, setArticle] = useState({});//set as empty object
  const [cf,setCF] = useState(false);
  const cfValue = "cruelty free";
  const routeId = props.match.params.id;
  console.log(routeId);

  const [shelter, setShelter] = useState({});

  useEffect(() => {
    for(let i = 0; i<makeupData.length;i++){
      if(makeupData[i].brand === routeId){
        setArticle(makeupData[i])
        setCF(makeupData[i].tag_list.includes(cfValue))
      }
      else{
        console.log('nope')
      }
    }
  },[]);
  console.log('article',article);

  console.log('cf',cf);
  var desc = '';
  var paragraph = '';
  if(cf === true){
    desc = "This makeup brand is Cruelty Free"
    paragraph = "Congradulations, this makeup brand is cruelty-free! This means that this brand adheres to cruelty-free practices and therefore protects innocent animals. To keep doing your part in helping these animals, enter your zipcode for information catered to you:"
  }
  if(cf === false){
    desc = "This makeup brand is NOT Cruelty Free"
    paragraph = "Unfortunately, this makeup brand is NOT cruelty-free. This means that this brand does not adhere to cruelty-free practices and therefore affects innocent animals. To do your part in helping these animals, enter your zipcode for information catered to you:"
  }

//This is the code I wrote in an attempt to display shelter data based on the input value, zipcode, entered by the user
/*
  useEffect(() => {
    for(let i = 0; i<orgs.length;i++){
      if(orgs[i].zip === this.state.value){
        setShelter(orgs[i])
      }
      else{
        console.log('No shelter nearby')
      }
    }
  },[]);
var shelterDesc = "The nearest shelter near you is " {orgs.name};
var shelterURL = "For more info, check out: " {orgs.orgurl};
var shelterServices = "Services include: " {orgs.services};
  class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
    }

    handleChange = (event) => {
      this.setState({value: event.target.value});
    }

    render() {
      let header = '';
      if (this.state.value) {
        header = <h1>{this.state.value}</h1>;
      } else {
        header = '';
      }
    return(
      <form>
        <label>Zipcode:
        <input type='text'
        onChange={this.handleChange}
        zipcode ="zipcode"/>
        </label>
        <input type="submit" value="Submit" />
      </form>

      <p style ={{textAlign:"left", marginLeft:"30%", marginRight:"30%"}}>{shelterDesc}</p>
      <p style ={{textAlign:"left", marginLeft:"30%", marginRight:"30%"}}>{shelterURL}</p>
      <p style ={{textAlign:"left", marginLeft:"30%", marginRight:"30%"}}>{shelterServices}</p>
    );
    }
  }
*/
  return(
    <div className="article">
      <div>
          <h1 style={{center:"left",paddingTop: "30px"}}>{article.brand}</h1>
          <h3 style={{center:"left", marginLeft:"30%", marginRight:"30%"}}>{desc}</h3>
          <p style={{textAlign:"left"}}>{paragraph}</p>

          <form>
            <label>
              Zipcode:
              <input type="text" zipcode="zipcode" />
            </label>
              <input type="submit" value="Submit" />
          </form>
      </div>
    </div>
  );

}
export default Article;
