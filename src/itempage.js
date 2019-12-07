import React from 'react';
import './itempage.css';
import SimpleImageSlider from "react-simple-image-slider";

// import ReactDOM from 'react-dom';
import $ from 'jquery';



class Itempage extends React.Component {
    // constructor(props) {
    //   super(props);
  



    // }

    render(){
        const images = [
            { url: "https://scontent.famm2-2.fna.fbcdn.net/v/t1.0-9/50724681_610821632684135_2546750838697623552_n.jpg?_nc_cat=105&_nc_eui2=AeFbJ_F7lo2o6yIJsYtdzJxwZr8vqqdBxs-fpwQZKXhNJB8OFg-_9h4cIQdjzVDgGtp8PMpLyOxdCpq5-w4eKXKT5TXqRW2Hf_KLMN0vCRPcEw&_nc_ohc=6gUBBgRfSaMAQn_uQfcpnGAPBS1QO9yvZKLYyUshrhxJcWbkq-7AG4lcA&_nc_ht=scontent.famm2-2.fna&oh=7dfc5ce898f69cc1be45619447725e3f&oe=5E41E9F3" },
            { url: "https://scontent.famm2-2.fna.fbcdn.net/v/t1.0-9/46717220_576719706094328_4662185500864413696_n.jpg?_nc_cat=109&_nc_eui2=AeG8NEsnBMPDCtTaUsvo2CatUDuBHru9wkXqqquWinTT2E73qqh8SYDMLn5MKuSClWytWNw99Y0elJj5BS5yyABVKzMejkmenXllvcA0A8eCAQ&_nc_ohc=5woc84oT-PAAQkK54F6M3KzEadb3JkAcAUxsihi-oFhceXEZlWnIzCcFw&_nc_ht=scontent.famm2-2.fna&oh=f58ddc64ffd97624c03350ac718dbca3&oe=5E6CAE2B" },
            { url: "https://scontent.famm2-1.fna.fbcdn.net/v/t1.0-9/46519953_576719752760990_1525466731638685696_n.jpg?_nc_cat=102&_nc_eui2=AeEZ2ZLpVV8_O94SpA9K0ZcYte3dQBvd9OU4PKc4Rgg7WDG0y1r8kOCOje-_D3CUQXmJC5EsNhjdlCeqq--yCDEUAtWMHGdCgVo9FgDbff2ZXQ&_nc_ohc=0qR1DqEnh4kAQnq8eEfiUEie8Sy0HufJ9NtNShl8FX17lpjOY-K1zvT6A&_nc_ht=scontent.famm2-1.fna&oh=1b7d6e8217660491215344078a9dff8a&oe=5E8867F9" },
           
           
        ];
       
        return(
            <div id="Itempage"> 

            
             <div>        
            <img id="pic1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaLgCfVXyQfmlYGE_LpHj7Dussc_ZErHlFNx1fomhcuGwvIGh9&s"/>
            </div>

            <div>
                <SimpleImageSlider id="slider"
                    width={1200}
                    height={300}
                    images={images}
                    style={ { margin: "0 auto", marginTop: "50px",position:"center"}}
                />
            </div>
            <br/>

            <div>
                <h1>
                    gggggggggooooooooooo
                </h1>
            </div>
           
</div>   

        )
    }

}

export default Itempage;

// ReactDOM.render(<Itempage />, document.getElementById("Itempage"));