import React from 'react';

function Channel(){
    return(
        <div class="container">
            <div class="row-md-12">
                <h4 class="display-4">NeoXFANGPLAY Channel</h4>
                <img src={ require('./img/LOGO-X+8.png') } style={{ width: 600, height: 300 }} alt="Rounded Image" class="rounded"/>
                <br/><a href="https://www.facebook.com/neoxfangplay" target="_blank"
        rel="noreferrer"><p>Facebook Fanpage</p></a>
                <a href="https://www.youtube.com/channel/UCTfcciUBkQH7ecExH7Qloaw"target="_blank"
        rel="noreferrer"><p>Youtube Channel</p></a>
                <a href="https://www.twitch.tv/neoxfangplay"target="_blank"
        rel="noreferrer"><p>Twitch Channel</p></a>
            </div>
        </div>
    );
}
export default Channel;