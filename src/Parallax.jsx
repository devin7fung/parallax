import React from "react";
import Navbar from "./Navbar";
import "./Parallax.css";

function Parallax() {
  return (
    <div className="parallax">
      <div className="parallax_group1">
        <Navbar></Navbar>
        <div className="header">
          <img src="sky2.png" className="background"></img>
          <img src="moon4x.png" className="moon"></img>
          <img src="three.png" className="mountain"></img>
          <img src="foregroundcliffs4x.png" className="foreground"></img>
          <h1 className="welcome">Welcome!</h1>
        </div>
      </div>

      <div className="fade"></div>
      <div className="sec">
        <div className="lorem">
          <div className="text">
            <h2>Parallax Scrolling Effects</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            nemo, obcaecati, aut libero nihil saepe facere pariatur doloremque
            quod quasi fugit nostrum beatae repellat sint mollitia reprehenderit
            dolores deleniti, soluta at in voluptatem illo? Laboriosam
            quibusdam, eum ipsa fuga officiis deserunt. Rem enim neque
            recusandae odio optio doloremque commodi impedit, repellat porro
            esse quisquam molestias consequatur expedita voluptatum soluta
            aliquam animi ipsum illo adipisci labore eos quas deleniti.
            Accusamus, obcaecati cum animi nostrum, iste autem dolor explicabo
            facere adipisci exercitationem esse voluptatibus assumenda
            dignissimos nobis tenetur omnis provident. Ratione temporibus
            tempore dolor! Accusamus placeat excepturi, ea beatae veniam,
            aliquid voluptate eum ipsa aliquam doloremque, id iusto vel
            explicabo dolorum velit incidunt vero nesciunt! Commodi odit facere
            ducimus doloremque nesciunt, iste impedit corporis cum atque,
            placeat culpa alias consequuntur repellat corrupti iusto vero
            voluptatem similique doloribus aperiam eum a voluptas excepturi
            nobis? Incidunt magni excepturi animi quibusdam. Excepturi, dolore
            repudiandae ipsum beatae maxime ratione non? Neque pariatur itaque
            possimus suscipit id adipisci distinctio accusantium. Minus,
            excepturi. Esse possimus voluptatum quis id eligendi, asperiores
            labore quia distinctio commodi velit consectetur, beatae qui rerum
            impedit ad, doloribus amet nam fugiat sit!
          </div>
          <div className="fade2"></div>
          <div className="text purp">
            <h2>Parallax Scrolling Effects</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            nemo, obcaecati, aut libero nihil saepe facere pariatur doloremque
            quod quasi fugit nostrum beatae repellat sint mollitia reprehenderit
            dolores deleniti, soluta at in voluptatem illo? Laboriosam
            quibusdam, eum ipsa fuga officiis deserunt. Rem enim neque
            recusandae odio optio doloremque commodi impedit, repellat porro
            esse quisquam molestias consequatur expedita voluptatum soluta
            aliquam animi ipsum illo adipisci labore eos quas deleniti.
            Accusamus, obcaecati cum animi nostrum, iste autem dolor explicabo
            facere adipisci exercitationem esse voluptatibus assumenda
            dignissimos nobis tenetur omnis provident. Ratione temporibus
            tempore dolor! Accusamus placeat excepturi, ea beatae veniam,
            aliquid voluptate eum ipsa aliquam doloremque, id iusto vel
            explicabo dolorum velit incidunt vero nesciunt! Commodi odit facere
            ducimus doloremque nesciunt, iste impedit corporis cum atque,
            placeat culpa alias consequuntur repellat corrupti iusto vero
            voluptatem similique doloribus aperiam eum a voluptas excepturi
            nobis? Incidunt magni excepturi animi quibusdam. Excepturi, dolore
            repudiandae ipsum beatae maxime ratione non? Neque pariatur itaque
            possimus suscipit id adipisci distinctio accusantium. Minus,
            excepturi. Esse possimus voluptatum quis id eligendi, asperiores
            labore quia distinctio commodi velit consectetur, beatae qui rerum
            impedit ad, doloribus amet nam fugiat sit!
          </div>
          <div className="fade3"></div>
        </div>
      </div>

      <h1 className="goodbye">Parallax Beauty</h1>
      <div className="parallax_group2">
        <div className="header">
          <img src="purplebackground.png" className="purpbackground"></img>
          <img src="purpleforeground.png" className="purpforeground"></img>
        </div>
      </div>
      <div className="footer">Parallax</div>
    </div>
  );
}

export default Parallax;
