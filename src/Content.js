import MainContent from "./Main/MainContent";
import SideContent from "./Main/SideContent";

const Content = () => {
   return (
      <>
         <div className="container">
            <div className="articles">
               <MainContent />
               <SideContent />

               <div className="col-2">
                  <div>AboutMe</div>
               </div>
            </div>
         </div>
      </>
   );
};
export default Content;
